import lockEye from "@/assets/images/eye.png";
import LockIcon from "@/assets/images/lock.png";
import MailIcon from "@/assets/images/mail.png";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import LoginHeader from "@/components/LoginHeader";
import { auth } from "@/Firebase";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useToast } from "react-native-toast-notifications";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLogged, setIsLogged] = useState(false);
  const toast = useToast();
  const router = useRouter()

  const handleOnChange = (key: string, text: string) => {
    setLoginData((prev) => ({
      ...prev,
      [key]: text,
    }));
  };

  const handleLogin = async () => {
    try {
      setIsLogged(true)
      const { email, password } = loginData;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // TODO: remove this 
      toast.show("Logged in Successfully!", {
        type: "success",
        placement: "top",
        duration: 4000,
        animationType: "zoom-in",
        style: {
          marginTop: 40,
        },
      });
      setLoginData({
        email:"",
        password:""
      })
      router.push(`/Home/${user.displayName}`)
    } catch (error) {
      toast.show("Login Failed!", {
        type: "danger",
        placement: "top",
        duration: 4000,
        animationType: "zoom-in",
        style: {
          marginTop: 40,
        },
      });
    }finally{
      setIsLogged(false)
    }
  };

  return (
    <View style={styles.container}>
      <LoginHeader
        linkText="Sign up"
        text="Don't have an account ? "
        title="Sign in to your Account"
        path="/SignUp"
      />
      <Input
        customStyle={styles.emailInput}
        placeholder="Email"
        inputMode="email"
        iconPath={MailIcon}
        handleOnChange={(text) => handleOnChange("email", text)}
        formValue={loginData.email}
      />
      <Input
        customStyle={styles.passwordInput}
        placeholder="Password"
        inputMode="text"
        iconPath={LockIcon}
        secondPath={lockEye}
        handleOnChange={(text) => handleOnChange("password", text)}
        formValue={loginData.password}
      />

      <Text style={styles.text}>Forgot Your Password ?</Text>
      <CustomButton
        btnLabel="Login"
        handleFun={handleLogin}
        isDisabled={isLogged}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D1B",
  },
  emailInput: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  passwordInput: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  icons: {
    position: "absolute",
    left: 34,
    top: 10,
  },
  endIcon: {
    position: "absolute",
    right: 34,
    top: 10,
  },
  text: {
    color: "#F5F5F5",
    textAlign: "center",
    marginBlock: 24,
  },
});
