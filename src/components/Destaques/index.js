import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Titulo,
  Container2,
  Imagem,
  Title,
  Description,
  Grup,
} from './styles';

export default function Destaques() {
  const [destaques, setDestaques] = useState([]);

  async function Destaque() {
    const response = await api.get('/Destaques');

    setDestaques(response.data);
  }

  useEffect(() => {
    Destaque();
  }, []);

  return (
    <Container>
      <Titulo>Destaques</Titulo>

      <FlatList
        data={destaques}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item }) => (
          <Container2>
            <Imagem resizeMode="contain" source={{ uri: item.image }} />
            <Grup>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Grup>
          </Container2>
        )}
      />
    </Container>
  );
}
