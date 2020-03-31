import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Titulo,
  SubTitulo,
  Imagem,
  Descricao,
  Container2,
} from './styles';

export default function Música() {
  const [musica, setMusica] = useState([]);

  async function Musicas() {
    const response = await api.get('/Musica');

    setMusica(response.data);
  }

  useEffect(() => {
    Musicas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Titulo>Música</Titulo>
      <SubTitulo>Feito para você</SubTitulo>
      <FlatList
        data={musica}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Container2>
            <Imagem resizeMode="contain" source={{ uri: item.image }} />
            <Descricao>{item.description}</Descricao>
          </Container2>
        )}
      />
    </Container>
  );
}
