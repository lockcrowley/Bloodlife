import React from 'react';  
import Routes from './src/routes/Routes';

import {AppLoading} from 'expo';
import {Oxygen_400Regular, Oxygen_700Bold, useFonts} from '@expo-google-fonts/oxygen';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Oxygen_400Regular,
    Oxygen_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold, 
  });

  if(!fontsLoaded) {
    return <AppLoading/>

  }else{

  return (
        <Routes/>
  );

  }
}