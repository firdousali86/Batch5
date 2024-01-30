import {Text, View} from 'react-native';
import React, {Component, PureComponent} from 'react';
import _ from 'lodash';

export class PracClassComp extends Component {
  constructor(props) {
    super(props);

    console.log('this is constructor');
  }

  componentDidMount() {
    console.log('this is componentdidmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('this is shouldcomponentupdate');
    console.log(nextProps);
    // return true;
    // return !_.isEqual(nextProps, this.props);
    return nextProps.firstProp !== this.props.firstProp;
    // return (
    //   nextProps.userObject.addressObject.streetNumber !==
    //   this.props.userObject.addressObject.streetNumber
    // );
  }

  componentDidUpdate(prevProps) {
    console.log('this is componentdidupdate');
    // console.log(prevProps);
    // console.log(this.props);

    // if (!_.isEqual(prevProps.changedTextVal, this.props.changedTextVal)) {
    //   console.log('changedTextVal has changed');
    //   //invoke some api
    // }

    // if (
    //   !_.isEqual(
    //     prevProps.anotherChangedTextVal,
    //     this.props.anotherChangedTextVal,
    //   )
    // ) {
    //   console.log('anotherChangedTextVal has changed');
    //   //invoke some other api
    // }
  }

  render() {
    console.log('this is render');

    return (
      <View style={{backgroundColor: 'yellow'}}>
        <Text>PracClassComp</Text>
        <Text>{this.props.firstProp}</Text>
      </View>
    );
  }
}

export default PracClassComp;
