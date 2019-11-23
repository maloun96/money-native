import React from "react";
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from "react-native";
import {Icon, List, ListItem} from 'native-base';
import AddCategoryButton from "./components/AddCategoryButton";
const Income = (props: any) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={style.viewStyle}>
            <ScrollView>
                <List style={style.listItem}>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>COMEDY</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Hangover</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon} />
                        <Text>Cop Out</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>ACTION</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                    <ListItem style={style.listItem}>
                        <Icon name="md-remove-circle" style={style.removeIcon}/>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                </List>
            </ScrollView>
        </View>
        <AddCategoryButton navigation={props.navigation}/>
    </SafeAreaView>
);

const style = StyleSheet.create({
    viewStyle: {
        marginBottom: 50,
        height: '90%',
        marginLeft: 10,
        marginRight: 10
    },
    removeIcon: {
        color: 'red',
        fontSize: 16,
        marginRight: 10,
    },
    listItem: {
        marginLeft: 0,
        padding: 0
    }
})

export default Income;
