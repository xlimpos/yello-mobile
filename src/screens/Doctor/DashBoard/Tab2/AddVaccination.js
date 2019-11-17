import React, { Component } from 'react';
import { View,FlatList ,SafeAreaView,TouchableOpacity} from 'react-native';
import {Text,Image,Divider,Input, Button} from 'react-native-elements';
import Colors from '../../../../assets/themes/Colors';
import PatientVaccStore from '../../../../stores/PatientVaccStore';
import { toJS } from 'mobx';

export default class AddVaccination extends Component {
  constructor(props) {
    super(props);
    this.state = {
        vaccItem: {},
        vacc: "",
    };
}

componentWillMount(){
    // let vaccItem = this.props.navigation.getParam("vaccItem", {})
    let vacc = this.props.navigation.getParam("vacc",{});
    // console.log(vaccItem);
    this.setState({
        // vaccItem:vaccItem,
        vacc:vacc
    })

}


render() {
    const{vacc}=this.state
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

            <View style = {{margin : 20}}>
                <Text style = {{fontSize:18, fontWeight:'bold', color:'black'}}>Date</Text>
                <Text style = {{fontSize:15}}>Sep 2, 2019 4:30 AM</Text>
            </View>

            <View>
            <View style= {{justifyContent:'center',alignItems:'center', marginTop: 30}}>
                <Image
                    source={require('../../../../assets/images/yello/vaccine.png')}
                    style={{ width: 50, height: 50 }}
                    />
            </View>

                <Button
                    onPress={()=>{
                        var oldPatientVaccinationDataSource = toJS(PatientVaccStore.patientVaccinationDataSource)
                        var updatedVaccination = oldPatientVaccinationDataSource.map((vaccination,index)=>{
                            if(vaccination.id==vacc.id){
                                vaccination.boostes.push({
                                    id:vaccination.boostes.length+1,
                                    date: 'Sep 2, 2019 4:30 AM',
                                    isverified:false

                                })
                                return vaccination
                            }
                            return vaccination
                        })
                        PatientVaccStore.patientVaccinationDataSource = updatedVaccination

                        this.props.navigation.navigate('PatientVaccinations')
                    }}
                    containerStyle={{marginTop:15,margin:8}}
                    buttonStyle={{backgroundColor:Colors.baseColor, width:200, alignSelf: 'center'}}
                    titleStyle={{color:'black'}}
                    title="Add"
                />
            </View>

            

        </SafeAreaView>
    );
  }
}
