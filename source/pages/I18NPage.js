import React, {Component} from 'react';
import { Text, View } from 'react-native';
import I18n from 'react-native-i18n';

class I18NPage extends Component {
  static navigationOptions = {
    title: 'react-native-i18n'
  };    
  
  render() {
    return (
      <View style={{margin:20}}>
        <Text>Device locale: {I18n.locale}</Text>
        <Text>Greeting with device locale:  {I18n.t('greeting')}</Text>
      </View>
    );
  }  
}

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  zh: {
    greeting: '你好!',
  },
};

export default I18NPage