import {
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {addToCart} from '../../features/cart/cartSlice';
import PersistanceHelper from '../../helpers/PersistanceHelper';

const itemList = [
  {id: 1, name: 'Macbook', details: '', price: 2500},
  {id: 2, name: 'iPhone', details: '', price: 1500},
  {id: 3, name: 'iPad', details: '', price: 800},
  {id: 4, name: 'Tripod', details: '', price: 50},
  {id: 5, name: 'Newtonion Telescope', details: '', price: 500},
  {id: 6, name: 'LED Monitor', details: '', price: 200},
];

export class ReduxClassScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {inputVal: 0};
  }

  componentDidMount() {
    // PersistanceHelper.setValue('firstName', 'Firdous');
    // PersistanceHelper.setValue('lastName', 'Ali');
    // PersistanceHelper.setObject('personalDetails', {
    //   firstName: 'Firdous',
    //   lastName: 'Ali',
    //   cell: '123456',
    //   email: 'sss@dfdf.com',
    // });
  }

  render() {
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
                      this.props.addToCart(item);
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

        <Text style={{fontSize: 25}}>{this.props.counter.value}</Text>

        <TextInput
          value={this.state.inputVal}
          onChangeText={ct => {
            this.setState({inputVal: ct});
          }}
          placeholder="Increment by amount"
        />
        <Button
          title={'Increment'}
          onPress={() => {
            this.props.increment();
          }}
        />
        <Button
          title={'Decrement'}
          onPress={() => {
            this.props.decrement();
          }}
        />
        <Button
          title={'Increment by amount'}
          onPress={() => {
            this.props.incrementByAmount(this.state.inputVal);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({counter: state.counter, cart: state.cart});

const actions = {increment, decrement, incrementByAmount, addToCart};

export default connect(mapStateToProps, actions)(ReduxClassScreen);
