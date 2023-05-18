import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from '../Components/Search/Search';
import { PageTitle } from './index.module';
import { fetchMovieByName } from 'components/Components/utils/API';
import Loader from 'components/Components/Loader/Loader';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '100px',
  clickToClose: true,
});
function showError(valueToFade = '2000') {
  Notiflix.Notify.failure(
    'Sorry, there are no movies matching your search query. Please try again.',
    {
      timeout: valueToFade,
    }
  );
}

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovieByName = async query => {
      try {
        setLoading(true);

        const { results } = await fetchMovieByName(query);
        setMovies(results);
        setLoading(false);
        if (results.length === 0) showError();
      } catch {
        console.log('error');
      }
    };
    getMovieByName(query);
  }, [query]);

  const handlerFormSubmit = search => {
    setQuery(search);
  };

  return (
    <div>
      <PageTitle>Movies</PageTitle>
      <Search onSubmit={handlerFormSubmit}></Search>
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
