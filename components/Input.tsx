import {
  Image,
  ImageSourcePropType,
  InputModeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import eyeOff from "@/assets/images/hide.png";
import eyeOn from "@/assets/images/eye.png";

interface InputProps {
  placeholder: string;
  inputMode: InputModeOptions;
  customStyle?: Object;
  iconPath?: ImageSourcePropType;
  secondPath?: ImageSourcePropType;
  customPathStyle?: Object;
  secondPathStyle?: Object;
  maxLength?: number;
  isPassWord?: boolean;
  formValue: string;
  handleOnChange: (text: string) => void;
  handlePasswordShow?: () => void;
}

export default function Input({
  customStyle,
  inputMode,
  placeholder,
  iconPath,
  customPathStyle,
  secondPathStyle,
  secondPath,
  maxLength,
  formValue,
  isPassWord = false,
  handleOnChange,
  handlePasswordShow,
}: InputProps) {
  return (
    <View>
      <TextInput
        value={formValue}
        onChangeText={handleOnChange}
        inputMode={inputMode}
        secureTextEntry={isPassWord}
        placeholder={placeholder}
        maxLength={maxLength}
        style={[styles.inputStyle, customStyle]}
      />

      <Image source={iconPath} style={[styles.icons, customPathStyle]} />
      { placeholder === "Password" ? (
        <TouchableOpacity onPress={handlePasswordShow} style={styles.btn}>
          <Image
            source={isPassWord ? eyeOff : eyeOn}
            style={[styles.btnIcons]}
          />
        </TouchableOpacity>
      ) : (
        <Image source={secondPath} style={[styles.endIcon, secondPathStyle]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#F5F5F5",
    marginInline: 24,
    position: "relative",
    paddingLeft: 36,
    paddingRight: 36,
  },
  icons: {
    position: "absolute",
    left: 34,
    top: 13,
    width: 16,
    height: 16,
  },
  endIcon: {
    position: "absolute",
    right: 34,
    top: 13,
    width: 16,
    height: 16,
  },
  btn:{
    position:"absolute",
     right: 34,
    top: 13,
    width: 16,
    height: 16,
  },
  btnIcons:{
    width:16,
    height:16
  }
});
