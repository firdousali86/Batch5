import React from 'react';
import useFetchMovies from '../../hooks/useFetchMovies';

const WithDataFetching = url => WrappedComponent => {
  return props => {
    const {movies, loading, error} = useFetchMovies(url);

    return (
      <WrappedComponent
        {...props}
        data={movies}
        loading={loading}
        error={error}
      />
    );
  };
};

export default WithDataFetching;
