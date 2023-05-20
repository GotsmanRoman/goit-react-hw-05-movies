import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Search from '../Components/Search/Search';
import { PageTitle } from './index.module';
import { fetchMovieByName } from 'components/Components/utils/API';
import Loader from 'components/Components/Loader/Loader';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    // if (query === '') {
    //   return;
    // }
    if (searchQuery) {
      setQuery(searchQuery);
    }

    const getMovieByName = async query => {
      try {
        setLoading(true);

        const { results } = await fetchMovieByName(query);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByName(query);
  }, [query, searchQuery]);

  // const handlerFormSubmit = search => {
  //   setQuery(search);
  // };

  return (
    <div>
      <PageTitle>Movies</PageTitle>
      <Search></Search>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>
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
