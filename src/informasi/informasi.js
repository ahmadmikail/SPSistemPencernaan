import { View, Text,TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Styles from './informasi.style'
import navigation from '../navigation'

const dataPenyakit = require ('../../db/diseases.json')

export default function informasi({navigation}) {
  return (
    <SafeAreaView  style={Styles.container}>
      <ScrollView>
        <View>
        {dataPenyakit.map(data => (
            <TouchableOpacity
              key={data.id}
              onPress={() => navigation.navigate('Detail Informasi',{data:data})}
              style={Styles.cardView}
              >
              <View>
                <Text style={Styles.text}>{data.namaPenyakit}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}