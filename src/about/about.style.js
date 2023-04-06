import {StyleSheet, Dimensions} from 'react-native';

const main = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 60,
        flexDirection:'column',
        alignItems:'center',
        paddingTop: 30,
        padding: 10
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'monospace',
    paddingTop: 10
  },

  text2: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'monospace',
  }
  ,
  text3: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  image: {
    width: 150, height: 150,
  }
});

export default main;