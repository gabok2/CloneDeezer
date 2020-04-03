import React from 'react';

import { Container, Flow } from './styles';

export default function Flow1() {
  return (
    <Container>
      <Flow
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4896ab', '#c0729f', '#f2715c', '#f8a33d']}
      />
      ;
    </Container>
  );
}
