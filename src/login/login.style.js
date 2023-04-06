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
      textlogin: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'monospace',
        marginBottom: 7
      },
      textinput:{
        backgroundColor: 'white',
        padding: 2,
        marginVertical: 5,
        width: 275,
        borderRadius: 20,
        textAlign: 'center'
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
      belumpunyaakun: {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 14
      },
      buatakunteks:{
        color: '94bede',
        fontFamily: 'monospace',
        fontSize: 14,    
      },
      image: {
        width: 110, height: 110, marginBottom: 10
      },
      undip: {
        width: 50, height: 50, marginTop: 20
      },
      teksundip: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'monospace'
      },
      erorpass:{
        color: 'red',
        marginBottom: 7,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'monospace'        
      },
      pickr: {
        backgroundColor: 'white',
        padding: 2,
        marginVertical: 5,
        width: 275,
        height: 30,
        borderRadius: 20,
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: 12
      },
      textinputReg:{
        backgroundColor: 'white',
        padding: 7,
        marginVertical: 5,
        width: 275,
        textAlign: 'center'
      },
});

export default main;