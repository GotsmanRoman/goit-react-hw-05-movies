import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;
export const MovieInfo = styled.div`
  display: flex;
  gap: 20px;
`;
export const AdditionalInfo = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h3`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  padding-left: 40px;
`;
export const Item = styled.li``;
export const Poster = styled.img`
  width: 400px;
  height: 500px;
`;
export const Info = styled.div``;
export const FilmTitle = styled.h2``;
export const FilmScore = styled.p``;
export const FilmOverview = styled.h3``;
export const FilmOverviewText = styled.div``;
export const FilmGenres = styled.h3``;
export const FilmGenresList = styled.div``;

export const ReturnBackLink = styled(Link)`
  width: 120px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &::before {
    content: '\u21E0';
    margin-right: 10px;
  }
`;
