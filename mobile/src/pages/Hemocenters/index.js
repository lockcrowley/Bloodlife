import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import {View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import { useNavigation, useTheme } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

import Icon from '../../assets/mapHosp.png';
import api from '../../services/api';
import style from './style';

export default function Hemocenters(){
    const theme = useTheme();

    const mapDarkStyle = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ];

    const mapStandardStyle = [
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
    ];

    const navigation = useNavigation();
    
    const [hemocenters, setHemocenters] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);
    //const hemocenter = route.params.hemocenter;

    useEffect(() => {
      api.get(`hemocenters`).then(response => {
          setHemocenters(response.data);
      });
  }, []);

    useEffect(() => {
        async function loadInitialPosition() {
            const {granted} = await Location.requestPermissionsAsync();

            if (granted) {
                const { coords } = await Location.getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const {latitude, longitude} = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }

        loadInitialPosition();
    }, []);
       
    if(!currentRegion){
        return null;
    }

    function handleRegionChange(region){
      setCurrentRegion(region);
    }

    function navigateToMap() {
      Linking.openURL(
          `https://www.google.com/maps/dir/?api=1&destination=${hemocenter.latitude},${hemocenter.longitude}`,
        );
  }

    return(
        <View style={style.container}>
            <MapView
            onRegionChangeComplete={handleRegionChange}
            initialRegion={currentRegion} 
            style={style.Map} 
            provider={PROVIDER_GOOGLE}
            customMapStyle={ theme.dark ? mapDarkStyle: mapStandardStyle}
            showsUserLocation
            >
              {hemocenters.map(hemocenter => (

                <Marker 
                key={hemocenter.id}
                coordinate={{
                  latitude: hemocenter.latitude,  
                  longitude: hemocenter.longitude,
                }}
                >
                    <Image source={Icon} style={style.iconMap} />
                    <Callout onPress={() => (
                      Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${hemocenter.latitude},${hemocenter.longitude}`,)
                    )}>
                      <View style={style.callout}>
                        <Text style={style.hopName}>{hemocenter.name}</Text>
                        <Text style={style.info}>{hemocenter.instructions}</Text>
                      </View>
                    </Callout> 
                </Marker>
              ))}    
            </MapView> 
            
            <View style={style.topBar}>
                <TouchableOpacity onPress={navigation.openDrawer} style={style.loadButton}>
                    <Feather name="list" size={28} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={style.searchForm}>

            </View>
        </View>
    )
}