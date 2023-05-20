import {
  Container,
  ActorData,
  Poster,
  ActorInfo,
  ActorRole,
} from './CastItem.module';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

export default function CastItem({ credits }) {
  const { cast } = credits;

  return (
    <>
      {!Object.keys(credits).length ? (
        <Loader />
      ) : (
        <Container>
          {cast.map(item => {
            return (
              <ActorData key={item.id}>
                <Poster
                  src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`}
                ></Poster>
                <ActorInfo>{item.name}</ActorInfo>
                <ActorRole>Character: {item.character}</ActorRole>
              </ActorData>
            );
          })}
        </Container>
      )}
    </>
  );
}
CastItem.propTypes = {
  credits: PropTypes.object.isRequired,
};
