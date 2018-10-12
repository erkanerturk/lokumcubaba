import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

const SuccessPage = () => {
  return (
    <Container textAlign="center">
      <Divider />
      <Header as="h1" inverted color="orange">
        Kayıt işlemi tamamlandı
      </Header>
      <Divider />
    </Container>
  );
};

export default SuccessPage;
