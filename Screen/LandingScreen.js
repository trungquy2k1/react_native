import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity } from 'react-native';

export default function LandingScreen({ navigation }) { // truyền navigation qua props
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/icons8-restaurant-menu-102.png')}
      />
      <View>
        <Text style={styles.box1}>Browse  Food</Text>
      </View>
      <View>
        <Text style={styles.box2}>Welcome to our restaurant app! Log in
        and check  out our delicious food.</Text>
        <View>
      <TouchableOpacity style={styles.but1}
         onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.but2}>Sign In</Text>
      </TouchableOpacity>
    </View>

        <View>
          <TouchableOpacity 
            style={styles.but3}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.but4}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  tinyLogo: {
    marginTop: -150,
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,

  },
  box1: {
    color: '#5EA33A',
    marginTop: 30,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  box2: {
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    alignItems: 'center',
    marginBottom: 20,

  },
  but1: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#5EA33A",
    marginBottom: 10,
    color: "white"
  },
  but3: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "white",
    marginBottom: 150,
    color: "white",
    borderWidth: 1
  },
  but2: {
    color: 'white',
    fontSize: 20,

  },
  but4: {
    color: '#5EA33A',
    fontSize: 20,

  },
});