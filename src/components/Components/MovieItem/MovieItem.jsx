import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  MovieInfo,
  AdditionalInfo,
  Title,
  List,
  Item,
  Poster,
  Info,
  FilmTitle,
  FilmScore,
  FilmOverview,
  FilmOverviewText,
  FilmGenres,
  FilmGenresList,
} from './MovieItem.module';
import Loader from '../Loader/Loader';

export default function MovieItem({ movie }) {
  const {
    backdrop_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  return (
    <>
      {!Object.keys(movie).length ? (
        <Loader />
      ) : (
        <Container>
          <MovieInfo>
            <Poster
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`}
            ></Poster>
            <Info>
              <FilmTitle>
                {original_title} ({release_date})
              </FilmTitle>
              <FilmScore>User Score: {vote_average}%</FilmScore>
              <FilmOverview>Overview</FilmOverview>
              <FilmOverviewText>{overview}</FilmOverviewText>
              <FilmGenres>Genres</FilmGenres>
              <FilmGenresList>
                {genres.map(item => {
                  return <span key={item.id}>{item.name} | </span>;
                })}
              </FilmGenresList>
            </Info>
          </MovieInfo>
          <AdditionalInfo>
            <Title>Additional information</Title>
            <List>
              <Item>
                <Link to="Cast">Cast</Link>
              </Item>
              <Item>
                <Link to="Reviews">Reviews</Link>
              </Item>
            </List>
            <Outlet></Outlet>
          </AdditionalInfo>
        </Container>
      )}
    </>
  );
}
MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
