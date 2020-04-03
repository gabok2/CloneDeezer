import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import { Container, Titulo, Container2, Imagem, TituloImage } from './styles';

export default function Destaques() {
  const [mood, setMood] = useState([]);

  async function Moods() {
    const response = await api.get('/Moods');

    setMood(response.data);
  }

  useEffect(() => {
    Moods();
  }, []);

  return (
    <Container>
      <Titulo>Música por mood</Titulo>

      <FlatList
        data={mood}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item }) => (
          <Container2>
            <Imagem resizeMode="contain" source={{ uri: item.image }} />

            <TituloImage>{item.title}</TituloImage>
          </Container2>
        )}
      />
    </Container>
  );
}
