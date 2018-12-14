import React, {Component} from 'react';
import { Text, View, StyleSheet, 
    Alert, Button, TextInput,
    Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

class SwiperPage extends Component {
  static navigationOptions = {
      header: null
  };      

  render() {
    return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
          <Button title="Return to Home" onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
      </Swiper>
    </View>
    )
  }
}


export default SwiperPage