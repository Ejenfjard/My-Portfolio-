/** @format */

import React from "react";
import styled from "styled-components";

const Attachments = () => {
  return (
    <Container>
      <Title>Ladda ner mina bilagor</Title>
      <List>
        <ListItem>
          <StyledLink href="/documents/cv.pdf" download>
            Ladda ner CV
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/documents/personligt-brev.pdf" download>
            Ladda ner Personligt Brev
          </StyledLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default Attachments;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  background: linear-gradient(
    to top,
    rgba(117, 111, 123, 0.1),
    rgba(170, 151, 186, 0.8)
  );
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #5e048b;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  margin: 10px 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d1cfcf;
  }
`;
