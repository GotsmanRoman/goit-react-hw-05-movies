import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import {
  Container,
  ReviewData,
  ReviewInfo,
  ReviewText,
} from './ReviewItem.module';

export default function ReviewItem({ reviews }) {
  const { results } = reviews;

  return (
    <>
      {!Object.keys(reviews).length ? (
        <Loader />
      ) : (
        <Container>
          {results.map(item => {
            return (
              <ReviewData key={item.id}>
                <ReviewInfo>Author: {item.author}</ReviewInfo>
                <ReviewText>Character: {item.content}</ReviewText>
              </ReviewData>
            );
          })}
        </Container>
      )}
    </>
  );
}

ReviewItem.propTypes = {
  reviews: PropTypes.object.isRequired,
};
