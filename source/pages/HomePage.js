import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import NavigationPage from './NavigationPage'
import PDFPage from './PDFPage'
import PushNotiPage from './PushNotiPage'
import CameraPage from './CameraPage'
import RealmPage from './RealmPage'
import I18NPage from './I18NPage'
import CalendarEventsPage from './CalendarEventsPage'
import TouchIDPage from './TouchIDPage'
import SensitiveInfoPage from './SensitiveInfoPage'
import DeviceInfoPage from './DeviceInfoPage'
import SwiperPage from './SwiperPage'

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
class HomePage extends Component<Props> { 
  static navigationOptions = {
    title: 'React Framework 1.4.0'
  };   

  render() { 
    return (
      <View style={{width: "100%"}}>      
        {/* <Image source={require('./source/others/banner.png')}/> */}
        <Text style={styles.welcome}>Welcome to React Native Framework 1.4.0</Text>
        <FlatList 
          style={{width: "90%"}}
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
    Home: HomePage,
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