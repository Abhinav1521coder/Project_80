import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image 
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                
                <ImageBackground style={styles.backgroundImage} source={require('../assets/stars.gif')}>
                    <Image style={styles.image} source={require("../assets/main-icon.png")}/>
                    <View>
                        <Text style={styles.title}>Stellar App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate('StarMap')}>
                        <Text style={styles.routeText}>StarMap</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}  />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard1}  onPress={() => this.props.navigation.navigate('DailyPic')}>
                        <Text style={styles.routeText1}>DailyPic</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage1} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard2} onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
                        <Text style={styles.routeText2}>SpaceCrafts</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage2}  />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight:0
    },

    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },

    image:{
        width:200,
        height:175,
        position:'absolute',
        left:525,
        top:20
    },
  
    title:{
        position:'absolute',
        fontSize:80,
        justifyContent:'center',
        left:420,
        top:180,
        fontWeight:700,
        color:'white'
    },

    routeCard1:{
        position:'absolute',
        top:310,
        width: 260,
        left:500,
        height:55,
        borderRadius: 30,
        backgroundColor: "white",
        alignItems:'center',
    },
    routeText1:{
        color:'red',
        fontWeight:700,
        fontSize:35
    },
    iconImage1:{
        position:'absolute',
        bottom:20,
        left:225,
        width:80,
        height:50
    },

    routeCard:{
        
        marginLeft:500,
        width: 260,
        marginTop:410,
        height:55,
        borderRadius: 30,
        backgroundColor: "white",
        alignItems:'center',
    },
    routeText:{
        color:'red',
        fontWeight:700,
        fontSize:35
    },
    iconImage:{
        position:'absolute',
        bottom:20,
        left:225,
        width:80,
        height:70
    },
    routeCard2:{
        position:'absolute',
        top:510,
        width: 260,
        left:500,
        height:55,
        borderRadius: 30,
        backgroundColor: "white",
        alignItems:'center',
    },
    routeText2:{
        color:'red',
        fontWeight:700,
        fontSize:35
    },
    iconImage2:{
        position:'absolute',
        bottom:5,
        left:235,
        width:70,
        height:85
    }

    

})
