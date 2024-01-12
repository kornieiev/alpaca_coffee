import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppBarDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 5px;
`;

export const LinkNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  background: rgba(246, 252, 249, 0.4);
  font-size: 20px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1000ms;
  &:after,
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 1s;
  }
  &:after {
    top: -1px;
    left: -1px;
    border-top: 3px solid rgba(48, 26, 5);
    border-left: 3px solid rgba(48, 26, 5);
  }
  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 3px solid rgba(48, 26, 5);
    border-right: 3px solid rgba(48, 26, 5);
  }
  &.active,
  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background: rgba(157, 87, 22, 0.5);
    color: white;
    &:before,
    &:after {
      width: 100%;
      height: 100%;
      // border-color:white;
    }
  }
`;
