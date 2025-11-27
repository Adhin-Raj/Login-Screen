import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function HomeScreen() {
  const {displayName} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {displayName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:'#F5F5F5',
    justifyContent:'center',
    alignItems:"center"
 },
 text:{
    color:"#000",
    fontSize:24
 }
    
})