import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBarDiv, LinkNavLink } from './AppBar.styled';

export default function AppBar() {
  return (
    <AppBarDiv>
      <LinkNavLink to="/">Home</LinkNavLink>
      <LinkNavLink to="/about">About</LinkNavLink>
      <LinkNavLink to="/shop">Shop</LinkNavLink>
    </AppBarDiv>
  );
}
