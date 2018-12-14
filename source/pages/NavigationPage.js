import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

class NavigationPage extends Component {
  static navigationOptions = {
    title: 'react-navigation'
  };     
    render() {
      return (
        <View style={{ margin: 20 }}>
          <Text>React Navigation</Text>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={{height: 44, flex: 2}}>Home</Text>
            <Button
              title="Go to Home"
              onPress={() => this.props.navigation.navigate('Home')}
            />             
          </View>   
          <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={{height: 44, flex: 2}}>Calendar Events</Text>
            <Button
              title="Go to Calendar Events"
              onPress={() => this.props.navigation.navigate('CalendarEvents')}
            />             
          </View>  
          <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={{height: 44, flex: 2}}>Camera</Text>
            <Button
              title="Go to Camera"
              onPress={() => this.props.navigation.navigate('Camera')}
            />             
          </View>  
          <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={{height: 44, flex: 2}}>Realm</Text>
            <Button
              title="Go to Realm"
              onPress={() => this.props.navigation.navigate('Realm')}
            />             
          </View>  
          <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={{height: 44, flex: 2}}>Home</Text>
            <Button
              title="Go to PDF"
              onPress={() => this.props.navigation.navigate('PDF')}
            />             
          </View>  
          <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={{height: 44, flex: 2}}>Go back</Text>
            <Button
              title="Go back"
              onPress={() => this.props.navigation.goBack()}
            />              
          </View>                                                           
        </View>
      );
    }
}

export default NavigationPage;