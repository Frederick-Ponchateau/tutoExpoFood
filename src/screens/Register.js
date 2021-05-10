import React from 'react';
import {View, Text, Button,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component{
    render(){
        const {navigate}=this.props.navigation
        return(
            <View style={{
                backgroundColor:"#FFF",height:"100%"
            }}>
                <Image source={require('../images/image.jpg')}
                    style={{width:"100%",height:"40%"}}
                    />
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
                  
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#00716F"
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
                    
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Mot de passe"
                        placeholderTextColor="#00716F"
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
                   
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Confimer votre mot de passe"
                        placeholderTextColor="#00716F" 
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
                    }}>Inscrivez-vous</Text>
                </View>
               
            </View>
        )

    }
}