import React, { Component } from 'react';
import { View,FlatList } from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class AddPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients:[
        {
          id:1,
          name:"John Smith",
        },
        {
          id:2,
          name:"Jone Doe",
        },
        {
          id:3,
          name:"John Don",
        },
      ]
    };
    this.arrayholder=[]
  }

  componentWillMount(){
    this.arrayholder=this.state.patients
  }

  searchFilterFunction = text => {   
    alert("Hi") 
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.title.toUpperCase()}   
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ patients: newData });  
  };

  render() {
    const{patients}=this.state;
    return (
      <View>
        
        <View style={{margin:10, marginBottom:0}}>
          <Text style={{textAlign:'center', fontSize:25, color : 'black'}}> Add Patients </Text>
          <Divider style={{backgroundColor:'#BDC3C7', marginTop:10, height:2}}/>
        </View>

        <FlatList
            style = {{marginBottom: 60}}
            extraData={this.state}
            data={patients}
            renderItem={({item, index, separators})=> {
                return (
                    <View style={{marginLeft:20, padding:5}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                          <View>
                            <Image
                              style={{width: 35, height: 35,marginRight:10}}
                              source={require('../../../../assets/images/yello/person.png')}
                            />
                          </View>
                          <View>
                                <View>
                                  {/* <Text h5>{item.date}</Text> */}
                                  <Text style={{marginTop:10,color:'grey', fontSize: 17}}>{item.name}</Text>
                                  </View>
                          </View>
                          <View>
                              <Button
                                containerStyle={{marginTop:15,margin:8}}
                                buttonStyle={{backgroundColor:Colors.baseColor,width:'70%'}}
                                titleStyle={{color:'black'}}
                                title="Add"
                                onPress={()=>this.props.navigation.navigate('VerifyPatient')}

                            />
                          </View>
                        </View>
                        {/* <Divider style={{backgroundColor:'grey',marginTop:10,height:2}}/> */}
                    </View>
                )}}
            ListHeaderComponent={()=>{
             return(<View style={{margin:5}}>
                <Input
                  placeholder='Search Patients'
                  leftIcon={{ type: 'font-awesome', name: 'search',color:'grey' , marginRight: 20}}
                  onChangeText={(text) => this.searchFilterFunction(text)}
                />
              </View>)
            }}
            keyExtractor = {(item,index) => index.toString()}
            ListEmptyComponent = {<View style = {{height: 50,justifyContent: 'center',alignItems: 'center',}}>
                                    <Text style = {{fontSize: 20}}>Empty List......</Text>
                                </View>}
        />
      </View>
    );
  }
}
