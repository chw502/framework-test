import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert, Button, TextInput } from 'react-native';
import DeviceInfo from 'react-native-device-info';


class DeviceInfoPage extends Component {
    static navigationOptions = {
        title: 'react-native-device-info'
    };      
    
    state = {
      batteryLevel: "",
      ipAddress: "",
      macAddress: ""
    }

    componentDidMount(){
      var batteryLv, ipAddress
      DeviceInfo.getBatteryLevel().then(batteryLevel => {
        this.setState({batteryLevel: batteryLevel})
      })
      DeviceInfo.getIPAddress().then(ip => {
        this.setState({ipAddress: ip})
      });
      DeviceInfo.getMACAddress().then(mac => {
        this.setState({macAddress: mac})
      });
    }


    printDeviceInfo(){
      if(this.state.allValue){
        var allValue = this.state.allValue
        var allValueKeys = Object.keys(allValue)
        return (
          <View style={{marginTop: 20, borderWidth: 1}}>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1  }}>
              <Text style={{flex: 1, borderRightWidth: 1 , fontWeight: "bold"}}>Information</Text>
              <Text style={{flex: 1, fontWeight: "bold"}}>Value</Text>
            </View>  
            {allValueKeys.map(key => {
              return (
                <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} key={key}>
                  <Text style={{flex: 1, borderRightWidth: 1}}>{key}</Text>
                  <Text style={{flex: 1}}>{allValue[key]}</Text>
                </View>  
              )
            })}
          </View>   
        )
      }
      return <Text>The store is empty...</Text>      
    }

    render() {
      return (
        <View style={{margin: 20}}>
          <Text>Some of the device information is shown below:</Text>

          <View style={{marginTop: 20, borderWidth: 1}}>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1  }}>
              <Text style={{flex: 1, borderRightWidth: 1 , fontWeight: "bold"}}>Information</Text>
              <Text style={{flex: 1, fontWeight: "bold"}}>Value</Text>
            </View>  
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Battery</Text>
              <Text style={{flex: 1}}>{this.state.batteryLevel}</Text>
            </View>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Brand</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getBrand()}</Text>
            </View>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Carrier</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getCarrier()}</Text>
            </View>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Device ID</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getDeviceId()}</Text>
            </View>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Device Name</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getDeviceName()}</Text>
            </View>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Free Disk Storage</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getFreeDiskStorage()}</Text>
            </View>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>IP Address</Text>
              <Text style={{flex: 1}}>{this.state.ipAddress}</Text>
            </View>                                    
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>MAC Address</Text>
              <Text style={{flex: 1}}>{this.state.macAddress}</Text>
            </View>                                    
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Manufacturer</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getManufacturer()}</Text>
            </View>                                    
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Max Memory</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getMaxMemory()}</Text>
            </View>                  
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Total Memory</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getTotalMemory()}</Text>
            </View>                                
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Model</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getModel()}</Text>
            </View>                                    
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>Phone number</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getPhoneNumber()}</Text>
            </View>                                    
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>System Name</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getSystemName()}</Text>
            </View>     
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} >
              <Text style={{flex: 1, borderRightWidth: 1}}>System Version</Text>
              <Text style={{flex: 1}}>{DeviceInfo.getSystemVersion()}</Text>
            </View>                                                                                                                                                                                 
          </View>  
        </View>
      );
    }
}



export default DeviceInfoPage