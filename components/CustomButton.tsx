import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  btnCustomStyle?: Object;
  labelCustomStyle?: Object;
  btnLabel: string;
  handleFun?:()=>void
  isDisabled?:boolean
}


export default function CustomButton({
  btnLabel,
  btnCustomStyle,
  labelCustomStyle,
  handleFun,
  isDisabled=false
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.btn, btnCustomStyle,isDisabled && {opacity:0.4}]} onPress={handleFun} disabled={isDisabled}>
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
