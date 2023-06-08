import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../telas/Produtores/Home';
import MelhoresProdutores from '../telas/Produtores/MelhoresProdutores';



export default function AppRotas() {

    const Tab = createBottomTabNavigator();

    return  <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home}  />
                    <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
                </Tab.Navigator>
            </NavigationContainer>
}