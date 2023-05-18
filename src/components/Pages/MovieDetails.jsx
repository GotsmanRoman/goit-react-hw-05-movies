import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'components/Components/utils/API';
import MovieItem from 'components/Components/MovieItem/MovieItem';
import Loader from 'components/Components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);

  // console.log(userLocationRef.current);

  useEffect(() => {
    const getMovieById = async id => {
      try {
        setLoading(true);
        const result = await fetchMovieById(id);
        setMovie(result);
        setLoading(false);
      } catch {
        console.log('error');
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MovieItem movie={movie} isLoading={isLoading}></MovieItem>
        </>
      )}
    </>
  );
}
