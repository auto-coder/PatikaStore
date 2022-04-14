import React from 'react';
import {View, FlatList, TextInput, StyleSheet, Text} from 'react-native';
import ProductData from './product.data.json';
import ProductCard from './components/ProductCard';

function App() {
  const renderProducts = ({item}) => <ProductCard products={item} />;

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>PATIKA STORE</Text>
      </View>
      <FlatList
        numColumns={2}
        ListHeaderComponent={() => (
          <TextInput style={styles.input_text} placeholder="Arama" />
        )}
        data={ProductData}
        renderItem={renderProducts}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  input_text: {
    backgroundColor: '#EEEEEE',
    height: 32,
    padding: 8,
    margin: 8,
    borderRadius: 10,
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#800080',
  },
});
