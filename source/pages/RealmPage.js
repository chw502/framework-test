import React, {Component} from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import Realm from 'realm';

const CatSchema = {
  name: 'Cat', 
  properties: {
    name: 'string', 
    size: 'string'
  }
}

class RealmPage extends Component {
  static navigationOptions = {
    title: 'realm'
  };    
  constructor(props) {
    super(props);
    this.state = { 
      realm: null,
      name: "",
      size: ""
    };
    this.addNewEntry = this.addNewEntry.bind(this)
    this.renderRealmObjects = this.renderRealmObjects.bind(this)
    this.clearStore = this.clearStore.bind(this)
  }

  componentDidMount() {
    Realm.open({
      schema: [CatSchema]
    }).then(realm => {
      this.setState({ realm });
    });
  }

  addNewEntry(){ 
    Realm.open({
      schema: [CatSchema]
    }).then(realm => {
      realm.write(() => {
        realm.create('Cat', {name: this.state.name, size: this.state.size });
      });
      this.setState({ realm: realm, name: "", size: "" });
    });      
  }

  renderRealmObjects(){
    if(this.state.realm){
      var cats = this.state.realm.objects('Cat')
      console.warn(cats)
      return (
        <View style={{marginTop: 20, borderWidth: 1}}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1  }}>
            <Text style={{flex: 1, borderRightWidth: 1 , fontWeight: "bold"}}>Cat Name</Text>
            <Text style={{flex: 1, fontWeight: "bold"}}>Cat Size</Text>
          </View>  
          {cats.map(cat => {
            return (
              <View style={{ alignSelf: 'stretch', flexDirection: 'row', borderWidth: 1 }} key={cat}>
                <Text style={{flex: 1, borderRightWidth: 1}}>{cat.name}</Text>
                <Text style={{flex: 1}}>{cat.size}</Text>
              </View>  
            )
          })}
        </View>   
      )
    }
    return <Text>Loading...</Text>
  }

  clearStore(){
    Realm.open({
      schema: [CatSchema]
    }).then(realm => {
      realm.write(() => {
        var cat = realm.objects('Cat')
        realm.delete(cat)
        this.setState({ realm: realm, name: "", size: "" });
      })        
    });
  }

  render() {
    const info = this.state.realm
      ? 'No. of cats in Realm: ' + this.state.realm.objects('Cat').length
      : 'Loading...';
    return (
      <View style={{margin: 20}}>
        <Text>cat name:</Text>
        <TextInput
          style={{height: 50, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />    
        <Text>cat Size:</Text>
        <TextInput
          style={{height: 50, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
          onChangeText={(size) => this.setState({size})}
          value={this.state.size}
        />      

        <View style={{ alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', marginBottom: 20  }}>           
          <View style={{flex: 1, marginLeft: 10}}>
            <Button title="Add new entry" onPress={this.addNewEntry}/>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Button color="red" title="Clear store" onPress={this.clearStore}/> 
          </View>
        </View>
        <Text>{info}</Text>
        <View>{this.renderRealmObjects()}</View>
      </View>
    );
  }
  
}

export default RealmPage
