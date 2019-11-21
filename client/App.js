import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import ProfileScreen from './src/screens/ProfileScreen'
import SettingScreen from './src/screens/SettingScreen'
import VoucherScreen from './src/screens/VoucherScreen'
import PromoScreen from './src/screens/PromoScreen'
import EditEmail from './src/screens/Setting/editEmail'
import EditName from './src/screens/Setting/editName'
import EditPhone from './src/screens/Setting/editPhone'
import EditPin from './src/screens/Setting/editPin'
import contactData from './src/mocks/profile.json'

import MainNavigation from './src/navigations/MainNavigation'

import {Provider} from 'react-redux';
import store from './src/Redux/Store';


const App = () => {
  return (
    <>

      <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#0E8EE7"/>
      <View>
        {/* <ProfileScreen {...contactData}/> */}
         {/* <SettingScreen {...contactData}/> */}
        {/* <PromoScreen /> */}
        {/* <VoucherScreen/> */}
        {/* <EditEmail/> */}
        {/* <EditPhone/> */}
        {/* <EditPin/> */}
        <EditName/>
      </View>
      </Provider>

      {/* <Provider store={store}>
        <StatusBar backgroundColor="#118eea" barStyle="light-content" />
        <MainNavigation />
      </Provider> */}
      
      {/* <StatusBar barStyle="dark-content" backgroundColor="#0E8EE7"/>
      <View>
        <ProfileScreen {...contactData}/>
        <PromoScreen />
      </View> */}

    </>
  );
};

export default App;




