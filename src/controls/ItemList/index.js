import PropTypes from 'prop-types';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemList = ({itemList, addToCart, listBG}) => {
  return (
    <View style={{flex: 1, backgroundColor: listBG}}>
      <FlatList
        style={{flex: 1}}
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <View style={styles.container1}>
                <Text>{item.name}</Text>
                <Text>{item.details}</Text>
                <Text>{item.price}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    addToCart(item);
                  }}
                  style={styles.button}>
                  <Text>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

ItemList.propTypes = {
  listBG: PropTypes.oneOf(['red', 'blue', 'green', 'yellow', 'purple']),
  itemList: PropTypes.object,
  addToCart: PropTypes.array,
};

ItemList.defaultProps = {
  listBG: 'purple',
  itemList: [],
  addToCart: () => {},
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    margin: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  container1: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
