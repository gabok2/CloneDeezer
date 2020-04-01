import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Titulo,
  SubTitulo,
  Imagem,
  Descricao,
  DescricaoFlow,
  Container2,
  Flow,
  Colum,
  TextoFlow,
  Play,
  Background,
  Background2,
} from './styles';

export default function Música() {
  const [musica, setMusica] = useState([]);

  async function Musicas() {
    const response = await api.get('/Musica');

    setMusica(response.data);
  }

  useEffect(() => {
    Musicas();
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
            <Colum>
              <Flow
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#4896ab', '#c0729f', '#f2715c', '#f8a33d']}
              />
              <TextoFlow>flow</TextoFlow>
              <DescricaoFlow>
                Um mix infinito de faixas mais queridas e novas
              </DescricaoFlow>
              <Background>
                <Play size={50} name="play" color="#fff" />
              </Background>
            </Colum>
            <Colum>
              <Imagem resizeMode="contain" source={{ uri: item.image }} />
              <Descricao>{item.description}</Descricao>
              <Background2>
                <Play size={50} name="play" color="#fff" />
              </Background2>
            </Colum>
          </Container2>
        )}
      />
    </Container>
  );
}
