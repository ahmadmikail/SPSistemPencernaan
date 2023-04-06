import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {auth, db} from '../../firebase'
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import Styles from './informasiPengguna.style'

export default function pilihPengguna({navigation}) {

    const [user, setUser] = React.useState([])
  
  React.useEffect(() => {
      const ambilData = async () => {
        let hasil = []
        const q = query(collection(db, "user"), orderBy('nama','asc'));
        
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let abc = doc.data()
          abc.id = doc.id
          hasil.push(abc)
        });
        setUser(hasil)
      }
      ambilData()
  }, [])
  return (
    <View style={Styles.container}>
      <Text style={Styles.teksJumlah}>Jumlah pengguna: {user.length}</Text>
      <ScrollView style={Styles.ScrollView}>
      {user.map((data) => (          
      <TouchableOpacity
      key={data.uid}
      style={Styles.buttonRiwayat}
      onPress={() => navigation.navigate('History Pengguna',{data:data})}
      >
        <Text style={Styles.teksriwayat}>
        {data.nama}
        </Text>        
        <Text style={Styles.teksriwayat}>
        {data.jenisKelamin}
        </Text>                  
        <Text style={Styles.teksriwayat}>
        {data.usia} Tahun
        </Text>                           
    </TouchableOpacity>
    ))}
      </ScrollView>   
    </View>  
  )
}