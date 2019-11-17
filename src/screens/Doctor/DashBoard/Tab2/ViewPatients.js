import React, { Component } from 'react';
import { View,FlatList, TouchableOpacity } from 'react-native';
import {Text,Image,Divider,Input, Button, Icon} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class ViewPatients extends Component {
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
          message:"Jone Doe is requesting verification",
          date:"Oct 3,2019"
        },
        {
          id:3,
          name:"John Don",
          message:"John Don has booked an appointment",
          date:"May 24,2019"
        },
      ],
      searchText:""
    };
    this.arrayholder=[]
  }

  componentWillMount(){
    this.arrayholder=this.state.patients
  }

  searchFilterFunction = text => {
    alert(text)
    this.setState({searchText: text});
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ patients: newData });  
  };

  render() {
    const{patients}=this.state;
    return (
      <View style={{flex:1}}>
        
        <View style={{margin:10, marginBottom:0, marginTop:20}}>
          <Text style={{textAlign:'center', fontSize: 25, color: 'black'}}> Registered Patients </Text>
          <Divider style={{backgroundColor:'#BDC3C7', marginTop:10, height:2}}/>
        </View>

        

        <FlatList
            style = {{marginBottom: 60}}
            extraData={this.state}
            data={patients}
            renderItem={({item, index, separators})=> {
                return (
                    <View style={{marginLeft:20, padding:5}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                            onPress={()=>this.props.navigation.navigate('PatientProfile')}
                        >
                            <View>
                                <Image
                                style={{width: 35, height: 35,marginRight:10}}
                                source={require('../../../../assets/images/yello/person.png')}
                                />
                            </View>
                            <View>
                                    <View>
                                        <Text style={{margin:20,color:'grey', fontSize: 20}}>{item.name}</Text>
                                    </View>
                            </View>
                        </TouchableOpacity>
                        {/* <Divider style={{backgroundColor:'grey',marginTop:10,height:2}}/> */}
                    </View>
                )}}

            ListHeaderComponent={()=>{
             return(<View style={{margin:5}}>
                <Input
                  placeholder='Search Patients'
                  leftIcon={{ type: 'font-awesome', name: 'search', color:'grey' , marginRight: 20}}
                  onChangeText={(text) => {
                    this.setState({searchText: text});
                    const newData = this.arrayholder.filter(item => {      
                      const itemData = `${item.name.toUpperCase()}`;
                      
                       const textData = text.toUpperCase();
                        
                       return itemData.indexOf(textData) > -1;    
                    });
                    
                    this.setState({ patients: newData });  
                  }}
                  autoCorrect={false}
                  value={this.state.searchText}
                />
              </View>)
            }}
            keyExtractor = {(item,index) => index.toString()}
            ListEmptyComponent = {<View style = {{height: 50,justifyContent: 'center',alignItems: 'center',}}>
                                    <Text style = {{fontSize: 20}}>Empty List......</Text>
                                </View>}
        />


        <View>
          <TouchableOpacity style = {{position: 'absolute', bottom: 0, right: 10,}}
            onPress={()=>this.props.navigation.navigate('AddPatient')}
            >
            <Icon
                raised
                name='plus'
                type='font-awesome'
                color='gray'
            />
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}
