import {StyleSheet, Dimensions} from 'react-native';

const main = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: 'white'
  },
  title: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 37,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'monospace',
    margin: 10
  },
  image: {
    width: 280, height: 280,
  },
  gambars: {
    fontSize: 10,
    padding: 6
  }
});

export default main;