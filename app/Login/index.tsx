import lockEye from "@/assets/images/eye-off.png";
import LockIcon from "@/assets/images/lock.png";
import MailIcon from "@/assets/images/mail.png";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import LoginHeader from "@/components/LoginHeader";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Login() {
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
      />
      <Input
        customStyle={styles.passwordInput}
        placeholder="Password"
        inputMode="text"
        iconPath={LockIcon}
        secondPath={lockEye}
      />

      <Text style={styles.text}>Forgot Your Password ?</Text>
      <CustomButton btnLabel="Login" />
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
