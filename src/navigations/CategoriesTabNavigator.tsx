import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import Expense from "../screens/Categories/Expense";
import Income from "../screens/Categories/Income";

const CategoriesTabNavigator = createMaterialTopTabNavigator({
    Expense: {screen: Expense},
    Income: {screen: Income},
}, {
    tabBarOptions: {
        activeTintColor :'#ffffff',
        inactiveTintColor :'#ffffff',
        indicatorStyle: {
            backgroundColor: 'black',
            height: 3
        },
        style: {
            backgroundColor: '#1999CE',
        }
    }
});

export default CategoriesTabNavigator;
