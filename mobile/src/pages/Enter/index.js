import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'

import Icon from '../../assets/logolife.png';
import api from '../../services/api';
import style from './style';

export default function Enter (){
    const navigation = useNavigation();

    const [count, setCount] = useState();

    useEffect(() => {
      api.get('count').then(response => {
        setCount(response.data);
      });
    }, []);

    function navigateToHome(){
        navigation.navigate('Home')
    }

    return (
        <View style={style.container}>

            <Image source={Icon} style={style.logolife}/>

            <Text style={style.slogan}>
                O App que salva vidas
            </Text>

            <View style={style.buttonContainer}>

                <TouchableOpacity style={style.button} onPress={navigateToHome}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

            <Text style={style.totalConnections}>
                Total de {count} Conexões já realizadas {''}
                <Feather name="heart" size={15} color="#e02041"/>
            </Text>
        </View>
    );
}