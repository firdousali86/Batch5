import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

export class MyFirstClassComponent extends React.Component {
  static propTypes = {
    myCity: PropTypes.string,
    myCountry: PropTypes.string,
  };

  static defaultProps = {myCity: 'London', myCountry: 'UK'};

  render() {
    const {myCity, myCountry} = this.props;

    console.log(myCity);
    console.log(myCountry);

    return (
      <View>
        <Text>this is my first class component</Text>
        <Text>{myCity}</Text>
        <Text>{myCountry}</Text>
      </View>
    );
  }
}

// export const MyFirstClassComponent;
