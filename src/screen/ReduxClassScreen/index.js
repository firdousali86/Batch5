import {Text, View, Button, TextInput} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';

export class ReduxClassScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {inputVal: 0};
  }

  render() {
    return (
      <View>
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

const mapStateToProps = state => ({counter: state.counter});

const actions = {increment, decrement, incrementByAmount};

export default connect(mapStateToProps, actions)(ReduxClassScreen);
