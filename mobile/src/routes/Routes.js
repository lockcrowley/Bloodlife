import React from 'react';
import {NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as ProviderPaper, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

import Enter from '../pages/Enter';
import Drawer from './drawer';
import ScheduleDetail from '../pages/ScheduleDetail';


import {ThemeContext} from '../pages/Components/Context/ThemeContext';

const {Navigator, Screen} = createStackNavigator();

export default function Routes(){

    const  [isDarkTheme, setIsDarkTheme] = React.useState();

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
          ...NavigationDefaultTheme.colors,
          ...PaperDefaultTheme.colors,
          text: '#333333',
        }
      }
      
      const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
          ...NavigationDarkTheme.colors,
          ...PaperDarkTheme.colors,
          background: '#333333',
          text: '#FFF',
        }
      }
    
      const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const themeContext = React.useMemo(() => ({
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme);
        },
    }), []);

    return(
        <ProviderPaper theme={theme}> 
        <ThemeContext.Provider value={themeContext}>
        <NavigationContainer theme={theme}>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Enter" component={Enter}/>
                <Screen name="Home" component={Drawer}/>   
                <Screen name="ScheduleDetail" component={ScheduleDetail}/>
            </Navigator>
        </NavigationContainer>
        </ThemeContext.Provider>
        </ProviderPaper>
    );
}