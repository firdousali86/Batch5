import {useState, useEffect} from 'react';

const useFetchMovies = url => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMovies(data.results);
        setError(null);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {movies, error, loading};
};

export default useFetchMovies;
