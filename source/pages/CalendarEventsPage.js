import React, {Component} from 'react';
import { Alert, Text, View, Button, TextInput } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

class CalendarEventsPage extends Component {
    static navigationOptions = {
      title: 'react-native-calendar-events'
    };    

    constructor(props){
      super(props)
      this.state = {
        eventName: "Test",
        startDate: '2018-09-14T19:26:00.000Z',
        endDate: '2018-09-15T20:26:00.000Z'
      }

      this.addEvent = this.addEvent.bind(this)      
    }  

    async addEvent(){
      console.warn(JSON.stringify(this.state)) 
      await RNCalendarEvents.authorizeEventStore();
      RNCalendarEvents.saveEvent(this.state.eventName, {
            startDate: this.state.startDate,
            endDate: this.state.endDate
      }).then( () => {
        Alert.alert("Event added!", "Event is added to calendar!")
      }).catch((error) => {
        console.error(error)
      })
    }

  
    render() {
      return (
        <View style={{margin:20}}>
          <Text>Event Name</Text>
          <TextInput
            style={{height: 50, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
            onChangeText={(eventName) => this.setState({eventName})}
            value={this.state.eventName}
          />          
          <Text>Start Date</Text>
          <TextInput
            style={{height: 50, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
            onChangeText={(startDate) => this.setState({startDate})}
            value={this.state.startDate}
          />
          <Text>End Date</Text>
          <TextInput
            style={{height: 50, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
            onChangeText={(endDate) => this.setState({endDate})}
            value={this.state.endDate}
          />                    
          <Button onPress={this.addEvent} title="add event"/>
        </View>

      );
    }  
}

export default CalendarEventsPage