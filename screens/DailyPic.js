import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Image, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import axios from "axios";

export default class DailyPicScreen extends Component {

    constructor(){
        super()
        this.state={
            apod:''
        }
    }

    componentDidMount(){
        this.getAPOD()
    }


    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=gJuH1GO3mKHnQOcGn7ugpSFjiNomT6Qi1gcRygki")
            .then(response => {
                this.setState({apod: response.data})
            })
            .catch(error => {
                Alert.alert(error.message)
            })

    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../assets/space.gif')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Daily Pic</Text>
                    <Text style={styles.routeText}>Astronomy picture of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer}
                        onPress={()=> Linking.openURL(this.state.apod.url).catch(err => console.error('Could not load page', err))}>
                      
                        <View>
                            <Image source={require('../assets/play-video.png')} style={{width:100,height:100}}></Image>
                        </View>
                    
                    </TouchableOpacity>
                    
                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>

                </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },

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

    routeText:{
        color:'white',
        fontWeight:700,
        fontSize:35,
        marginLeft:400,
        marginTop:50,
    },

    titleText:{
        fontSize:50,
        color:'yellow',
        fontWeight:700,
        marginLeft:250,
        marginTop:25,
        width:2000
    },

    listContainer:{
        marginLeft:600,
        marginTop:50,

    },

    explanationText:{
        color:'white',
        marginTop:50,
        width:800,
        fontSize:15,
        marginLeft: 280,
        marginBottom:50

       
    },

    
})