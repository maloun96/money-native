import React from "react";
import {Button, View} from "react-native";

const WelcomeScreen = (props: any) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Login"
            onPress={() => props.navigation.navigate('Dashboard')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
    </View>
);

export default WelcomeScreen;
