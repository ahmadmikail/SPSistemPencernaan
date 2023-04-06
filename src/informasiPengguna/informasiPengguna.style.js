import {StyleSheet, Dimensions} from 'react-native';

const main = StyleSheet.create({
    container: {
        flex:1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
      },
      container2:{
        alignSelf:'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#56BBF1',
        marginHorizontal: 40,
        borderRadius: 10,
        padding: 16,
      },  
      button: {
        backgroundColor: 'white',
        padding: 4,
        marginVertical: 9,
        width: 160,
        borderRadius: 10
      },    
      buttontext: {
        textAlign: 'center',
        color: '#56BBF1',
        fontWeight: 'bold',
        fontFamily: 'monospace',
      },
      buttonsignout:{
        backgroundColor: '#EE4B2B',
        padding: 4,
        marginVertical: 9,
        width: 160,
        borderRadius: 10,
        alignSelf:'center'
      },
      buttonsignouttext:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'monospace',
      },
      titletext:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        padding: 9
      },
      teksriwayat: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        fontSize: 13
      },  
      buttonRiwayat: {
        backgroundColor: '#56BBF1',
        padding: 10,
        marginVertical: 9,
        width: 260,
        borderRadius: 10,
        alignItems: 'center'
      },
      teksDetairiwayat: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        fontSize: 13,
        padding: 3
      },    
      containerDetail: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        margin: 15,
        marginTop: 150
      },
      container3:{
        alignSelf:'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#56BBF1',
        marginHorizontal: 40,
        borderRadius: 10,
        padding: 16,
        marginVertical: 10
      },  
      ScrollView:{
        marginVertical: 20
      },
      teksJumlah: {
        marginTop: 15,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 17
      }
});

export default main;