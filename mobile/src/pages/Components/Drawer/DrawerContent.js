import React from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch, useTheme } from 'react-native-paper'
import Icon from  'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import { ThemeContext } from '../Context/ThemeContext';

import styles from './style.js'

export function DrawerContent(props){

    const navigation = useNavigation();

    const { toggleTheme } = React.useContext(ThemeContext); 

    const paperTheme = useTheme();

    function navigateToEnter(){
        navigation.navigate('Enter')
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>

                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                
                                <Title style={styles.title}>Bloodlife</Title>
                                <Caption style={styles.caption}>www.bloodlife.com.br</Caption>

                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Caption style={styles.caption}>Doe sangue e salve vidas!</Caption>
                            </View>
                        </View>                
                    </View>

                    <Drawer.Section style={styles.drawerContent}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                            name="calendar-heart"
                            color={color}
                            size={size} 
                           
                            />
                        )}
                        label="Agendamentos"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />

                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                            name="map"
                            color={color}
                            size={size} 
                           
                            />
                        )}
                        label="Hemocentros"
                        onPress={() => {props.navigation.navigate('Hemocenters')}} 
                    />  
                      <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                            name="clipboard"
                            color={color}
                            size={size} 
                           
                            />
                        )}
                        label="Requisitos para doar"
                        onPress={() => {props.navigation.navigate('InfoDonate')}} 
                    />  

                    </Drawer.Section>
                            
                        <Drawer.Section title="Preferência">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Modo Noturno</Text>
                                    <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                            name="exit-to-app"
                            color={color}
                            size={size} 
                           
                            />
                        )}
                        label="Sair"
                        onPress={navigateToEnter}
                    />
            </Drawer.Section>
        </View>
    );
}