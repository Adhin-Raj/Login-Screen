import calendarIcon from "@/assets/images/calendar-due.png";
import calendarIconFade from "@/assets/images/calendar.png";
import lockIcon from "@/assets/images/lock.png";
import MailIcon from "@/assets/images/mail.png";
import phoneIcon from "@/assets/images/phone.png";
import userIcon from "@/assets/images/user-circle.png";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import LoginHeader from "@/components/LoginHeader";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
  });
  const [isPassWord,setIsPassword] = useState(true)

  type keyType = "name"|'email'|'dob'|'phone'|'password'

    const handleOnChange = (key:keyType,text:string) => {
    setForm(prev => ({ ...prev, [key]: text }));
    };

    const handlePasswordShow =()=>{
      setIsPassword(!isPassWord)

    }
    
    const handleSubmit=()=>{
      console.log(form)
    }

  return (
    <View style={styles.container}>
      <LoginHeader
        title="Create account"
        linkText="Login"
        text="Already have an account ?"
        path="/Login"
      />
      <Input
        handleOnChange={(text)=>handleOnChange("name",text)}
        formValue={form.name}
        inputMode="text"
        placeholder="Name"
        customStyle={styles.nameInput}
        iconPath={userIcon}
      />
      <Input
        handleOnChange={(text)=>handleOnChange("email",text)}
        formValue={form.email}
        inputMode="email"
        placeholder="Email"
        iconPath={MailIcon}
      />
      <Input
        handleOnChange={(text)=>handleOnChange("dob",text)}
        formValue={form.dob}
        inputMode="numeric"
        placeholder="DOB (DD-MM-YYYY)"
        iconPath={calendarIcon}
        secondPath={calendarIconFade}
        maxLength={10}
      />
      <Input
        handleOnChange={(text)=>handleOnChange("phone",text)}
        formValue={form.phone}
        inputMode="tel"
        maxLength={10}
        placeholder="Phone"
        iconPath={phoneIcon}
      />
      <Input
        handleOnChange={(text)=>handleOnChange("password",text)}
        formValue={form.password}
        inputMode="text"
        isPassWord={isPassWord}
        placeholder="Password"
        iconPath={lockIcon}
        customStyle={styles.passwordInput}
        handlePasswordShow={handlePasswordShow}        
      />

      <CustomButton handleFun={handleSubmit} btnLabel="Register" btnCustomStyle={styles.btnStyle} />
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
