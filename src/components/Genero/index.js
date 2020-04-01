import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import { Container, Titulo, Container2, Imagem, TituloImage } from './styles';

export default function Destaques() {
  const [genero, setGenero] = useState([]);

  async function Generos() {
    const response = await api.get('/Generos');

    setGenero(response.data);
  }

  useEffect(() => {
    Generos();
  }, []);

  return (
    <Container>
      <Titulo>Música por gênero</Titulo>

      <FlatList
        data={genero}
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
