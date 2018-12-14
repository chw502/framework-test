import TouchID from 'react-native-touch-id'
import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert, TouchableHighlight } from 'react-native';

const optionalConfigObject = {
    title: "Authentication Required", // Android
    imageColor: "#e00606", // Android
    imageErrorColor: "#ff0000", // Android
    sensorDescription: "Touch sensor", // Android
    sensorErrorDescription: "Failed", // Android
    cancelText: "Cancel", // Android
    fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false // iOS
}

class TouchIDPage extends Component {
    static navigationOptions = {
        title: 'react-native-touch-id'
    };      

    pressHandler() {
        TouchID.isSupported(optionalConfigObject)
          .then(biometryType => {
            console.warn("Support " + biometryType ? "Touch ID" : "FaceID" )
            TouchID.authenticate('Demostration on Authentication', optionalConfigObject)
                .then(success => {
                  Alert.alert('Authenticated Successfully');
                })
                .catch(error => {
                  Alert.alert('Authentication Failed');
                });
          })
          .catch(error => {
            Alert.alert("Your device does not support FaceID/TouchID authenication")
          });        

    }
    
    render() {
      return (
        <View style={{margin: 20}}>
          <Text>Press the button to start authenticate</Text>
            <TouchableHighlight 
                onPress={this.pressHandler}
                style={styles.button}
            >
              <Text style={{color: "#fff"}}>
              Authenticate with Touch ID
              </Text>
            </TouchableHighlight>
        </View>
      );
    }
}


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: "#0090ff",
      borderColor: "#0090ff",
      padding: 10,
      borderRadius: 5
    }
});

export default TouchIDPage