import React from 'react';
import {View,Image,Text, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from '@expo/vector-icons/Entypo';
import Product from '../components/Product';

export default class Home extends React.Component{
    state={
        city:"Los Angeles"
    }
    render(){
        return (
            <ScrollView style={{backgroundColor: "#FFF"}}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:40,
                    marginHorizontal:20
                 }}>
                    <View style={{width:"10%"}}>
                        <Image
                            source={require('../images/1.png')}
                        />
                    </View>
                    <View style={{
                        width:"80%",
                        alignItems:"center"
                    }}>
                        <Picker
                         selectedValue={this.state.city}
                         style={{height:50,width:160}}
                         onValueChange={(itemValue, itemIndex) =>
                           this.setState({city:itemValue})
                         }>
                         <Picker.Item 
                            label="Texaco" 
                            value="Texaco"
                            style={{fontWeight:"bold"}}
                            />
                            <Picker.Item 
                                label="Sainte-Marie" 
                                value="Sainte-Marie"
                                style={{fontWeight:"bold"}}
                            />
                            <Picker.Item 
                                label="Dillon" 
                                value="Dillon"
                                style={{fontWeight:"bold"}}
                            />
                         
                       </Picker>
                    </View>
                    <View>
                        <Icon name="magnifying-glass" size={30}/>
                    </View>
                </View>
                <View style={{
                    paddingHorizontal:20,
                    marginTop:50
                }}>
                    <Text style={{
                        fontSize:30,
                        fontWeight:"bold"
                    }}>Quel plat</Text>
                    <Text style={{
                        fontSize:30,
                        fontWeight:"bold"
                    }}>qui vous plaît</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:40}}                                                                   
                 >
                    <View style={{
                        alignItems:"center",
                        flexDirection:"row",
                        backgroundColor:"#f9dd7a",
                        marginHorizontal:15,
                        borderRadius:25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}>                        
                        <Image
                            source={require('../images/5.png')}
                            style={{height:40,width:40}}
                        />
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:18,
                             paddingLeft:10
                         }}>
                             Burger
                         </Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        flexDirection:"row",
                        backgroundColor:"#e5e4eb",
                        marginHorizontal:15,
                        borderRadius:25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}>                        
                        <Image
                            source={require('../images/10.png')}
                            style={{height:40,width:40}}
                        />
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:18,
                             paddingLeft:10
                         }}>
                             Burrito
                         </Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        flexDirection:"row",
                        backgroundColor:"#e5e4eb",
                        marginHorizontal:15,
                        borderRadius:25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}>                        
                        <Image
                            source={require('../images/7.png')}
                            style={{height:40,width:40}}
                        />
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:18,
                             paddingLeft:10
                         }}>
                             Salade
                         </Text>
                    </View>
                    <View style={{
                        alignItems:"center",
                        flexDirection:"row",
                        backgroundColor:"#e5e4eb",
                        marginHorizontal:15,
                        borderRadius:25,
                        paddingVertical:5,
                        paddingHorizontal:15
                    }}>                        
                        <Image
                            source={require('../images/6.png')}
                            style={{height:40,width:40}}
                        />
                         <Text style={{
                             fontWeight:"bold",
                             fontSize:18,
                             paddingLeft:10
                         }}>
                             Pizza
                         </Text>
                    </View> 
                </ScrollView>
                    <View style={{
                        alignItems:"center",
                        marginHorizontal:20,
                        flexDirection:"row",
                        marginTop:40
                    }}>
                        <View style={{
                            width:"50%"
                        }}>
                            <Text style={{
                                fontSize:22,
                                fontWeight:"bold"
                            }}>Nouveau Produit</Text>
                        </View>
                        <View style={{
                            width:"50%",
                            alignItems:"flex-end"
                        }}>
                            <Icon
                            name="dots-three-horizontal"
                            size={25}
                            color="#848385"
                            />
                        </View>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        marginHorizontal:15,
                      
                        marginTop:30,
                        }} >
                            <Product
                                image={require("../images/4.png")}
                                title="Smokehouse"
                                price="12.99"
                                onPress={() => this.props.navigation.navigate('Detail') }/> 
                            <Product
                                image={require("../images/9.png")}
                                title="Honey Chilli"
                                price="10.99"
                                marginTop={25}/> 
                    
                    </View>   
                    <View style={{
                        flexDirection:"row",
                        marginHorizontal:15,
                        marginTop:30,
                        }} >
                            <Product
                                image={require("../images/6.png")}
                                title="Adiod Pizza"
                                price="11.99"
                                /> 
                            <Product
                                image={require("../images/10.png")}
                                title="Burrito"
                                price="9.99"
                                marginTop={25}/> 
                    
                    </View>   
            </ScrollView>
        )
    }
}