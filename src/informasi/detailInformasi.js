import React from 'react';
import {View, SafeAreaView, ScrollView, Text, Image} from 'react-native';
import Style from './detaiInformasi.style'

let IMAGES =  {
  P1: require('../../db/gambar/gerd.jpg'),
  P2: require('../../db/gambar/tukaklambung.png'),
  P3: require('../../db/gambar/gastroparesis.jpg'),
  P4: require('../../db/gambar/dispepsia.png'),
  P5: require('../../db/gambar/diare.jpg'),
  P6: require('../../db/gambar/disentri.jpg'),
  P7: require('../../db/gambar/tipes.jpg'),
  P8: require('../../db/gambar/kolera.jpg'),
  P9: require('../../db/gambar/radangusus.jpg'),
  P10: require('../../db/gambar/penyumbatanusushalus.jpg'),
  
}

export default function detailInformasi({ route, navigation }) {
  const {namaPenyakit, keterangan} = route.params.data;
  console.log(route.params.data.kodePenyakit); //output P1
  return (    
          <View style={Style.container}>
            <Text style= {Style.title}>{namaPenyakit} </Text>  
            <Image source={IMAGES[route.params.data.kodePenyakit]} style={Style.image}/>            
            <Text style={Style.gambars}>Sumber gambar: Google Images</Text>
            <Text style= {Style.text}>{keterangan} </Text>
          </View>     
  );
}