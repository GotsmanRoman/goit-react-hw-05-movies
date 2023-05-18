import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieByCredits } from 'components/Components/utils/API';
import CastItem from 'components/Components/CastItem/CastItem';
import Loader from 'components/Components/Loader/Loader';

export default function Cast() {
  const { movieId } = useParams();
  const [Credits, setCredits] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieByCredits = async id => {
      try {
        setLoading(true);
        const result = await fetchMovieByCredits(id);
        setCredits(result);
        setLoading(false);
      } catch {
        console.log('error');
      }
    };
    getMovieByCredits(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <CastItem credits={Credits} isLoading={isLoading}></CastItem>
      )}
    </>
  );
}
