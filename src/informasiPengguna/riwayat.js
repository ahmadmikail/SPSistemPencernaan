import React from 'react'
import { View, Text,ActivityIndicator ,TouchableOpacity, ScrollView} from 'react-native'
import Styles from './informasiPengguna.style'
import { collection, query, where, getDocs, orderBy, doc, deleteDoc } from "firebase/firestore";
import {auth,db} from '../../firebase'

const dayjs = require('dayjs')

export default function riwayat({navigation}) {
  const [histories, setHistories] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(() => {
      const ambilData = async () => {
        setIsLoading(true)
        let hasil = []
        const q = query(collection(db, "diagnosis"), where("uid", "==", auth.currentUser.uid), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let abc = doc.data()
          abc.id = doc.id
          hasil.push(abc)
        });
        setHistories(hasil)
        setIsLoading(false)
      }
      ambilData()
  }, [])

  if(isLoading || histories.length === 0) return <ActivityIndicator style={{marginTop: 40}} size="large" color="#56BBF1" />

  

console.log(histories);

  return (
    <View style={Styles.container}>
      <ScrollView style={{marginTop:30}}>
        <View style={{padding: 10}}>
        {histories.map((data) => (          
          <TouchableOpacity
          key={data.id}
          style={Styles.buttonRiwayat}
          onPress={() => navigation.navigate('Detail Riwayat',{data:data})}
          >
            <Text style={Styles.teksriwayat}>
            {data.penyakit}
            </Text> 
            <Text style={Styles.teksriwayat}>
            {data.timestamp}
            </Text>                             
        </TouchableOpacity>
        ))}
        </View>        
      </ScrollView>      
    </View>
  )
}
