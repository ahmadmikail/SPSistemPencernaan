import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './about.style'
import undip from '../../assets/undip.png'

export default function About() {
  return (
    <View style={styles.container}>
      <Image source={undip} style={styles.image}/>
      <Text style={styles.text}>Aplikasi sistem pakar ini merupakan implementasi dari kecerdasan buatan untuk memecahkan masalah ketidakpastian dengan menggunakan teori Dempster-Shafer</Text>
      <Text style={styles.text}>Aplikasi ini dibuat oleh: </Text>
      <Text style={styles.text}>Ahmad Mikail Afkar </Text>
      <Text style={styles.text2}>Mahasiswa Teknik Komputer Universitas Diponegoro</Text>
      <Text style={styles.text2}>dalam bimbingan: </Text>
      <Text style={styles.text3}>Agung Budi Prasetijo, ST. MIT, PhD</Text>      
      <Text style={styles.text2}>(NIP. 197106061995121003)</Text>
      <Text style={styles.text3}>Dr. Ir. R. Rizal Isnanto, S.T., M.M., M.T., IPM.</Text>     
      <Text style={styles.text2}>(NIP. 197007272000121001)</Text>
      <Text style={styles.text}>Aplikasi ini dibuat menggunakan kerangka kerja React Native dengan bahasa pemrograman Javascript</Text>
    </View>
  )
}