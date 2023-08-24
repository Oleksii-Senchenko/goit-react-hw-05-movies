import styled from '@emotion/styled';
import { Link } from 'react-router-dom';





export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: orange;
  max-width: 300px;
  align-content: center;
  padding: 0
`;

export const MoviesItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  font-size: 18px;
  border-radius: 25px;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: lightgrey;
  }
`;

export const MoviesLink = styled(Link)`
  text-decoration: none;
`;

