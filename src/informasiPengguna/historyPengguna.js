import { View, Text,ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './informasiPengguna.style'
import { collection, query, where, getDocs, orderBy, doc, deleteDoc } from "firebase/firestore";
import {auth,db} from '../../firebase'

const dayjs = require('dayjs')

export default function historyPengguna({navigation, route}) {
  
  const [histories, setHistories] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(() => {
      const ambilData = async () => {
        setIsLoading(true)
        let hasil = []
        const q = query(collection(db, "diagnosis"), where("uid", "==", route.params.data.uid), orderBy('timestamp', 'desc'));
        
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
  
  return (
    <View style={Styles.container}>
      <ScrollView>
      {histories.map((data) => (          
          <View
          key={data.id}
          style={Styles.container3}
          >
        <Text style={Styles.teksriwayat}>
            Pada {data.timestamp}
        </Text>
        <Text style={Styles.teksriwayat}>{data.penyakit}</Text>
        <Text style={Styles.teksriwayat}>dengan persentase {data.presentase} persen</Text>
        <Text style={Styles.teksriwayat}>dengan gejala: </Text>
        <Text style={Styles.teksriwayat}>{data.gejalaTerpilih.join("\n").toString()}</Text>
        <TouchableOpacity style={Styles.buttonsignout}>
        <Text style={Styles.buttonsignouttext} onPress={async () => {    
    await deleteDoc(doc(db, "diagnosis", data.id));
    navigation.navigate('Pilih Pengguna')
  }}>
          Hapus riwayat
        </Text>
      </TouchableOpacity> 
                                     
        </View>
        ))}
      </ScrollView>      
    </View>
  )
}