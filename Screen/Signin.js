import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button,TouchableOpacity } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập
    if (email === 'abc' && password === '1111') {
      // Xử lý đăng nhập thành công
      alert('Đăng nhập thành công');
    } else {
      // Xử lý đăng nhập thất bại
      alert('Đăng nhập thất bại');
    }
  };

  const handleFacebookLogin = () => {
    
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign In</Text>
      </View>
      
      <TextInput
        style={styles.input1}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View>
          <TouchableOpacity 
            style={styles.but1}
            onPress={handleLogin}
          >
            <Text style={styles.but4}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

          <View>
          <TouchableOpacity 
            style={styles.but3}
            onPress={handleFacebookLogin}
          >
            <Text style={styles.but4}>Facebook Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  
  title: {
    color: '#5EA33A',
    fontSize: 28,
    // fontWeight: 'bold',
    marginBottom:10,
    paddingRight:250
  },
  input1: {
    height: 50,
    width: '80%',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  input: {
    height: 50,
    width: '80%',
    marginTop: 30,
    
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  but1: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#5EA33A",
    //marginBottom: 10,
    color: "white"
  },
  but3: {
    width: 300,
    borderRadius: 30,
    height: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#5EA33A",
    marginBottom: 200,
    color: "white",
    borderWidth: 1
  },
  but2: {
    color: 'white',
    fontSize: 20,

  },
  but4: {
    color: 'white',
    fontSize: 20,

  },
  orText: {
    marginVertical:30,
    textAlign:"center",
    fontSize: 21,
  },
});

export default App;