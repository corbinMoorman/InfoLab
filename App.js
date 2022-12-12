import *as React from 'react'
import { createSwitchNavigator,createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/homeScreen'
import IOS_Screen from '../screens/ios'
import AndroidScreen from '../screens/android'



export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const Switch = createSwitchNavigator(
  {
    Home:HomeScreen,
    Andriod:AndroidScreen,
    IOS:IOS_Screen
  }
)
const AppContainer = createAppContainer(Switch)