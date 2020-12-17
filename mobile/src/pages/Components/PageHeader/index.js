import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native'; 
import {Feather} from '@expo/vector-icons';

import style from './style'
import { useNavigation } from '@react-navigation/native';


export default function PageHeader(props){
 const navigation = useNavigation();
    
    return(
        <View style={style.container}>
            <View style={style.topBar}>
                <TouchableOpacity onPress={navigation.openDrawer}>
                    <Feather name="list" size={28} color="#FFF" />
                </TouchableOpacity>
                <Text style={style.blood}>Bloodlife</Text>
            </View>

                <Text style={style.title}>{props.title}</Text>    
        </View>
    )
}

  
