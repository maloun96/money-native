import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Button} from "native-base";
import Modal from "react-native-modal";
import AddCategoryForm from "./components/AddCategoryForm";
import CustomModal from "../../components/CustomModal";

const AddNewCategory = (props: any) => {
    const [active, setActive] = useState(null);
    const [modal, setModal] = useState(false);

    const colors = [
        '#66BB6A',
        '#00BCD4',
        '#303F9F',
        '#FF5722',
        '#B39DDB',
        '#37474F',
        '#9C27B0',
        '#c62828',
    ];

    useEffect(() => {
        const isSave = props.navigation.getParam('save');
        setModal(!!isSave);
    }, [props.navigation]);

    const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)];

    const icons = [
        {name: 'glass', color: getRandomColor()},
        {name: 'cloud', color: getRandomColor()},
        {name: 'money', color: getRandomColor()},
        {name: 'legal', color: getRandomColor()},
        {name: 'user-md', color: getRandomColor()},
        {name: 'building-o', color: getRandomColor()},
        {name: 'coffee', color: getRandomColor()},
        {name: 'github-alt', color: getRandomColor()},
        {name: 'car', color: getRandomColor()},
        {name: 'soccer-ball-o', color: getRandomColor()},
        {name: 'motorcycle', color: getRandomColor()},
        {name: 'heartbeat', color: getRandomColor()},
        {name: 'plane', color: getRandomColor()},
        {name: 'shopping-bag', color: getRandomColor()},
    ];

    const renderIcon = (icon) => (
        <View style={style.column} key={icon.name}>
            <Button style={{...style.button, ...(active === icon ? {color: '#fff', backgroundColor: icon.color} : null)}} onPress={() => setActive(icon)}>
                <Icon name={icon.name} style={{...style.icon, ...(active === icon ? style.activeIcon : null)}} />
            </Button>
        </View>
    );

    const closeModal = () => {
        setModal(false);
        props.navigation.goBack();
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <CustomModal open={modal} onClose={closeModal} >
                <Text style={{fontSize: 28, textAlign: 'center'}}>Success!</Text>
            </CustomModal>

            <AddCategoryForm
                style={style}
                active={active}
            />
            <View style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                {icons.map((icon) => renderIcon(icon))}
            </View>
        </View>
    );
};



const style = StyleSheet.create({
    column: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '25%'
    },
    icon: {
        fontSize: 24,
        color: '#444444',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#e4e4e4',
    },
    activeIcon: {
        color: '#fff'
    },
});

export default AddNewCategory;
