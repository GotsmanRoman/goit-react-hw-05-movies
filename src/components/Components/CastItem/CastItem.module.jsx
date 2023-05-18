import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;
export const ActorData = styled.div`
  width: 200px;
  height: 330px;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Poster = styled.img`
  width: 200px;
  height: 250px;
  background-size: cover;
`;
export const ActorInfo = styled.h3`
  padding: 0;
  margin: 0;
`;
export const ActorRole = styled.h5`
  text-align: center;
  padding: 0;
  margin: 0;
`;
