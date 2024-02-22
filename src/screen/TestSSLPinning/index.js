import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {request} from '../../features/movie/movieSlice';
import {useDispatch} from 'react-redux';
import {kApiMovies} from '../../config/WebService';

const TestSSLPinning = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      request({
        url: kApiMovies,
        token:
          'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70',
      }),
    );
  }, []);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default TestSSLPinning;

const styles = StyleSheet.create({});
