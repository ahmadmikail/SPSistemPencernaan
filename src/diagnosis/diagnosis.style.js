import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
    fontFamily: 'roboto',
  },
  scrollView: {
    width,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'monospace'
  },
  cardView: {
    backgroundColor: '#56BBF1',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    padding: 15,
    justifyContent: 'space-between'
    },
  submitbutton: {
    alignSelf: 'center',
    backgroundColor:'#56BBF1',
    borderRadius: 120,
    marginTop: 12,
    marginBottom: 15,
    marginLeft: 270,
    padding: 14
    }
});

export default main;