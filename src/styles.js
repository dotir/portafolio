import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  background: #333;
  color: white;
  padding: 10px 0;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      margin: 0 10px;
    }
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export const Footer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
`;
