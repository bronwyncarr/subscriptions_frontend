import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: large;
`;
export const Nav = styled.nav`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

export const RouterLink = styled(Link)`
  margin: 10px;
  color: crimson;
  text-decoration: none;
`;

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  margin: 10px;
  width: 40%;
  padding: 0.5rem;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
