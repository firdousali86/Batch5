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
import {logout} from '../../features/user/userSlice';
import PersistanceHelper from '../../helpers/PersistanceHelper';
import ItemList from '../../controls/ItemList';
import {MyFirstClassComponent} from '../../components/MyFirstClassComponent';

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
        <MyFirstClassComponent myCity={33} myCountry={666} />
        <ItemList
          listBG={'black'}
          itemList={itemList}
          addToCart={this.props.addToCart}
        />
        <Button
          title={'Logout'}
          onPress={() => {
            this.props.logout();
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

const actions = {increment, decrement, incrementByAmount, addToCart, logout};

export default connect(mapStateToProps, actions)(ReduxClassScreen);
