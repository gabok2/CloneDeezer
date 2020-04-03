import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Titulo,
  Container2,
  Imagem,
  TituloImage,
  SubTitulo,
} from './styles';

export default function Destaques() {
  const [terapia, setTerapia] = useState([]);

  async function Musical() {
    const response = await api.get('/Terapias');

    setTerapia(response.data);
  }

  useEffect(() => {
    Musical();
  }, []);

  return (
    <Container>
      <Titulo>Sua terapia musical</Titulo>

      <FlatList
        data={terapia}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item }) => (
          <Container2>
            <Imagem resizeMode="contain" source={{ uri: item.image }} />

            <TituloImage>{item.title}</TituloImage>
            <SubTitulo>{item.description}</SubTitulo>
          </Container2>
        )}
      />
    </Container>
  );
}
