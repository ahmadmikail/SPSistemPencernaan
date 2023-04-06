import {StyleSheet} from 'react-native';

const main = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    margin: 8,
    marginTop: 70,
    marginBottom: 90,
  },
  teksbesar: {
    fontWeight: 'Bold' ,
    fontSize: 25,
    fontFamily: 'monospace',
    paddingVertical: 9
  },
  teksgejala: {
    paddingVertical: 9,
    fontSize: 15,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  tekspenyakit: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'monospace',
    paddingVertical: 9
  },
  button: {
    alignSelf: 'center',
    backgroundColor:'#56BBF1',
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 8,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      fontFamily: 'monospace'
    }
});

export default main;