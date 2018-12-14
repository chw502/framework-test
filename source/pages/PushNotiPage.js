import React, {Component} from 'react';
import { StyleSheet, Dimensions, Text, View, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';




class PushNotiPage extends Component {
    static navigationOptions = {
        title: 'react-native-push-notification'
    };    

    constructor(props){
      super(props)
    }  

    ComponentDidMount(){
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
                console.warn( 'TOKEN:', token );
            },
        
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                console.warn( 'NOTIFICATION:', notification );
                // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
        
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },


            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
    
            /**
             * (optional) default: true
            * - Specified if permissions (ios) and token (android and ios) will requested or not,
            * - if not, you must call PushNotificationsHandler.requestPermissions() later
            */
            requestPermissions: true,            
        });        
    }

    triggerNotification(){
        PushNotification.localNotification({
            /* iOS and Android properties */
            title: "Local Notification", // (optional)
            message: "Hi! you get the notification!" // (required)                         
        })
    }

    triggerScheduleNotification(){
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            title: "Scheduled Notification", // (optional)
            message: "Hi! you pressed the button 2s before!", // (required)
            date: new Date(Date.now() + (2 * 1000)) // in 60 secs
        });        
    }
  
    render() {
      return (
          <View style={{margin: 20}}>
              <Text style={{marginBottom: 10}}>Press to get local notification</Text>
              <Button title="notify me" onPress={this.triggerNotification}/>
              <Text style={{marginBottom: 10}}>Press to get scheduled notification(after 2s)</Text>
              <Button color="green" title="notify me" onPress={this.triggerScheduleNotification}/>
          </View>
      )
    }  
}

export default PushNotiPage