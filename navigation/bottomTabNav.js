import *as React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Tab } from 'react-native-elements';
const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen/>
        </Tab.Navigator>
    )
}