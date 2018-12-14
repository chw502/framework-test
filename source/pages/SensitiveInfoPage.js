import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert, Button, TextInput } from 'react-native';
import SInfo from 'react-native-sensitive-info';

class SensitiveInfoPage extends Component {
    static navigationOptions = {
        title: 'react-native-sensitive-info'
    };      

    constructor(props){
        super(props)
        this.state = {
          storeKey: "",
          storeValue: "",
          allValue: {}
        }

        this.saveItem = this.saveItem.bind(this)
        this.getAllSavedItems = this.getAllSavedItems.bind(this)
        this.printAllSavedItems = this.printAllSavedItems.bind(this)
    }      


    saveItem(){
      var { storeKey, storeValue } = this.state
      SInfo.setItem(storeKey, storeValue, {
          sharedPreferencesName: 'mySharedPrefs',
          keychainService: 'myKeychain'
      }).then((value) =>
        this.getAllSavedItems()
      );            
    }

    getAllSavedItems(){
      SInfo.getAllItems({
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'
      }).then(values => {
        this.setState({allValue: values})
      });    
    }

    printAllSavedItems(){
      if(this.state.allValue){
        var allValue = this.state.allValue
        var allValueKeys = Object.keys(allValue)
        return (
          <View style={{marginTop: 20, borderWidth: 1}}>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1  }}>
              <Text style={{flex: 1, borderRightWidth: 1 , fontWeight: "bold"}}>Key</Text>
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
          <Text>Press the button to save to Android Shared Preferences/ iOS KeyChain</Text>
          <Text>Key</Text>
          <TextInput
            style={{height: 50, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
            onChangeText={(storeKey) => this.setState({storeKey})}
            value={this.state.storeKey}
          />          
          <Text>Value</Text>
          <TextInput
            style={{height: 50, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
            onChangeText={(storeValue) => this.setState({storeValue})}
            value={this.state.storeValue}
          />                    
          <Button title="Save" onPress={this.saveItem} />

          <Text>Data stored in store: </Text>
          <View>{this.printAllSavedItems()}</View>
          
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

export default SensitiveInfoPage