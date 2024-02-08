import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import PersistanceHelper from '../../helpers/PersistanceHelper';

const CartScreen = () => {
  useEffect(() => {
    PersistanceHelper.getValue('firstName').then(value => {
      console.log(value);
    });

    PersistanceHelper.getValue('lastName').then(value => {
      console.log(value);
    });

    PersistanceHelper.getObject('personalDetails').then(resultObj => {
      console.log(resultObj);
    });
  }, []);

  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: 'pink',
                margin: 5,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  marginHorizontal: 10,
                  backgroundColor: 'red',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>{item.item.name}</Text>
                <Text>{item.item.details}</Text>
                <Text>{item.item.price}</Text>
                <Text>{item.quantity}</Text>
              </View>
              <View
                style={{justifyContent: 'center', alignItems: 'center'}}></View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
