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
  const [lancamento, setLancamento] = useState([]);

  async function Lancamentos() {
    const response = await api.get('/Lancamentos');

    setLancamento(response.data);
  }

  useEffect(() => {
    Lancamentos();
  }, []);

  return (
    <Container>
      <Titulo>Lançamentos recomendados</Titulo>

      <FlatList
        data={lancamento}
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
