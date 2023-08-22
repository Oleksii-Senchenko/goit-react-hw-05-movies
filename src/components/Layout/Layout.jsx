import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, LayoutList, LayoutItem } from './Layout.styled';
const Layout = () => {
  return (
    <div>
      <LayoutList>
        <LayoutItem>
          <StyledLink to="/">Home</StyledLink>
        </LayoutItem>
        <LayoutItem>
          <StyledLink to="/movies">Movies</StyledLink>
        </LayoutItem>
      </LayoutList>
      <Outlet />
    </div>
  );
};

export default Layout;
