import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {useGetAllItemsQuery, usePostItemMutation} from '../../services/itemApi';

const TestRTKQuery = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');

  const {data, error, isLoading} = useGetAllItemsQuery();
  const [postItem, {isLoading: isPosting}] = usePostItemMutation();

  console.log('===========');
  console.log(data);
  console.log('===========');

  return (
    <View style={{flex: 1}}>
      <TextInput
        value={title}
        onChangeText={ct => {
          setTitle(ct);
        }}
        placeholder="Title"
      />
      <TextInput
        value={details}
        onChangeText={ct => {
          setDetails(ct);
        }}
        placeholder="Title"
      />
      <TextInput
        value={image}
        onChangeText={ct => {
          setImage(ct);
        }}
        placeholder="Title"
      />

      <Button
        title={'Post Item'}
        onPress={() => {
          postItem({title, details, image});
        }}
      />
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{backgroundColor: 'pink', margin: 5}}>
              <Text>{item.title}</Text>
              <Text>{item.details}</Text>
              <Text>{item.image}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestRTKQuery;

const styles = StyleSheet.create({});
