import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Icon from "@/assets/images/Vector.png";

interface LoginHeaderProps{
    title:string,
    text:string,
    linkText:string,
    path:string
}

export default function LoginHeader({linkText,text,title,path}:LoginHeaderProps) {
  return (
    <View style={styles.titleContainer}>
      <Image source={Icon} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.signUpContainer}>
        <Text style={styles.text}>{text}</Text>
        <Link href={{pathname:path as any}} style={styles.link}>
          {linkText}
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 90,
    width: "100%",
    alignItems: "center",
    marginBottom:32
  },
  title: {
    color: "#F5F5F5",
    marginTop: 16,
    fontSize: 36,
    maxWidth:250,
    textAlign:'center'
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  text: {
    color: "#F5F5F5",
  },
  link: {
    color: "#375DFB",
    fontWeight:'bold'
  },
});
