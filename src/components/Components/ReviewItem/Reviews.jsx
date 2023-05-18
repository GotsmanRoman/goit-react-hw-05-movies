import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieByReviews } from 'components/Components/utils/API';
import ReviewItem from 'components/Components/ReviewItem/ReviewItem';
import Loader from 'components/Components/Loader/Loader';

export default function Reviews() {
  const { movieId } = useParams();
  const [Reviews, setReviews] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieByReviews = async id => {
      try {
        setLoading(true);
        const result = await fetchMovieByReviews(id);
        setReviews(result);
        setLoading(false);
      } catch {
        console.log('error');
      }
    };
    getMovieByReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ReviewItem reviews={Reviews} isLoading={isLoading}></ReviewItem>
      )}
    </>
  );
}
