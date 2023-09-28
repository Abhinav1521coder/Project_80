import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet, ImageBackground } from 'react-native';
import axios from "axios";

export default class SpaceCraftsScreen extends Component {
    constructor(){
        super()
        this.state={
            aircrafts:{}
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData= () => {
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
            .then(response => {
                this.setState({aircrafts: response.data.results})
                console.log(response.data.results)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    renderItem = ({item}) => {
        return(
            <View style={{justifyContent:'center', alignItems:'center', marginBottom:10, elevation:10, textAlign:'center'}}>
                <Image source={{uri: item.agency.image_url}} style={{width: '100%', height:400, marginTop:15, marginBottom:15, marginRight:10}}></Image>
                <Text style={{fontWeight:'bold', fontSize: 20, color:'white'}}>{item.name}</Text>
                <Text style={{color:'white'}}>{item.agency.name}</Text>
                <Text style={{color:'white'}}>DESCRIPTION</Text>
                <Text style={{color:'white', marginLeft:10, marginRight:10}}>{item.agency.description}</Text>
            </View>
        )
    }

    keyExtractor = (item, index) => index.toString();


    render() {
        return (
            <View 
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <View style={{flex:0.25}}>
                            <Text style={styles.title}>Spacecrafts</Text>
                        </View>
                        <View style={{flex:0.75}}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.aircrafts}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </ImageBackground>
                </View>
            
        )
    }
}


const styles= StyleSheet.create({
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },

    title:{
        fontSize:65,
        color:'white',
        fontWeight:700,
        marginLeft:520
    },
})