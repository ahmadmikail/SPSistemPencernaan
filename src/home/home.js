import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Text,
  ActivityIndicator
} from 'react-native';
import{auth, db} from '../../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

import logo from '../../assets/icon.png';
import Styles from './home.style'
import undip from '../../assets/undip.png'


export default function home ({navigation, route}) {
  const [user, setUser] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(() => {
      const ambilData = async () => {
        setIsLoading(true)
        let hasil = []
        const q = query(collection(db, "user"), where("uid", "==", auth.currentUser.uid));
        
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let abc = doc.data()
          abc.id = doc.id
          hasil.push(abc)
        });
        setUser(hasil)        
        setIsLoading(false)
      }
      ambilData()    
  }, [])
  if(isLoading || user.length === 0) return <ActivityIndicator style={{marginTop: 40}} size="large" color="#56BBF1" />
      
     return (
      <View style = {Styles.container}>        
        <Text style = {Styles.title}>Sistem Pakar Penyakit Pencernaan</Text>
        <Image source={logo} style = {Styles.image}/>
            <View style = {Styles.container2}>
                <TouchableOpacity onPress={() => navigation.navigate('Diagnosis')} style={Styles.button} >
                    <Text style = {Styles.text}>Mulai Diagnosis</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Informasi')} style={Styles.button}>
                    <Text style = {Styles.text}>Informasi Penyakit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => user[0].isAdmin === true?navigation.navigate('Halaman Admin'):navigation.navigate('Pengguna')} style={Styles.button}>
                    <Text style = {Styles.text}>Informasi pengguna</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About')} style={Styles.button}>
                    <Text style = {Styles.text}>Tentang Aplikasi</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.containerundip}>
      <Image source={undip} style ={Styles.undip}/>
      <Text style={Styles.teksundip} >Universitas Diponegoro</Text>
      </View>
      </View>
    )
  }
