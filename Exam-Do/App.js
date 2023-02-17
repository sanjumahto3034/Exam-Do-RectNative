import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { useFont } from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    "WorkSans-ExtraBold": require("./assets/fonts/WorkSans-ExtraBold.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Black": require("./assets/fonts/WorkSans-Black.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.textContent}>Improve</Text>
        <Text style={styles.textContent}>Skills With</Text>
        <Text style={styles.textContent}>Exam Do.</Text>
        <StatusBar style={styles.statusBar} />
      </View>

            <View style={styles.googleBtnBG}>
            <View style={styles.googleBtn}>
            <Image
  source={{uri: "./assets/resource/google_png.png"}}
  style={{width: 5, height: 40}}
/>
                {/* <Image source={require("./assets/resource/google_png.png")}></Image> */}
                <Text style = {styles.googleBtnTxt}>Sign Up With Google</Text>
              </View>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252C4A",
  },
  headingContainer: {
    marginLeft: 30,
    marginTop: 420,
  },
  textContent: {
    lineHeight: 70,
    color: "#ffffff",
    fontSize: 52,
    fontFamily: "WorkSans-Black",
  },
  statusBar:{
    color:'#fff'
  },
  googleBtnBG:{
    flex:1,
    width:'auto',
    height:'auto',
    // alignItem:"center",
    alignItems:"center"
  },
  googleBtn:{
    marginTop:20,
    width:350,
    height:50,
    backgroundColor:'#fff',
    borderRadius:10,
    alignContent:"center",
  },
  googleBtnTxt:{
    textAlign:"center",
    marginTop:12,
    fontSize:18,
    fontFamily:"Roboto-Medium",
  }
});

// export default function App() {
//   const [loaded] = useFonts({
//     Montserrat: require('./assets/fonts/Yatra-One.ttf'),
//   });

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <View style={{flex:1}>
//       <Text style={{ fontFamily: 'Yatra-One', fontSize: 27 }}>Yatra-One</Text>
//     </View>
//   );
// }
