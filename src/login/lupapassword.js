import { View, Text,Image } from 'react-native'
import React from 'react'
import Styles from './login.style'
import navigation from '../navigation'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import logo from '../../assets/icon.png'
import undip from '../../assets/undip.png'
import {auth} from '../../firebase'
import { sendPasswordResetEmail } from "firebase/auth";

export default function lupapassword({route, navigation }) {
    let [email, setEmail] = React.useState("")  
    let [errorMessage, setErrorMessage] = React.useState("")

    let reset = () => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          navigation.popToTop()
       })
        .catch((error) => {
          setErrorMessage('Email tidak terdaftar')
     });
    }
  return (
    <View style={Styles.container}>
        <Image source={logo} style = {Styles.image}/>
        <View style={Styles.container2}>            
          <Text style={Styles.textlogin}>Reset Password</Text>
          <Text style={Styles.erorpass}>{errorMessage}</Text>
          <TextInput
             style={Styles.textinput} 
             placeholder='email'
             value={email}
             onChangeText={setEmail}
             />
          
          <TouchableOpacity style={Styles.button} onPress={reset}>
            <Text style={Styles.buttontext}>Reset password</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginVertical: 4}}>
          <Text style={Styles.belumpunyaakun}>Belum memiliki akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={Styles.buatakunteks}>Buat akun </Text></TouchableOpacity>
          </View>                
        </View>
        <Image source={undip} style ={Styles.undip}/>
      <Text style={Styles.teksundip} >Universitas Diponegoro</Text>
    </View>
  )
}