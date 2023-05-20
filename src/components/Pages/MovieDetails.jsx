import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'components/Components/utils/API';
import MovieItem from 'components/Components/MovieItem/MovieItem';
import { ReturnBackLink } from '../Components/MovieItem/MovieItem.module';
import Loader from 'components/Components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const { current } = useRef(location.state?.from ?? '/');
  //console.log(location.state.pathname + location.state.search);

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
          <ReturnBackLink to={current}>Return back</ReturnBackLink>
          <MovieItem movie={movie} isLoading={isLoading}></MovieItem>
        </>
      )}
    </>
  );
}
