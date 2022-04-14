import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    padding: 15,
    margin: 8,
    flex: 1,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',

    fontSize: 15,
  },
  price: {
    marginTop: 3,
    fontWeight: 'bold',
  },
  stock: {
    paddingTop: 8,
    fontSize: 15,
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  inner_container: {
    padding: 5,
  },
});
