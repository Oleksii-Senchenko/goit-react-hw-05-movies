import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutList = styled.ul`
  gap: 5px;
  display: flex;
  flex-direction: row;
  background-color: #0a0909;
  border-bottom: 1px solid #ffffff;
`;

export const LayoutItem = styled.li`
  list-style-type: none;
  padding: 10px; 
`;

export const StyledLink = styled(NavLink)`
  color: white;
  &.active {
    color: orange;
  }
`;