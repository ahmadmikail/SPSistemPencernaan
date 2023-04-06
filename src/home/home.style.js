import { Row } from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';

const main = StyleSheet.create({
  container: {
    flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
  },
  containerundip: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  image: {
    width: 160, height: 160,
  },
  undip: {
    width: 50, height: 50,
  },
  teksundip: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'monospace'
  },
  container2: {
    padding: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#56BBF1',
    paddingBottom: 10
  },
  button: {
    backgroundColor: '#56BBF1',
    padding: 8,
    borderRadius: 18,
    margin: 10,
    width: 260
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'monospace'
  }
});

export default main;