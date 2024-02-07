import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {addToCart} from '../../features/cart/cartSlice';

const itemList = [
  {id: 1, name: 'Macbook', details: '', price: 2500},
  {id: 2, name: 'iPhone', details: '', price: 1500},
  {id: 3, name: 'iPad', details: '', price: 800},
  {id: 4, name: 'Tripod', details: '', price: 50},
  {id: 5, name: 'Newtonion Telescope', details: '', price: 500},
  {id: 6, name: 'LED Monitor', details: '', price: 200},
];

const ReduxScreen = () => {
  const [customVal, setCustomVal] = useState(0);
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter.value);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={itemList}
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
                <Text>{item.name}</Text>
                <Text>{item.details}</Text>
                <Text>{item.price}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                  style={{
                    height: 50,
                    width: 100,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <Button
        title={'Increment'}
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title={'Decrement'}
        onPress={() => {
          dispatch(decrement());
        }}
      />

      <TextInput
        value={customVal}
        onChangeText={ct => {
          setCustomVal(ct);
        }}
        placeholder="Increment amount"
      />

      <Button
        title={'Increment by amount'}
        onPress={() => {
          dispatch(incrementByAmount(parseInt(customVal)));
        }}
      />

      <Text>{counterValue}</Text>
    </View>
  );
};

export default ReduxScreen;

const styles = StyleSheet.create({});
