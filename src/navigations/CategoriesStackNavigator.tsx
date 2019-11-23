import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import {Text} from 'react-native';
import CategoriesTabNavigator from "./CategoriesTabNavigator";
import AddNewCategory from "../screens/Categories/AddNewCategory";
import {Button} from "native-base";

const CategoriesStackNavigator = createStackNavigator({
    Categories: CategoriesTabNavigator,
    AddNewCategory: {
        screen: AddNewCategory,
        navigationOptions: ({ navigation }) => ({
            title: `Add new category`,
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.goBack()}
                    name="md-arrow-back"
                    size={30}
                />
            ),
            headerRight: (
                <Icon
                    style={{ paddingRight: 10 }}
                    onPress={() => navigation.setParams({save: true})}
                    name="md-checkmark"
                    size={30}
                />
            )
        })
    }
},
{
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            ),
            title: 'Categories'
        };
    }
});

export default CategoriesStackNavigator;

