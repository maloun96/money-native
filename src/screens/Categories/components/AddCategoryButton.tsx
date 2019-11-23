import React from "react";
import {Text, StyleSheet, View} from "react-native";
import {Button, Icon} from "native-base";

const AddCategoryButton = (props: any) => (
    <View style={{position: 'relative', marginLeft: 10, marginRight: 10}}>
        <Button block iconLeft style={style.button} onPress={() => props.navigation.navigate('AddNewCategory')}>
            <Icon name="md-add-circle-outline" style={style.icon} />
            <Text style={{color: 'white'}}>Add new category</Text>
        </Button>
    </View>
);

const style = StyleSheet.create({
     button: {
         backgroundColor: '#1999CE',
         position: 'absolute',
         width: '100%',
         bottom: 0
     },
     icon: {
         fontSize: 18,
         marginRight: 10,
         color: 'white'
     }
});


export default AddCategoryButton;
