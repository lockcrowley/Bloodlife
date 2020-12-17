import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import style from './style';


export default function ScheduleDetail(){

    const route = useRoute();
    const i = route.params.i;

    const navigation = useNavigation();

    function navigationBack() {
        navigation.goBack();
    }

    function navigateToMap() {
        Linking.openURL(
            `https://www.google.com/maps/dir/?api=1&destination=${i.latitude},${i.longitude}`,
          );
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${i.whatsapp}`);
    }
    return(
        <View style={style.container}>
             <View style={style.header}>
                
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#FFF" />
                </TouchableOpacity>
                <Text style={style.title}>Detalhes</Text>
                <Text style={style.blood}>Bloodlife</Text>
            </View>
        
            <View style={style.donation}>
    
                <View key={i.id}>  
                    <Text style={[style.incidentProperty, {marginTop: 0}]}>Nome:</Text>
                    <Text style={style.infoValue}>{i.name}</Text>

                    <Text style={style.incidentProperty}>E-mail:</Text>
                    <Text style={style.infoValue}>{i.email}</Text>

                    <Text style={style.incidentProperty}>Tipo Sanguíneo:</Text>
                    <Text style={style.infoValue}>{i.bloodtype}</Text>

                    <Text style={style.incidentProperty}>Descrição:</Text>
                    <Text style={style.infoValue}>{i.description}</Text>

                    <Text style={style.incidentProperty}>Local:</Text>
                    <Text style={style.infoValue}>{i.hemocenter}</Text>
                    
                    <TouchableOpacity style={style.detailsButton} onPress={navigateToMap}> 
                        <Text style={style.detailsButtonText}>Ver mapa</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>    
                </View>
              

            <View style={style.contactBox}>
                <Text style={style.heroDescription}>Entre em contato com o paciente:</Text>
                    <View style={style.actions}>
                        <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                            <Text style={style.actionText}>WhatsApp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}