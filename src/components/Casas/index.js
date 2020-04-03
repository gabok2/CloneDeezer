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
  const [casa, setCasa] = useState([]);

  async function Casas() {
    const response = await api.get('/Casas');

    setCasa(response.data);
  }

  useEffect(() => {
    Casas();
  }, []);

  return (
    <Container>
      <Titulo>Como é bom estar em casa</Titulo>

      <FlatList
        data={casa}
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
