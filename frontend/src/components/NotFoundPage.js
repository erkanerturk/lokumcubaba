import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

const NotFoundPage = () => {
  return (
    <Container textAlign="center">
      <Divider />
      <Header as="h1" inverted color="orange">
        404
      </Header>
      <Divider />
    </Container>
  );
};

export default NotFoundPage;
