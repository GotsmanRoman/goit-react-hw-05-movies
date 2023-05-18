import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h2`
  padding-left: 20px;
`;
export const ReturnBackLink = styled(Link)`
  margin-top: 40px;
  padding-left: 20px;
  text-decoration: none;
  &::before {
    content: '\u21E0';
    margin-right: 10px;
  }
`;
