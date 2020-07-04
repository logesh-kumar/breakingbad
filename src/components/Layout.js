import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
  }
`;

const MainContent = styled.main``;
const Footer = styled.footer``;

export default function Layout({ children, header, footer }) {
  return (
    <Container>
      <Header>{header}</Header>
      <MainContent>{children}</MainContent>
      <Footer>{footer}</Footer>
    </Container>
  );
}
