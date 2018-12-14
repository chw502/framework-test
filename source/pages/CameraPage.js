import React, {Component} from 'react';
import { PermissionsAndroid, Alert, Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { withNavigationFocus } from "react-navigation";
import { RNCamera } from 'react-native-camera';

class CameraPage extends Component {
  static navigationOptions = {
    title: 'react-native-camera'
  };    

  constructor(props){
    super(props)
    this.state = {
      isCameraReady: false
    }

    this.requestCameraPermission = this.requestCameraPermission.bind(this)
    this.requestCameraPermission()
  }   

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({isCameraReady: true})
        console.warn("Yes! You can use the camera")
      } else {
        console.warn("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async takePicture(camera) {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options)
      Alert.alert("Image taken!","image path: " + data.uri)
    }
  };  


  render(){
    const camStyles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column'
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
      }
    });     
    return (
      <View style={camStyles.container}> 
        {this.state.isCameraReady > 0 &&
          <RNCamera
            style = {{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
          >
          {({ camera, status }) => {
            {/* if (status !== 'READY') return <Text >Waiting for permission</Text>; */}
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={camStyles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}    
          </RNCamera>   
        }          
      </View>
    )
  }
}



export default withNavigationFocus(CameraPage)