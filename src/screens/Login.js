import React from 'react';
import {View, Text, Button,Image, TextInput,Pressable} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity} from'react-native-gesture-handler';

export default class Login extends React.Component{
    render(){
        const {navigate}=this.props.navigation
        return(
            <View style={{
                backgroundColor:"#FFF",height:"100%"
            }}>
                <Image source={require('../images/image.jpg')}
                    style={{width:"100%",height:"40%"}}
                    />
                <View style={{width:"10%"}}>
                            <TouchableOpacity
                               onPress={()=>navigate('Home')}
                            >
                                <Image 
                                source={require('../images/2.png')}
                                />
                            </TouchableOpacity>
                 </View>
                <Text style={{
                    fontSize:28,
                    fontFamily:'SemiBold',
                    alignSelf:"center"
                    }}>Commande express
                </Text>

                <Text style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4

                    }}>
                    Commander vos plats favory quand vous voulez ou vous voulez
                </Text>


                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:25,
                    paddingVertical:3


                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:25,
                    paddingVertical:3


                }}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <View style={{
                    marginHorizontal:55,
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:25



                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Connectez-vous</Text>
                </View>

               
                
                <View style={{
                    flexDirection:"row",
                    alignItems:'center',
                    justifyContent:'center'

                }}>
                    <View
                        style={{
                            marginHorizontal:35,
                            marginTop:30,
                            borderColor:"#00716F",
                            paddingVertical:10,
                            paddingHorizontal:40,
                            borderWidth:3,
                            borderRadius:25,
                            
                        }}>
                        <Pressable>
                            <Icon name="google" size={24} color="#00716F" />
                        </Pressable>
                    </View>

                    <View
                        style={{
                            marginHorizontal:35,
                            marginTop:30,
                            borderColor:"#00716F",
                            paddingVertical:10,
                            paddingHorizontal:40,
                            borderWidth:3,
                            borderRadius:25,
                           
                        }}>
                        <Pressable>
                            <Entypo name="facebook" size={24} color="#00716F" />
                        </Pressable>
                    </View>
                     

                </View>
                    <Text
                onPress={()=>navigate('Register')}
                 style={{
                    alignSelf:"flex-end",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30,
                    paddingHorizontal:10
                }}>
                    Inscription
                </Text>
            </View>
        )

    }
}