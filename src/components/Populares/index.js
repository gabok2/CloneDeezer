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
  const [populares, setPopulares] = useState([]);

  async function Popular() {
    const response = await api.get('/Populares');

    setPopulares(response.data);
  }

  useEffect(() => {
    Popular();
  }, []);

  return (
    <Container>
      <Titulo>Playlists populares</Titulo>

      <FlatList
        data={populares}
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
