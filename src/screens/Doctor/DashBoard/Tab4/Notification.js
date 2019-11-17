import React, { Component } from 'react';
import { View,FlatList, TouchableOpacity } from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients:[
        {
          id:1,
          name:"John Smith",
          message:"John Smith is requesting verification",
          date:"Sept 3, 2019"
        },
        {
          id:2,
          name:"Jone Doe",
          message:"John Doe is requesting verification",
          date:"Oct 3,2019"
        },
        {
          id:3,
          name:"John Don",
          message:"John Don has booked an appointment",
          date:"Aug 24,2019"
        },
      ]
    };
  }

  render() {
    const{patients}=this.state;
    return (
      <View>
        
        <View style={{margin:10, marginTop: 20}}>
          <Text style={{textAlign:'center', fontSize: 25, color : 'black'}}> Latest Updates </Text>
          <Divider style={{backgroundColor:'#BDC3C7',marginTop:10,height:2}}/>
        </View>

        <FlatList
            style = {{marginBottom: 60}}
            extraData={this.state}
            data={patients}
            renderItem={({item, index, separators})=> {
                return (
                    <View style={{marginLeft:20,marginRight:20, padding:5}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                          onPress={()=>this.props.navigation.navigate('VerifyPatient')} >
                          <View>
                            <Image
                              style={{width: 35, height: 35,marginRight:10}}
                              source={require('../../../../assets/images/yello/person.png')}
                            />
                          </View>
                          <View>
                              <View style = {{ marginRight: 40}}>
                                  <Text style={{color:'black', fontSize: 17}}>{item.date}</Text>
                                  <Text style={{marginTop:5,color:'grey', fontSize: 17}}>{item.name} is requesting verification.</Text>
                              </View>
                          </View>
                        </TouchableOpacity>
                        <Divider style={{backgroundColor:'#BDC3C7',marginTop:20, marginBottom:10,height:1}}/>
                    </View>
                )}}
            ListHeaderComponent={()=>{
             return(<View style={{margin:5}}>
                {/* <Input
                  placeholder='Search Patients'
                  leftIcon={{ type: 'font-awesome', name: 'search',color:'grey' }}
                /> */}
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
