import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./Login";
import { ToastProvider } from "react-native-toast-notifications";


export default function Index() {
  return (
    <ToastProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Login/>
    </SafeAreaView>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container:{
        flex:1,
        backgroundColor:"#0D0D1B"
    }
})