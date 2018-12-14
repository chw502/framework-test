/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import NavigationPage from './source/pages/NavigationPage'
import PDFPage from './source/pages/PDFPage'
import PushNotiPage from './source/pages/PushNotiPage'
import CameraPage from './source/pages/CameraPage'
import RealmPage from './source/pages/RealmPage'
import I18NPage from './source/pages/I18NPage'
import CalendarEventsPage from './source/pages/CalendarEventsPage'
import TouchIDPage from './source/pages/TouchIDPage'
import SensitiveInfoPage from './source/pages/SensitiveInfoPage'
import DeviceInfoPage from './source/pages/DeviceInfoPage'
import SwiperPage from './source/pages/SwiperPage'

const pageList = [{
    name: "Calendar Events",
    path: "CalendarEvents"
  },{
    name: "i18n",
    path: "I18N"
  },{
    name: "Navigation",
    path: "Navigation"
  },{
    name: "Camera",
    path: "Camera"
  },{
    name: "Realm",
    path: "Realm"
  },{
    name: "PDF",
    path: "PDF"
  },{
    name: "Push Notification",
    path: "PushNoti"
  },{
    name: "Touch ID",
    path: "TouchID"
  },{
    name: "Sensitive Info",
    path: "SensitiveInfo"
  },{
    name: "Device Info",
    path: "DeviceInfo"
  },{
    name: "Swiper",
    path: "Swiper"
  }
]


type Props = {};
class App extends Component<Props> { 
  static navigationOptions = {
    header: null
  };     

  render() { 
    return (
      <View style={styles.container}>   
        <Image source={require('./source/others/banner.png')}/>
        <Text style={styles.welcome}>Welcome to React Native Framework 1.4.0</Text>
        <FlatList 
          style={{width: "85%"}}
          data={pageList}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', margin: 5}}>
              <Text style={styles.item}>{item.name}</Text>
              <Button 
                title="Try"  
                onPress={() => this.props.navigation.navigate(`${item.path}`)}
                style={styles.itemBtn}
              />              
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flex: 2
  },  
  itemBtn: {
    marginLeft: "auto", 
    flex: 1
  }
});

export default createStackNavigator({
    Home: App,
    CalendarEvents: CalendarEventsPage,
    I18N: I18NPage,
    Navigation: NavigationPage,
    Camera: CameraPage,
    Realm: RealmPage,
    PDF: PDFPage,
    PushNoti: PushNotiPage,
    TouchID: TouchIDPage,
    SensitiveInfo: SensitiveInfoPage,
    DeviceInfo: DeviceInfoPage,
    Swiper: SwiperPage
  },
  {
    initialRouteName: 'Home',
});  