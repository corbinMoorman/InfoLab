import *as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class AndroidScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>AndroidScreen</Text>
            </View>
        )
    }
}
//------->info for android screen<---------
//Features
//InterFace:Android's default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions, like swiping, tapping, pinching, and reverse pinching to manipulate on-screen objects, along with a virtual keyboard
//Game controllers and full-size physical keyboards are supported via Bluetooth or USB
//The response to user input is designed to be immediate and provides a fluid touch interface, often using the vibration capabilities of the device to provide haptic feedback to the user. Internal hardware, such as accelerometers, gyroscopes and proximity sensors are used by some applications to respond to additional user actions, for example adjusting the screen from portrait to landscape depending on how the device is oriented,[84] or allowing the user to steer a vehicle in a racing game by rotating the device, simulating control of a steering wheel
//Home Screen:Android devices boot to the home screen, the primary navigation and information "hub" on Android devices, analogous to the desktop found on personal computers. Android home screens are typically made up of app icons and widgets; app icons launch the associated app, whereas widgets display live, auto-updating content, such as a weather forecast, the user's email inbox, or a news ticker directly on the home screen
//A home screen may be made up of several pages, between which the user can swipe back and forth
//

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple"
    },
    infoCard:{
        
    }

})