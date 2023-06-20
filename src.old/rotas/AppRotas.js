import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../telas/Produtores/Home';
import MelhoresProdutores from '../telas/Produtores/MelhoresProdutores';

import home from '../assets/home.svg'
import coracao from '../assets/coracao.svg'


export default function AppRotas() {

    const Tab = createBottomTabNavigator();
    const iconesRotas = {}
    iconesRotas['Home']=home
    iconesRotas['Melhores Produtores']=coracao

    return  <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName="Home"
                    activeColor="#FF0000"
                    inactiveColor="#00FF00"
                    barStyle={{ backgroundColor: '#694fad' }}
                    screenOptions={({ route }) => ({tabBarIcon:iconesRotas[route.name]}) }
                    >
                    <Tab.Screen name="Home" component={Home}   />
                    <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
                </Tab.Navigator>
            </NavigationContainer>
}