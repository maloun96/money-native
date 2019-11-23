import {createDrawerNavigator} from "react-navigation-drawer";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import ProfileStackNavigator from "./ProfileStackNavigator";
import SettingsStackNavigator from "./SettingsStackNavigator";
import CategoriesStackNavigator from "./CategoriesStackNavigator";
import DrawerNavigation from "../components/DrawerNavigation";

const AppDrawerNavigator = createDrawerNavigator({
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Profile',
            drawerIcon: ({tintColor}) => (
                <Icon name="md-body" style={{fontSize: 28}} color={tintColor}/>
            )
        })
    },
    Settings: {
        screen: SettingsStackNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Setting',
            drawerIcon: ({tintColor}) => (
                <Icon name="md-settings" style={{fontSize: 28}} color={tintColor}/>
            )
        })
    },
    Categories: {
        screen: CategoriesStackNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Categories',
            drawerIcon: ({tintColor}) => (
                <Icon name="md-apps" style={{fontSize: 28}} color={tintColor}/>
            )
        })
    },
}, {
    contentComponent: DrawerNavigation,
    contentOptions: {
        activeTintColor :'#ffffff',
        inactiveTintColor :'#1999CE',
        activeBackgroundColor :'#1999CE',
        inactiveBackgroundColor :'#ffffff',
    }
});

export default AppDrawerNavigator;
