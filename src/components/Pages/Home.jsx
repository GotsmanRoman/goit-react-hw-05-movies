import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageTitle } from './index.module';
import { fetchMovieByPopular } from 'components/Components/utils/API';
import Loader from 'components/Components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovieByPopular = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovieByPopular();
        setMovies(results);
        setLoading(false);
      } catch {
        console.log('error');
      }
    };
    getMovieByPopular();
  }, []);

  return (
    <div>
      <PageTitle>Trending Today</PageTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`} state={location}>
                  {item.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
