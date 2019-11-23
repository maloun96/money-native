import {View} from "react-native";
import {Button, Input} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";


const AddCategoryForm = ({active, style}) => (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }}>
        <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25%'
        }}>
            <Button style={{...style.button, ...{backgroundColor: active && active.color}}}>
                {active && <Icon name={active.name} style={{...style.icon, ...style.activeIcon}} />}
            </Button>
        </View>
        <View style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '75%',
        }}>
            <Input placeholder="Username" style={{
                width: '90%'
            }}/>
        </View>
    </View>
);

export default AddCategoryForm;
