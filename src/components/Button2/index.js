import React from 'react';

import { Container, Text } from './styles';

// eslint-disable-next-line react/prop-types
export default function Button({ children, color, ...rest }) {
  return (
    <Container color={color} {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}
