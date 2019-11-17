import React, { Component } from 'react';
import { View,FlatList ,SafeAreaView,TouchableOpacity} from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class Vaccination extends Component {
  constructor(props) {
    super(props);
    this.state = {
        vacc: {},
        boostes:[
            {
                id:1,
                date: 'Sep 2, 2019 4:30 AM'
            },

            {
                id:2,
                date: 'Sep 12, 2019 4:30 AM'
            },

            {
                id:3,
                date: 'Sep 12, 2019 4:30 AM'
            },

            {
                id:4,
                date: 'Sep 22, 2019 4:30 AM'
            }
        ]
    };
}

componentWillMount(){
    let vacc = this.props.navigation.getParam("vacc", {})   
    console.log(vacc);
    this.setState({
        vacc:vacc
    })

}


render() {
    const boostes = this.state.vacc.boostes;
    return (
        <SafeAreaView>
        
            <View style={{flexDirection:'row', padding:20 ,alignItems:'center',justifyContent:'space-between', backgroundColor:'#94F0ED'}}>
                <View style = {{flex : 1}}>

                </View>

                <View style={{flex : 3, alignSelf: 'center'}}>
                    <Text style={{fontSize:20, color:'black', alignSelf: 'center'}}>John Smith </Text>
                    <Text style={{marginTop:10, fontSize:20, fontWeight:'bold', color:'black', alignSelf: 'center'}}>Vacinnation Group</Text>

                    <View style = {{padding:20, alignSelf:'center'}}>
                        <Text style={{fontSize:20, color:'black'}}>{this.state.vacc.name}</Text>
                    </View>
                </View>

                <View style = {{flex : 1}}>

                </View>
            </View>
        

            <FlatList
                style = {{marginBottom:100}}
                extraData={this.state}
                data={boostes}
                renderItem={({item, index, separators})=> {
                    return (
                        <View style={{marginLeft:10, marginBottom:20,padding:5}}>
                            <View 
                            style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}
                            >
                                <View style = {{flex:1}}>
                                    <View style = {{width:25, height: 25, margin:5 ,backgroundColor: '#C4C4C4', borderRadius:100}}>

                                    </View>
                                    
                                </View>
                                <View style = {{flex:5}}>
                                    <Text style = {{fontSize:18, fontWeight:'bold', color:'black'}}>Date</Text>
                                    <Text style = {{fontSize:15}}>{item.date}</Text>
                                </View>
                            </View>
                            {/* <Divider style={{backgroundColor:'grey',marginTop:10,height:2}}/> */}
                        </View>
                    )}}
                keyExtractor = {(item,index) => index.toString()}
            />
        </SafeAreaView>
    );
  }
}
