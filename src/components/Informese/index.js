import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Titulo,
  Container2,
  Imagem,
  Background,
  BackgroundPlay,
  Play,
} from './styles';

export default function Destaques() {
  const [informe, setInforme] = useState([]);

  async function Informse() {
    const response = await api.get('/Informeses');

    setInforme(response.data);
  }

  useEffect(() => {
    Informse();
  }, []);

  return (
    <Container>
      <Titulo>Informe-se 24 horas por dia</Titulo>

      <FlatList
        data={informe}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item }) => (
          <Container2>
            <Background>
              <Imagem resizeMode="contain" source={{ uri: item.image }} />
              <BackgroundPlay>
                <Play size={30} name="play" color="#fff" />
              </BackgroundPlay>
            </Background>
          </Container2>
        )}
      />
    </Container>
  );
}
