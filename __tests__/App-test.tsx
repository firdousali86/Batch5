/**
 * @format
 */

import 'react-native';
import React from 'react';
import ReactTestingComponent from '../src/components/ReactTestingComponent';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import {render, fireEvent} from '@testing-library/react-native';
// it('renders correctly', () => {
//   renderer.create(<App />);
// });
test('test my react component', () => {
  const {getByTestId} = render(<ReactTestingComponent />);
  const mylabel = getByTestId('mytextlabel');

  expect(mylabel).toHaveTextContent('hello we are testing RTL');
});

test('test after button press', () => {
  const {getByTestId} = render(<ReactTestingComponent />);
  const mylabel = getByTestId('mytextlabel');
  const mybutton1 = getByTestId('button1');

  fireEvent.press(mybutton1);

  expect(mylabel).toHaveTextContent('did it change');
});
