import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CustomButtonProps {
  btnCustomStyle?: Object;
  labelCustomStyle?: Object;
  btnLabel: string;
  handleFun?:()=>void
}

export default function CustomButton({
  btnLabel,
  btnCustomStyle,
  labelCustomStyle,
  handleFun
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.btn, btnCustomStyle]} onPress={handleFun}>
      <Text style={[styles.text, labelCustomStyle]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingBlock: 14,
    backgroundColor: "#1D61E7",
    justifyContent: "center",
    alignItems: "center",
    marginInline: 20,
    borderRadius: 10,
  },
  text: {
    color: "#F5F5F5",
  },
});
