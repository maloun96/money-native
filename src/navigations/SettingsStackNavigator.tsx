import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import Settings from "../screens/Settings";

const SettingsStackNavigator = createStackNavigator(
    {
        Settings: Settings,
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
                title: 'Settings'
            };
        }
    }
);

export default SettingsStackNavigator;
