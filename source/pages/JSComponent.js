import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components'


const TestButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
    background: palevioletred;
    color: white;
    `}
`;

const Container = styled.div`
text-align: center;
`

class JSComponetPage extends Component {
  static navigationOptions = {
    title: 'JS Component'
  };     


    render() {
      return (
        <View style={{ margin: 20 }}>
          <Text>React Navigation</Text>
                                                         
        </View>
      );
    }
}

export default JSComponetPage;