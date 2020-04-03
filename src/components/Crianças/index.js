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
  const [crianca, setCrianca] = useState([]);

  async function Criancas() {
    const response = await api.get('/Criancas');

    setCrianca(response.data);
  }

  useEffect(() => {
    Criancas();
  }, []);

  return (
    <Container>
      <Titulo>Para animar as crianças</Titulo>

      <FlatList
        data={crianca}
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
