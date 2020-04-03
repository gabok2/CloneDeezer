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
  const [ouvidos, setOuvidos] = useState([]);

  async function Ouvido() {
    const response = await api.get('/Ouvidos');

    setOuvidos(response.data);
  }

  useEffect(() => {
    Ouvido();
  }, []);

  return (
    <Container>
      <Titulo>Albuns mais ouvidos</Titulo>

      <FlatList
        data={ouvidos}
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
