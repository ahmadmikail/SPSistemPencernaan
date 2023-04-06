import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import Styles from './login.style'
import navigation from '../navigation'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import logo from '../../assets/icon.png'
import undip from '../../assets/undip.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

export default function login({route, navigation }) {
    let [email, setEmail] = React.useState("")
    let [password, setPassword] = React.useState("")
    let [errorMessage, setErrorMessage] = React.useState("")
       
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if(user) {
          navigation.navigate('Home')  
        }
      })
    }, [])

    let Masuk = () => {
      if(email !== "" && password !== ""){
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Home") 
      })
      .catch((error) => {
        setErrorMessage("Email dan password salah")
      });
      } else {
        setErrorMessage('Mohon isikan email dan password')
      }
    }
    
  return (
    <View style={Styles.container}>
        <Image source={logo} style = {Styles.image}/>
        <View style={Styles.container2}>            
          <Text style={Styles.textlogin}>Masuk</Text>
          <Text style={Styles.erorpass}>{errorMessage}</Text>
          <TextInput
             style={Styles.textinput} 
             placeholder='email'
             value={email}
             onChangeText={setEmail}
             />
          <TextInput 
             style={Styles.textinput}
             placeholder='password'
             secureTextEntry={true}
             value={password}
             onChangeText={setPassword}
              />
          <TouchableOpacity style={Styles.button} onPress={Masuk}>
            <Text style={Styles.buttontext}>Masuk</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginVertical: 4}}>
          <Text style={Styles.belumpunyaakun}>Belum memiliki akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={Styles.buatakunteks}>Buat akun </Text></TouchableOpacity>
          </View> 
          <View style={{flexDirection: 'row', marginVertical: 4}}>
          <Text style={Styles.belumpunyaakun}>Lupa password? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Lupapassword')}><Text style={Styles.buatakunteks}>Reset password </Text></TouchableOpacity>
          </View>         
        </View>
        <Image source={undip} style ={Styles.undip}/>
      <Text style={Styles.teksundip} >Universitas Diponegoro</Text>
    </View>
  )
}