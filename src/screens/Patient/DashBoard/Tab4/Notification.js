import React, { Component } from 'react';
import { View,FlatList } from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients:[
        // {
        //   id:1,
        //   name:"John Smith",
        //   // message:"John Smith is requesting verification",
        //   // date:"Sept 3, 2019"
        // },
        // {
        //   id:2,
        //   name:"John Smith",
        //   // message:"John Smith is requesting verification",
        //   // date:"Sept 3,2019"
        // },
        // {
        //   id:3,
        //   name:"John Smith",
        //   // message:"John Smith has booked an appointment",
        //   // date:"Aug 24,2019"
        // },
        // {
        //   id:4,
        //   name:"John Smith",
        //   // message:"John Smith is requesting verification",
        //   // date:"Sept 3, 2019"
        // },
        // {
        //   id:5,
        //   name:"John Smith",
        //   // message:"John Smith has booked an appointment",
        //   // date:"Aug 24,2019"
        // },
      ]
    };
  }

  render() {
    const{patients}=this.state;
    return (
      <View>
        
        {/* <View style={{marginBottom:20,margin:10}}>
          <Text h4 style={{textAlign:'center'}}> Add Patients </Text>
          <Divider style={{backgroundColor:'grey',marginTop:10,height:2}}/>
        </View> */}

        <FlatList
            extraData={this.state}
            data={patients}
            renderItem={({item, index, separators})=> {
                return (
                    <View style={{margin:20,padding:5}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                          <View>
                            <Image
                              style={{width: 50, height: 50,marginRight:10}}
                              source={require('../../../../assets/images/yello/person.png')}
                            />
                          </View>
                          <View>
                                <View>
                                  {/* <Text h5>{item.date}</Text> */}
                                  <Text h6 style={{marginTop:10,color:'grey'}}>{item.name}</Text>
                                  </View>
                          </View>
                          <View>
                              <Button
                                containerStyle={{marginTop:15,margin:8}}
                                buttonStyle={{backgroundColor:Colors.baseColor,width:'80%'}}
                                titleStyle={{color:'black'}}
                                title="Add "
                            />
                          </View>
                        </View>
                        {/* <Divider style={{backgroundColor:'grey',marginTop:10,height:2}}/> */}
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
