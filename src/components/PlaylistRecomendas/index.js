import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Titulo,
  Container2,
  Imagem,
  Colum,
  TituloImage,
} from './styles';

export default function PlaylistRecomendas() {
  const [recomendadas, setRecomendadas] = useState([]);

  async function Playlist() {
    const response = await api.get('/PlaylistsRecomendadas');

    setRecomendadas(response.data);
  }

  useEffect(() => {
    Playlist();
  }, []);

  return (
    <Container>
      <Titulo>Playlists recomendadas</Titulo>
      <FlatList
        data={recomendadas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Container2>
            <Colum>
              <Imagem resizeMode="contain" source={{ uri: item.image }} />
              <TituloImage>{item.title}</TituloImage>
            </Colum>
          </Container2>
        )}
      />
    </Container>
  );
}
