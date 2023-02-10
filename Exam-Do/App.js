import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';




export default function App() {

  return (
    <View style={styles.container}>
    <View style = {styles.headingContainer}>


      <Text style={styles.textContent}>IMPROVE</Text>
      <Text style={styles.textContent}>SKILLS WITH</Text>
      <Text style={styles.textContent}>EXAM DO</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#252C4A',
  },
  headingContainer: {
    marginLeft:30,
    marginTop:450
  },
  textContent:{
    color:"#fff",
    fontSize:50,
    fontFamily:'WorkSans-Bold'
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
