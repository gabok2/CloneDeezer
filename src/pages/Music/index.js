/* eslint-disable react/prop-types */
import React from 'react';
import { YellowBox } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import Musica from '../../components/Música';
import Destaques from '../../components/Destaques';
import PlaylistReco from '../../components/PlaylistRecomendas';
import Genero from '../../components/Genero';
import Lancamentos from '../../components/Lançamentos';
import Informce from '../../components/Informese';
import Casas from '../../components/Casas';
import Terapia from '../../components/Terapia';
import Crianças from '../../components/Crianças';
import Mood from '../../components/Mood';
import Populares from '../../components/Populares';
import MiasOuvidas from '../../components/MaisOuvidas';
import MiasOuvidos from '../../components/MaisOuvidos';
import Originals from '../../components/Originals';
import Tempo from '../../components/Tempos';

import { Container, Container2, Texto, Button1 } from './styles';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

// eslint-disable-next-line react/prop-types
export default function Music({ navigation }) {
  return (
    <Container>
      <Header
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#6068bf', '#4953b8'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      >
        <Container2>
          <Texto>Não tenha limites com Deezer Premium 3 meses grátis</Texto>
          <Button1 onPress={() => navigation.navigate('Carrosel')}>
            ASSINAR
          </Button1>
        </Container2>
      </Header>

      <Musica />
      <Destaques />
      <PlaylistReco />
      <Genero />
      <Lancamentos />
      <Informce />
      <Casas />
      <Terapia />
      <Crianças />
      <Mood />
      <Populares />
      <MiasOuvidas />
      <MiasOuvidos />
      <Originals />
      <Tempo />
    </Container>
  );
}
