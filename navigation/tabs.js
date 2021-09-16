import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../src/screens/home_screen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
            <Tab.Screen  
            name="Home" 
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;