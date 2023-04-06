import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import Checkbox from 'expo-checkbox';
import Styles from './diagnosis.style'
import navigation from '../navigation'
import {auth, db} from '../../firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const data = require('../../db/evidence.json')
const disease = require('../../db/diseases.json')

export default function diagnosis({navigation}) {
  const [evidences, setEvidences] = useState(data);
  const handleChange = (id) => {
    let temp = evidences.map((evidence) => {
      if (id === evidence.id) {
        return { ...evidence, isChecked: !evidence.isChecked };
      }
      return evidence;
    });
    setEvidences(temp);
  }

  const diag = async (gejalaterpilih, nilaikemungkinan, hasilakhir) => {
    try {
      const docRef = await addDoc(collection(db, "diagnosis"), {
        uid: auth.currentUser.uid,
        gejalaTerpilih: gejalaterpilih,
        presentase: Math.ceil(nilaikemungkinan*100),
        penyakit: (hasilakhir[0].namaPenyakit),
        timestamp: new Date().toLocaleDateString()
      });
      navigation.navigate('Hasil',{

        gejala:gejalaterpilih.join( "\n\n "),
        persentase:Math.ceil(nilaikemungkinan*100),
        nama:(hasilakhir[0].namaPenyakit)        
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleSubmit = () => {
    let selected = evidences.filter((evidence) => evidence.isChecked).map((select) => {
      return [select.kodePenyakit, select.belief]
    });

    let gejalaterpilih = evidences.filter((evidence) => evidence.isChecked).map((select) => {
      return select.namaGejala
    });
    
    let fod = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10']
 
    var densitasbaru = []  
    
    if(selected.length<2){
      Alert.alert(
        "Alert",
        "Mohon masukkan gejala minimal dua",
        [          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    else{
      while(selected.length != 0){      
        var densitas1 = []
        var densitas2 = [] 
            densitas1[0] = selected.shift()
            densitas1[1] = [fod, 1-densitas1[0][1]]
            densitas2 = []
        if(typeof k == 'undefined'){
            densitas2[0] = selected.shift()
        }
        else{
            objek.forEach((item) => {
                if(item[0][0] !== "theta"){
                    densitas2.push(item)
                }
            });
            
        }
        let theta = 1
        densitas2.forEach((item)=> {          
        theta -= (item[1])
      })
      densitas2.push([fod,theta])
      densitasbaru = []
      var m = densitas2.length
      for (let y = 0; y < m; y++){
        for(let x = 0; x<2; x++){
          if(!(y==m-1 && x==1)){
            var v = densitas1[x][0]
            var w = densitas2[y][0]            
            var vw = v.filter(value => w.includes(value))
            var k
            if (vw.length === 0){
              k = "theta"
            }else{
              k = vw.join()
            }
            if(typeof densitasbaru[k] == 'undefined'){
              densitasbaru[k] = densitas1[x][1] * densitas2[y][1]              
            }else{              
              densitasbaru[k] += densitas1[x][1] * densitas2[y][1]
            }           
          }          
        } 
      }      
      console.log(densitasbaru);
      var objek = Object.keys(densitasbaru).map((key) => 
      [String(key).split(','), densitasbaru[key]])
      
      objek.forEach((item) => {
        if(item[0] !== ['theta']){
          item[1] = item[1]/(1-((typeof densitasbaru['theta'] !== 'undefined')?densitasbaru['theta']:0))          
        }
      }); 
    }
    let urutan = []
    objek.forEach((item) => {
      console.log(item[0].join().length);
      if(item[0] != 'theta'){
        if(item[0].join().length == 2){
        urutan.push({'kode':item[0].join(),'nilai':item[1] })
      }
    }
    })
    if(urutan.length != 0){
      urutan.sort(function (a,b){ return b.nilai - a.nilai})
    let hasilpenyakit = urutan[0].kode    
    let nilaikemungkinan = urutan[0].nilai
    let hasilakhir = disease.filter((item)=>{
      if(item.kodePenyakit == hasilpenyakit) {
        return item.namaPenyakit
      }
    })
    console.log(urutan);
      diag(gejalaterpilih, nilaikemungkinan, hasilakhir)
    }
    else{
      Alert.alert(
        "Error",
        "Penyakit tidak dapat dideteksi",
        [          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
 }
  }
   
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ margin: 5 }} onPress={() => handleChange(item.id)}>
      <View style={Styles.cardView}>
        <Text style={Styles.text}>{item.namaGejala}</Text>
        <Checkbox
          value={item.isChecked}
        />
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={evidences}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={Styles.submitbutton}
        onPress={handleSubmit}        
      >
        <Text style={Styles.text}>Mulai</Text>
      </TouchableOpacity>
    </View>
  )
}