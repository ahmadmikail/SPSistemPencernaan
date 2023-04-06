import { View, Text,Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import Styles from './login.style'
import navigation from '../navigation'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import logo from '../../assets/icon.png'
import undip from '../../assets/undip.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../firebase'
import { collection, addDoc } from "firebase/firestore"; 

export default function register({navigation}) {
    let [nama, setNama] = React.useState("")
    let [email, setEmail] = React.useState("")
    let [password, setPassword] = React.useState("")
    let [confirm, setConfirm] = React.useState("")
    let [jenis, setJenis] = React.useState("Pria")
    let [usia, setUsia] = React.useState("")
    let [validation, setValidation] = React.useState("")
    
    let passwordvalidation = (value, compare, setValue) => {
        if(value !== compare){
            setValidation("password tidak sesuai")
        }else{
          setValidation("")
        }
        setValue(value)
    }

    const tambahUser = async (nama, email, jenis, usia) => {
      try {
        const docRef = await addDoc(collection(db, "user"), {
          uid: auth.currentUser.uid,
          nama: nama,
          email: email,
          jenisKelamin: jenis,
          usia: usia,
          isAdmin: false
        });        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    
    let signup = () => {
      if(password === confirm){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {         
          navigation.navigate("Home", { user: userCredential.user})  
          tambahUser(nama, email, jenis, usia)
        })
        .catch((error) => {
          setValidation(error.message)          
        });
      }
    }
    return (
    <View style={Styles.container}>
        <Image source={logo} style = {Styles.image}/>
        <View style={Styles.container2}>            
          <Text style={Styles.textlogin}>Daftarkan akun</Text>
          <Text style={Styles.erorpass}>{validation}</Text>
          <TextInput
             style={Styles.textinputReg} 
             placeholder='nama'
             value={nama}
             onChangeText={setNama}
             />
          <TextInput
             style={Styles.textinputReg} 
             placeholder='umur'
             value={usia}
             onChangeText={setUsia}
             />     
          <Picker
              jenis={jenis}
              style={Styles.pickr}
              onValueChange={(itemValue, itemIndex) => setJenis(jenis)}
            >
              <Picker.Item label="Pria" value="Pria"/>
              <Picker.Item label="Wanita" value="Wanita" />
            </Picker>     
          <TextInput
             style={Styles.textinputReg} 
             placeholder='email'
             value={email}
             onChangeText={setEmail}
             />
          <TextInput 
             style={Styles.textinputReg}
             placeholder='password'
             secureTextEntry={true}
             value={password}
             onChangeText={(value) => passwordvalidation(value, confirm, setPassword)}
              />
          <TextInput 
             style={Styles.textinputReg}
             placeholder='konfirmasi password'
             secureTextEntry={true}
             value={confirm}
             onChangeText={(value) => passwordvalidation(value, password, setConfirm)}
              />    
          <TouchableOpacity style={Styles.button} onPress={signup}>
            <Text style={Styles.buttontext}>Daftar</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginVertical: 4}}>
          <Text style={Styles.belumpunyaakun}>Sudah memiliki akun? </Text>
          <TouchableOpacity onPress={() => navigation.popToTop()}><Text style={Styles.buatakunteks}>Masuk</Text></TouchableOpacity>
          </View> 
            
        </View>
        <Image source={undip} style ={Styles.undip}/>
      <Text style={Styles.teksundip} >Universitas Diponegoro</Text>
    </View>
  )
}