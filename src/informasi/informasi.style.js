import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
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
    }
});

export default main;