
import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, } from 'react-native';
import {WebView} from 'react-native-webview';






export default class StarMapScreen extends Component {
    
    constructor(){
        super()
        this.state={
            latitude:'',
            longitude:''
        }
    }
    
    render() {

        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
       
        return (
            
            <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
    
                <Text style={styles.title}>Star Map</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder="Enter your latitude"
                    placeholderTextColor="#ffff#00000"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude:text
                        })
                    }}
                />
                <TextInput
                    style={styles.textinput}
                    placeholder="Enter your longitude"
                    placeholderTextColor="#ffff#00000"
                    onChangeText={(text)=>{
                        this.setState({
                            longitude:text
                        })
                    }}
                />


                <WebView
                    scalesPageToFit={true}
                    source={{uri:path}}
                    style={{marginTop:20,marginBottom:20,}}
                    
                />
            </View>

            
            
        )
    }
}

const styles= StyleSheet.create({
    
    textinput:{
        borderRadius: 30,
        textAlign:'center',
        width:200,
        height:50,
        marginLeft:550,
        borderWidth:2,
        marginTop:30,
        alignItems:'center',
        borderColor:'white',
        placeholderTextColor:'white'
    },

    title:{
        fontSize:50,
        color:'white',
        fontWeight:700,
        marginLeft:550
    },

    
})