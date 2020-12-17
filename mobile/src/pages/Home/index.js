import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import PageHeader from '../Components/PageHeader';
import api from '../../services/api';


export default function Home (){

    const [info, setInfo] = useState([]);

    const navigation = useNavigation();

    function navigateToDetail(i){
        navigation.navigate('ScheduleDetail', {i})
    }

    useEffect(() => {
        api.get('cases').then(response => {
            setInfo(response.data);
        });
    }, []);

    return (
        <View style={style.container} >
            <PageHeader title="Escolha uma vida para salvar!"/>
            
            <ScrollView style={style.Home}>
            {info.map(i => (
                <View style={style.profile} key={i.id}>
                    <View style={style.profileInfo}>   
                        <Text style={style.name}>Nome: {i.name}</Text>
                        <Text style={style.info}>Tipo Sanguíneo: {i.bloodtype}</Text>
                        <Text style={style.info}>Local: {i.hemocenter}</Text>

                        <TouchableOpacity style={style.detailsButton} onPress={() => navigateToDetail(i)}> 
                            <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}           
            </ScrollView>
             
        </View>
    );
}