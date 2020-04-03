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
  const [ouvidas, setOuvidas] = useState([]);

  async function Ouvida() {
    const response = await api.get('/Ouvidas');

    setOuvidas(response.data);
  }

  useEffect(() => {
    Ouvida();
  }, []);

  return (
    <Container>
      <Titulo>Mais ouvidas</Titulo>

      <FlatList
        data={ouvidas}
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
