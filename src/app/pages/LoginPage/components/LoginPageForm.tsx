import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const LoginPageForm = styled.div`
  width: 50%;
  background-color: #12130f;
  padding: 25px 40px;
  overflow: auto;
`;

export const PageSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10%;
`;

export const PageSwitcherItem = styled(NavLink)`
  background-color: #40434e;
  color: #9da6b1;
  padding: 10px 25px;
  cursor: pointer;
  font-size: 0.9em;
  border: none;
  outline: none;
  display: inline-block;
  text-decoration: none;

  &.active {
    background-color: #6b5b95;
    color: white;
  }
`;
