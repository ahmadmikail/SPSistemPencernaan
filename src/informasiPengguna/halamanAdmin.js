import { View, Text, TouchableOpacity, Alert, } from 'react-native'
import React from 'react'
import Styles from './informasiPengguna.style'
import { signOut } from 'firebase/auth'
import {auth} from '../../firebase'

export default function halamanAdmin({navigation}) {
  
      let logout = () => {
        signOut(auth).then(() => {
            navigation.popToTop()
          })}
  
    return (    
    <View style={Styles.container}>
        <View style={Styles.container2}>
            <Text style={Styles.titletext}>
                Telah masuk dengan email {auth.currentUser.email}
            </Text>            
            <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Pilih Pengguna')}>
                <Text style={Styles.buttontext}>
                    Riwayat pengguna
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonsignout} onPress={logout}>
                <Text style={Styles.buttonsignouttext}>
                    Signout
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}