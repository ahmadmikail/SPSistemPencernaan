import { View , Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Styles from './hasilDiagnosis.syle'
import { ScrollView } from 'react-native-gesture-handler'


export default function hasilDiagnosis({route, navigation}) {
  return (
    <View style={Styles.container}>      
      <Text style={Styles.teksbesar}> Gejala yang dipilih:</Text>
      <ScrollView>
      <Text style={Styles.teksgejala}> {route.params.gejala}</Text>
      </ScrollView>
      
      <Text style={Styles.tekspenyakit}>Anda mempunyai kemungkinan {route.params.persentase}% terkena penyakit {route.params.nama}</Text>
      <TouchableOpacity
        style={Styles.button}
        onPress = {() => navigation.navigate('Home')}      
      >
        <Text style={Styles.text}>Kembali ke halaman beranda</Text>
      </TouchableOpacity>
    </View>
  )
}