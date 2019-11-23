import React, {Component} from "react";
import {Button, SafeAreaView, Text, View} from "react-native";

const Expense = (props: any) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Expense</Text>
            <Button title="Add new Category" onPress={() => props.navigation.navigate('AddCategory')} />
        </View>
    </SafeAreaView>
);

export default Expense;
