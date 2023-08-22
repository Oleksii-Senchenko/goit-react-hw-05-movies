import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



export const HomeBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, rgba(10, 9, 9, 0.8), rgba(10, 9, 9, 0.9));
  padding: 20px;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: orange;
  max-width: 300px;
  align-content: center;
  padding: 0
`;

export const HomeItem = styled.li`
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

export const HomeLink = styled(Link)`
  text-decoration: none;
`;

