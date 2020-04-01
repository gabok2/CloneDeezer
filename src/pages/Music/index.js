import React from 'react';
import { YellowBox } from 'react-native';

import Musica from '../../components/Música';
import Destaques from '../../components/Destaques';

import { Container } from './styles';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export default function Music() {
  return (
    <Container>
      <Musica />
      <Destaques />
    </Container>
  );
}
