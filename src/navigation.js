import React, { Component } from 'react'
import Diagnosis from './diagnosis/diagnosis'
import About from './about/about'
import Informasi from './informasi/informasi'
import detailInformasi from './informasi/detailInformasi'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home/home'
import Hasil from './diagnosis/hasilDiagnosis'
import login from './login/login';
import Register from './login/register'
import lupapassword from './login/lupapassword'
import Pengguna from './informasiPengguna/informasiPengguna'
import Riwayat from './informasiPengguna/riwayat'
import detailRiwayat from './informasiPengguna/detailRiwayat'
import halamanAdmin from './informasiPengguna/halamanAdmin'
import pilihPengguna from './informasiPengguna/pilihPengguna'
import historyPengguna from './informasiPengguna/historyPengguna'

const Stack = createNativeStackNavigator();

function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>              
        <Stack.Screen name="Login" component={login} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Lupapassword" component={lupapassword} options={{headerShown: false}} />
        <Stack.Screen name="Diagnosis" component={Diagnosis} />
        <Stack.Screen name="Informasi" component={Informasi} />
        <Stack.Screen name="Pengguna" component={Pengguna} />
        <Stack.Screen name="Halaman Admin" component={halamanAdmin} />        
        <Stack.Screen name="Pilih Pengguna" component={pilihPengguna} />
        <Stack.Screen name="Riwayat" component={Riwayat} />         
        <Stack.Screen name="Detail Riwayat" component={detailRiwayat} />      
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Detail Informasi" component={detailInformasi} />
        <Stack.Screen name="Hasil" component={Hasil} />
        <Stack.Screen name="History Pengguna" component={historyPengguna} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;
