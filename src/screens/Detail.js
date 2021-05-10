import React from 'react';
import {View, Text,Image} from 'react-native';
import {
    ScrollView,
    TouchableOpacity}
    from'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import style from '../styles/style'


export default class Detail extends React.Component{
    state={
        quantity:1
    }

    addQuantity = (quantity) =>{
        this.setState({quantity:this.state.quantity + 1 });
    }

    subtractQuantity = (quantity) =>{
        if (this.state.quantity > 0){
            this.setState({quantity:this.state.quantity - 1 });
        }
    }
    render(){
        return (
            <View style={{backgroundColor:"#FFF"}}>
                <ScrollView>
                    <View style={style.headerDetail}>
                        <View style={{width:"10%"}}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <Image 
                                source={require('../images/2.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{width:"80%",alignItems:"center"}}>
                            <View style={style.headerDetailCenter}>
                                <Image 
                                    source={require('../images/3.png')}
                                    style={{height:25,width:20}}
                                />
                                <Text style={{
                                    paddingHorizontal:10,
                                    fontWeight:"bold",
                                    fontSize:16
                                }}>290 Calories</Text>
                            </View>
                        </View>
                        <View style={{width:"10%"}}>
                            <Icon 
                            name="heart"
                            color="#f9dd7a"
                            size={30}
                            />
                        </View>
                    </View>
                    <Image
                        source={require('../images/5.png')}
                        style={{
                            height:300,
                            width:300,
                            alignSelf:"center"
                        }}
                    />
                    <View 
                        style={{
                            flexDirection:"row",
                            alignSelf:'center',
                            alignItems:'center',
                            backgroundColor:"#f6f3fb",
                            paddingHorizontal:20,
                            paddingVertical:8,
                            borderRadius:20
                        }}
                    >
                        <TouchableOpacity
                            onPress={this.addQuantity}
                        >
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18
                            }}>+</Text>

                        </TouchableOpacity>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:18,
                            paddingHorizontal:20
                        }}>
                            {this.state.quantity}
                        </Text>
                        <TouchableOpacity
                            onPress={this.subtractQuantity}
                        >
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:18
                            }}>-</Text>

                        </TouchableOpacity>
                    </View>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            marginHorizontal:20,
                            marginTop:30
                        }}>
                            <View>
                                <Text style={{
                                    fontWeight:"bold",
                                    fontSize:25
                                }}>Smokehouse</Text>
                                <Text style={{
                                    fontWeight:"bold",
                                    fontSize:15,
                                    color:"#a4a4a9"
                                }}> Beef Burger</Text>
                            </View>
                                <Text style={{
                                    fontWeight:"bold",
                                    fontSize:28,
                                    marginLeft:80
                                }}>12.99 €</Text>
                        </View>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:20,
                            marginTop:30,
                            marginHorizontal:20
                        }}>Ingredients</Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop:20,marginHorizontal:20}}
                            >
                                <View style={{
                                    borderRadius:15,
                                    borderWidth:0.1,
                                    paddingHorizontal:12,
                                    paddingVertical:8,
                                    marginRight:10
                                }}>
                                    <Image
                                        source={require('../images/11.png')}
                                        style={{height:30,width:30}}
                                        />

                                </View>
                                <View style={{
                                    borderRadius:15,
                                    borderWidth:0.1,
                                    paddingHorizontal:12,
                                    paddingVertical:8,
                                    marginRight:10
                                }}>
                                    <Image
                                        source={require('../images/13.png')}
                                        style={{height:30,width:30}}
                                        />

                                </View>
                                <View style={{
                                    borderRadius:15,
                                    borderWidth:0.1,
                                    paddingHorizontal:12,
                                    paddingVertical:8,
                                    marginRight:10
                                }}>
                                    <Image
                                        source={require('../images/12.png')}
                                        style={{height:30,width:30}}
                                        />

                                </View>
                                <View style={{
                                    borderRadius:15,
                                    borderWidth:0.1,
                                    paddingHorizontal:12,
                                    paddingVertical:8,
                                    marginRight:10
                                }}>
                                    <Image
                                        source={require('../images/8.png')}
                                        style={{height:30,width:30}}
                                        />

                                </View>
                                <View style={{
                                    borderRadius:15,
                                    borderWidth:0.1,
                                    paddingHorizontal:12,
                                    paddingVertical:8,
                                    marginRight:10
                                }}>
                                    <Image
                                        source={require('../images/bl.png')}
                                        style={{height:30,width:30}}
                                        />

                                </View>
                                <View style={{
                                    borderRadius:15,
                                    borderWidth:0.1,
                                    paddingHorizontal:12,
                                    paddingVertical:8,
                                    marginRight:10
                                }}>
                                    <Image
                                        source={require('../images/7.png')}
                                        style={{height:30,width:30}}
                                        />

                                </View>
                                
                            </ScrollView>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:20,
                                marginTop:30,
                                marginHorizontal:20
                            }}>
                                Details
                            </Text>
                            <Text style={{
                                color:"#a4a4a9",
                                fontWeight:"bold",
                                fontSize:15,
                                marginTop:10,
                                marginHorizontal:20,
                                textAlign:"justify"
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions 
                                of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                                 Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                  College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                                  going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                                   from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                                     The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Text>

                    
                </ScrollView>
                <View style={{
                    position:"absolute",
                    backgroundColor:"#000",
                    height:50,
                    width:50,
                    bottom:20,
                    alignItems:"center",
                    justifyContent:"center",
                    alignSelf:"center",
                    borderRadius:25
                }}>
                    <Icon
                        name="shopping-cart"
                        size={24}
                        color="#FFF"

                    />


                </View>
            </View>
        )
    }
}