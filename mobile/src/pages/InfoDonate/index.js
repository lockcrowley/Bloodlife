import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import PageHeader from '../Components/PageHeader';
import style from './style';

export default function InfoDonate() {
    return(
        <View style={style.container}>
        <PageHeader title="Requisitos para doação!"/>
            
            <ScrollView style={style.info}>
                <Text style={style.h1}>Requisitos</Text>
                    <Text style={style.info2}><Text style={style.bold}>Idade:</Text> entre 16 e 69 anos (pessoas acima de 60 anos só podem doar se já tiverem doado antes dessa idade, menores de 18 precisam estar acompanhados de responsáveis ou com formulário de autorização)</Text>
                    <Text style={style.info2}><Text style={style.bold}>Peso:</Text> mínimo de 50 kg</Text>
                    <Text style={style.info2}><Text style={style.bold}>Repouso:</Text> ter dormido no mínimo 6 horas nas últimas 24h</Text>
                    <Text style={style.info2}><Text style={style.bold}>Alimentação:</Text> evitar jejum e alimentos gordurosos nas últimas horas e em casos de ter tido refeições fartas no almoço ou jantar, doar após 3 horas</Text>
                    <Text style={style.info2}><Text style={style.bold}>Documentos:</Text> apresentar documento de identidade original com foto atual, emitido por órgão oficial (RG, Carteira de Habilitação, Carteira de Trabalho ou Previdência Social)</Text>
                    <Text style={style.info2}><Text style={style.bold}>Bebidas:</Text> não ter ingerido bebida alcoólica nas últimas 12 horas</Text>
                    <Text style={style.info2}><Text style={style.bold}>Fumo:</Text> não ter fumado tabaco por no mínimo 2 horas antes da doação</Text>
                    <Text style={style.info2}><Text style={style.bold}>Exercícios:</Text> não ter praticado exercícios físicos exagerados nas últimas 24 horas</Text>
                    <Text style={style.info2}><Text style={style.bold}>Homem:</Text> 60 dias (máximo de 04 doações nos últimos 12 meses).</Text>
                    <Text style={style.info2}><Text style={style.bold}>Mulher:</Text> 90 dias (máximo de 03 doações nos últimos 12 meses).</Text>
                    
                <Text style={style.h1}>Compatibilidade sanguínea</Text>
                    <Text style={style.info2}><Text style={style.bold}>Sangue A:</Text>  é um dos tipos mais comuns e contém anticorpos contra o tipo B, também chamado de anti-B, só podendo receber sangue de pessoas do tipo A ou O;</Text>
                    <Text style={style.info2}><Text style={style.bold}>Sangue B:</Text> é um dos tipos mais raros e contém anticorpos contra o tipo A, também chamado de anti-A, só podendo receber sangue de pessoas do tipo B ou O;</Text>
                    <Text style={style.info2}><Text style={style.bold}>Sangue AB:</Text> é um dos tipos mais raros e não possui anticorpos contra A ou B, o que significa que pode receber sangue de todos os tipos sem que haja reação;</Text>
                    <Text style={style.info2}><Text style={style.bold}>Sangue O:</Text> é conhecido como o doador universal e é um dos tipos mais comum, possui anticorpos anti-A e anti-B, só podendo receber sangue de pessoas do tipo O, caso contrário pode a aglutinação das hemácias.</Text>

                    <Text style={style.bold}>Sangue tipo A+</Text>
                    <Text style={style.info2}>Pode doar para: AB+ e A+, Pode receber doação de: A+ | A- | O+ e O-</Text>

                    <Text style={style.bold}>Sangue tipo A-</Text>
                    <Text style={style.info2}>Pode doar para: A+ | A- | AB+ e AB-, Pode receber doação de: A- e O-</Text>

                    <Text style={style.bold}>Sangue tipo B+</Text>
                    <Text style={style.info2}>Pode doar para: B+ e AB+, Pode receber doação de: B+ | B- | O+ e O-</Text>

                    <Text style={style.bold}>Sangue tipo B-</Text>
                    <Text style={style.info2}>Pode doar para: B+ | B- | AB+ e AB-, Pode receber doação de: B- e 0-</Text>

                    <Text style={style.bold}>Sangue tipo AB+</Text>
                    <Text style={style.info2}>Pode doar para: AB+, Pode receber doação de: A+ | B+ | O+ | AB+ | A- | B- | O- e AB- (todos)</Text>

                    <Text style={style.bold}>Sangue tipo AB-</Text>
                    <Text style={style.info2}>Pode doar para: AB+ e AB-, Pode receber doação de: A- | B- | O- e AB-</Text>

                    <Text style={style.bold}>Sangue tipo O+</Text>
                    <Text style={style.info2}>Pode doar para: A+ | B+ | O+ e AB+, Pode receber doação de: O+ e O-</Text>

                    <Text style={style.bold}>Sangue tipo O-</Text>
                    <Text style={style.info2}>Pode doar para: A+ | B+ | O+ | AB+ | A- | B- | O- e AB-, Pode receber doação de: O- </Text>
            </ScrollView>
    </View>
    )
}