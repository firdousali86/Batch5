import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useFetchMovies from '../../hooks/useFetchMovies';

const TestHOCScreen = () => {
  const {movies, loading, error} = useFetchMovies(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  );

  console.log('===============');
  console.log(movies);
  console.log('===============');

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default TestHOCScreen;

const styles = StyleSheet.create({});
