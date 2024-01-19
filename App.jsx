import {Text, View} from 'react-native';
import {MyFirstClassComponent} from './components/MyFirstClassComponent';
import MTFC, {
  MyFirstFunctionalComponent,
  MySecondFunctionalComponent,
} from './components/MyFirstFunctionalComponent';

const App = () => {
  return (
    <View>
      <Text>hello world!</Text>
      <MyFirstClassComponent />
      <MyFirstFunctionalComponent />
      <MySecondFunctionalComponent />
      <MTFC />
    </View>
  );
};

export default App;
