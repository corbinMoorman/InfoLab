import *as React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {Styles.container}>
                <TouchableOpacity style = {Styles.andriodButtonStyle} onPress = {()=>{
                    this.props.navigation.navigate("Andriod")
                }}>
                    <Text style = {Styles.andriodBtnText}> Andriod Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.IOSButtonStyle} onPress = {()=>{
                this.props.navigation.navigate("IOS")
                }}>
                    <Text style = {Styles.IOSBtnText}>IOS Info</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple"
    },
    andriodButtonStyle:{
        alignSelf:"center",
        backgroundColor:'blue',
        width:"75%",
        height:'10%',
        justifyContent:'center',
        borderWidth:0.5,
        borderRadius:10,
        marginTop:15,
    },
    andriodBtnText:{
        fontSize:25,
        color:"white",
        alignSelf:'center'

    },
    IOSButtonStyle:{
        alignSelf:"center",
        backgroundColor:'blue',
        width:"75%",
        height:'10%',
        justifyContent:'center',
        borderWidth:0.5,
        borderRadius:10,
        marginTop:30,
    },
    IOSBtnText:{
        fontSize:25,
        color:"white",
        alignSelf:'center'

    }

})