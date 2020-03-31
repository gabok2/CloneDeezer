import React from 'react';

import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import { Container, Texto, Button1 } from './styles';

export default function components() {
  return (
    <Header
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ['#6068bf', '#4953b8'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
    >
      <Container>
        <Texto>Não tenha limites com Deezer Premium 3 meses grátis</Texto>
        <Button1>ASSINAR</Button1>
      </Container>
    </Header>
  );
}
