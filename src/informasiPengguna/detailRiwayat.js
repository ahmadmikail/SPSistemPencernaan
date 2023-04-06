import { View, Text } from 'react-native'
import React from 'react'
import Styles from './informasiPengguna.style'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { where, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase'

const dayjs = require('dayjs')

export default function detailRiwayat({navigation, route}) {
  const hapusRiwayat = async () => {    
    await deleteDoc(doc(db, "diagnosis", route.params.data.id));
    navigation.navigate('Pengguna')
  }

    let gejalaTerpilih = route.params.data.gejalaTerpilih.join("\n")
    return (
    <View style={Styles.containerDetail}>
      <ScrollView>
      <Text style={Styles.teksDetairiwayat}>
        Pada {route.params.data.timestamp}
      </Text>
      <Text style={Styles.teksDetairiwayat}>{route.params.data.penyakit}</Text>
      <Text style={Styles.teksDetairiwayat}>dengan persentase {route.params.data.presentase} persen</Text>
      <Text style={Styles.teksDetairiwayat}>dengan gejala: </Text>
      <Text style={Styles.teksDetairiwayat}>{gejalaTerpilih.toString()}</Text>
      <TouchableOpacity style={Styles.buttonsignout}>
        <Text style={Styles.buttonsignouttext} onPress={hapusRiwayat}>
          Hapus riwayat
        </Text>
      </TouchableOpacity>      
      </ScrollView>     
    </View>
  )
}