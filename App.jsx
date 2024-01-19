import {Text, View} from 'react-native';
import {MyFirstClassComponent} from './components/MyFirstClassComponent';
import MTFC, {
  MyFirstFunctionalComponent,
  MySecondFunctionalComponent,
} from './components/MyFirstFunctionalComponent';

const App = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text>hello world!</Text>
      <MyFirstClassComponent />
      <MyFirstFunctionalComponent myname={'Firdous Ali'} myCell={'1234567'} />
      <MySecondFunctionalComponent />
      <MTFC />
    </View>
  );
};

export default App;
