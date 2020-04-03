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
  const [originals, setOriginals] = useState([]);

  async function Original() {
    const response = await api.get('/Originals');

    setOriginals(response.data);
  }

  useEffect(() => {
    Original();
  }, []);

  return (
    <Container>
      <Titulo>Deezer Originals</Titulo>

      <FlatList
        data={originals}
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
