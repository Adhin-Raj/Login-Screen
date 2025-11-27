import calendarIcon from "@/assets/images/calendar-due.png";
import lockIcon from "@/assets/images/lock.png";
import MailIcon from "@/assets/images/mail.png";
import phoneIcon from "@/assets/images/phone.png";
import userIcon from "@/assets/images/user-circle.png";
import CustomButton from "@/components/CustomButton";
import DateInput from "@/components/DateInput";
import Input from "@/components/Input";
import LoginHeader from "@/components/LoginHeader";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "@/Firebase";
import { useToast } from "react-native-toast-notifications";
import { useRouter } from "expo-router";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
  });
  const [isPassWord, setIsPassword] = useState(true);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const toast = useToast();
  const router = useRouter();

  type keyType = "name" | "email" | "dob" | "phone" | "password";

  const handleOnChange = (key: keyType, text: string) => {
    setForm((prev) => ({ ...prev, [key]: text }));
  };

  const handlePasswordShow = () => {
    setIsPassword(!isPassWord);
  };

  const handleDateChange = (
    event?: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowTimePicker(false);

    if (event?.type === "dismissed") return;
    if (selectedDate) {
      setForm((prev) => ({
        ...prev,
        dob: selectedDate.toLocaleDateString("en-GB"),
      }));
    }
  };

  const handleSignUp = async () => {
    try {
      setIsCreated(true);
      let { email, password, name, dob, phone } = form;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await setDoc(doc(firestore, "users", user.uid), {
        name,
        email,
        dob,
        phone,
        createdAt: new Date(),
      });

      toast.show("User Created successfully", {
        type: "success",
        placement: "top",
        duration: 4000,
        animationType: "zoom-in",
        style: {
          marginTop: 40,
        },
      });
      setForm({
        name: "",
        email: "",
        dob: "",
        phone: "",
        password: "",
      });

      router.push(`/Home/${user.displayName}`)
    } catch (error) {
      toast.show(error, {
        type: "danger",
        placement: "top",
        duration: 4000,
        animationType: "zoom-in",
        style: {
          marginTop: 40,
        },
      });
    } finally {
      setIsCreated(false);
    }
  };

  return (
    <View style={styles.container}>
      <LoginHeader
        title="Create account"
        linkText="Login"
        text="Already have an account ?"
        path="/Login"
      />
      <Input
        handleOnChange={(text) => handleOnChange("name", text)}
        formValue={form.name}
        inputMode="text"
        placeholder="Name"
        customStyle={styles.nameInput}
        iconPath={userIcon}
      />
      <Input
        handleOnChange={(text) => handleOnChange("email", text)}
        formValue={form.email}
        inputMode="email"
        placeholder="Email"
        iconPath={MailIcon}
      />
      <DateInput
        iconPath={calendarIcon}
        handleDateChange={handleDateChange}
        formValue={form.dob}
        showTimePicker={showTimePicker}
        setShowTimePicker={setShowTimePicker}
      />
      <Input
        handleOnChange={(text) => handleOnChange("phone", text)}
        formValue={form.phone}
        inputMode="tel"
        maxLength={10}
        placeholder="Phone"
        iconPath={phoneIcon}
      />
      <Input
        handleOnChange={(text) => handleOnChange("password", text)}
        formValue={form.password}
        inputMode="text"
        isPassWord={isPassWord}
        placeholder="Password"
        iconPath={lockIcon}
        customStyle={styles.passwordInput}
        handlePasswordShow={handlePasswordShow}
      />

      <CustomButton
        handleFun={handleSignUp}
        btnLabel="Register"
        btnCustomStyle={styles.btnStyle}
        isDisabled={isCreated}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D1B",
  },
  nameInput: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  passwordInput: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnStyle: {
    marginBlock: 30,
  },
});
