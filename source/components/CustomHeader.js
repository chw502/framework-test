import { Header, icon } from 'react-native'

export default CustomHeader = () => 
<Header
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Home') }}
/>