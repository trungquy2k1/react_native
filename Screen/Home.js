import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LandingScreen from './LandingScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const data = [
  {
    title: 'Browse  Food',
    
    text: 'Welcome to our restaurant app! \n Log in and check  out our delicious food.',
    image: require('../assets/icons8-restaurant-menu-101.png'),
    bg: '#5EA33A',
  },
  {
    title: 'Order food',
    text: 'Hungry? Order food in just a few clicks \n and we’ll take care of you..',
    image: require('../assets/icons8-delivery-500.png'),
    bg: '#5EA33A',
  },
  {
    title: 'Make Reservations',
    text: "Book a table in advance to avoid \n waiting in line",
    image: require('../assets/noun_Calendar_2442157.png'),
    bg: '#5EA33A',
  },
  {
    title: 'Quick search',
    text: "Quickly find food items you like \n the most",
    image: require('../assets/noun_Binoculars_1107295.png'),
    bg: '#5EA33A',
  },
  {
    title: 'Apple pay',
    text: "We know you’re busy, so you can pay \n with your phone in just one click",
    image: require('../assets/noun_mac_2076879.png'),
    bg: '#5EA33A',
  },
];

type Item = typeof data[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 220,
    height: 220,
    marginVertical: 32,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export default function Home({ navigation }) {
  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
         <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
       
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;
   handleDone = () => {
     // Navigate to the login screen
     navigation.navigate('LandingScreen')
  }
  //render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={data}
          onDone={this.handleDone}

        />
      </View>
    );
  //}
}
