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

  // let somename: string;
  // let somenumber: number;
  // let mycourses: string[];
  // let mymarks: number[];
  // let ssdfdf: boolean[];

  // somename = 'abcd';

  // mycourses = ['maths', 'science', 'english', 456];

  // ssdfdf = [true, true, false, 'ssd'];

  // type Person = {
  //   name: string;
  //   age: number;
  //   email?: string;
  //   isDrivingLicense?: boolean;
  // };

  // let person: Person = {name: 'Firdous Ali', age: 35};

  // // person = {
  // //   name: 'Firdous Ali',
  // //   age: 35,
  // // };

  // let people: Person[];

  // people = [
  //   {name: 'person1', age: 23},
  //   {name: 'person2', age: 24},
  //   {name: 'person3', age: 25},
  // ];

  // type myVariable = string[] | number[];

  // let somevariable: myVariable = [1, 2, 3, '4'];

  // const addNumber = (a: number, b: number): number => {
  //   return a + b;
  // };

  // const addString = (a: string, b: string): string => {
  //   return a + b;
  // };

  // addNumber(3, 4); //7
  // addString('3', '4'); //34

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
