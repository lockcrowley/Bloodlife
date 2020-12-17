import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from '../pages/Components/Drawer/DrawerContent';
import Hemocenters from '../pages/Hemocenters';
import Home from '../pages/Home';
import InfoDonate from '../pages/InfoDonate';

const {Navigator, Screen} = createDrawerNavigator();
 
function Drawer (){
    return (
       <Navigator screenOptions={{ headerShown: false  }} drawerContent={props => <DrawerContent {...props} />}>
           <Screen name="Home" component={Home}/>
           <Screen name="Hemocenters" component={Hemocenters}/>
           <Screen name="InfoDonate" component={InfoDonate}/>
       </Navigator>
    );
}

export default Drawer;
