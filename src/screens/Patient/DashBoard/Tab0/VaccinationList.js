import React, { Component } from 'react';
import { View,FlatList ,SafeAreaView,TouchableOpacity} from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';

export default class VaccinationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccinations:[
        {
            id:1,
            name:"Diphtheria Tetanus Pertussis Poliomyelitis Hib",
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
        },
        
        {
            id:2,
            name:"Diphtheria Tetanus Pertussis Poliomyelitis",
            boostes:[
                {
                    id:1,
                    date: 'Oct 10, 2019 1:00 PM'
                },

                {
                    id:2,
                    date: 'Oct 20, 2019 1:00 PM'
                },

                {
                    id:3,
                    date: 'Oct 30, 2019 1:00 PM'
                },

                {
                    id:4,
                    date: 'Nov 01, 2019 1:00 PM'
                }
            ]
        },

        {
            id:3,
            name:"Rotavirus",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM'
                },

                {
                    id:2,
                    date: 'Jan 20, 2020 8:15 PM'
                },

                {
                    id:3,
                    date: 'Feb 20, 2020 8:15 PM'
                }
            ]
        },


        {
            id:4,
            name:"Chickenpox",
            boostes:[
                {
                    id:1,
                    date: 'Sep 2, 2019 7:30 AM'
                },
                {
                    id:2,
                    date: 'Oct 2, 2019 7:30 AM'
                },
                {
                    id:3,
                    date: 'Nov 2, 2019 7:30 AM'
                },
                {
                    id:4,
                    date: 'Dec 2, 2019 7:30 AM'
                }

            ]
        },
        
        {
            id:5,
            name:"Hepatitis B",
            boostes:[
                {
                    id:1,
                    date: 'Oct 11, 2019 11:00 AM'
                },

                {
                    id:2,
                    date: 'Nov 15, 2019 11:00 AM'
                },
            ]
        },

        {
            id:5,
            name:"Flu",
            boostes:[
                {
                    id:1,
                    date: 'Oct 10, 2019 1:00 PM'
                },

                {
                    id:2,
                    date: 'Nov 12, 2019 1:00 PM'
                },
            ]
        },

        {
            id:6,
            name:"HVP",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM'
                }
            ]
        },

        {
            id:7,
            name:"Tetanus Diphtheria Pertussis",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM'
                }
            ]
        },

        {
            id:8,
            name:"Tetanus Diphtheria Pertussis",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM'
                }
            ]
        },

        {
            id:9,
            name:"Tetanus Diphtheria Pertussis",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM'
                }
            ]
        },
    ]
    };
  }

lapsList(vacc) {
    return vacc.boostes.map((booste) => {
      return (
        <View key = {booste.id} style = {{width:25, height: 25, margin:5 ,backgroundColor: '#C4C4C4', borderRadius:100}}>

        </View>
      )
    })
}

  render() {
    const{vaccinations}=this.state;
    return (
        <SafeAreaView>
        <View style={{margin:20}}>
            <Text style={{fontSize:20, color:'black'}}>Your </Text>
            <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>VACCINATION PROFILE </Text>
            <Divider style={{backgroundColor:'grey',marginTop:10,height:2}}/>
        </View>

        <FlatList
            style = {{marginBottom:100}}
            extraData={this.state}
            data={vaccinations}
            renderItem={({item, index, separators})=> {
                return (
                    <View style={{marginLeft:10, marginBottom:30,padding:5}}>
                        <TouchableOpacity 
                        style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}
                        onPress={()=>this.props.navigation.navigate('Vaccination', {"vacc" : item})}
                        >
                            <View style = {{flex:2}}>
                                <Text style = {{fontSize:20}}>{item.name}</Text>
                            </View>
                            <View style = {{flex:3, flexDirection:'row'}}>
                                {this.lapsList(item)}
                            </View>
                        </TouchableOpacity>
                        {/* <Divider style={{backgroundColor:'grey',marginTop:10,height:2}}/> */}
                    </View>
                )}}
            keyExtractor = {(item,index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}
