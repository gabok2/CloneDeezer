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
  const [tempos, setTempos] = useState([]);

  async function Tempo() {
    const response = await api.get('/Tempos');

    setTempos(response.data);
  }

  useEffect(() => {
    Tempo();
  }, []);

  return (
    <Container>
      <Titulo>Os velhos tempos</Titulo>

      <FlatList
        data={tempos}
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
