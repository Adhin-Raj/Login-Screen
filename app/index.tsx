import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./Login";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
        flex:1,
        backgroundColor:"#0D0D1B"
    }
})