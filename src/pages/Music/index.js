import React from 'react';
import { YellowBox } from 'react-native';

import Header from '../../components/Header/header';
import Musica from '../../components/Música';
import Destaques from '../../components/Destaques';
import PlaylistReco from '../../components/PlaylistRecomendas';
import Genero from '../../components/Genero';
import Lancamentos from '../../components/Lançamentos';

import { Container } from './styles';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export default function Music() {
  return (
    <Container>
      <Header />
      <Musica />
      <Destaques />
      <PlaylistReco />
      <Genero />
      <Lancamentos />
    </Container>
  );
}
