import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Titulo,
  Container2,
  Imagem,
  TitleAdriana,
  DescriptionAdriana,
  Grup,
  SubTituloAdriana,
  SubTituloAdriana2,
  TitleCov,
  DescriptionCov,
  SubTituloCov,
  SubTituloCov2,
  TitleLima,
  DescriptionLima,
  SubTituloLima,
  TitleCasa,
  DescriptionCasa,
  SubTituloCasa,
  SubTituloCasa2,
  SubTituloCasa3,
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
            <Imagem resizeMode="contain" source={{ uri: item.image }}>
              <Grup>
                <TitleAdriana>{item.titleAdriana}</TitleAdriana>
                <DescriptionAdriana>
                  {item.descriptionAdriana}
                </DescriptionAdriana>
                <SubTituloAdriana>{item.testeAdriana}</SubTituloAdriana>
                <SubTituloAdriana2>{item.testeAdriana2}</SubTituloAdriana2>

                <TitleCov>{item.titleCov}</TitleCov>
                <DescriptionCov>{item.descriptionCov}</DescriptionCov>
                <SubTituloCov>{item.testeCov}</SubTituloCov>
                <SubTituloCov2>{item.testeCov2}</SubTituloCov2>

                <TitleLima>{item.titleLima}</TitleLima>
                <DescriptionLima>{item.descriptionLima}</DescriptionLima>
                <SubTituloLima>{item.testeLima}</SubTituloLima>

                <TitleCasa>{item.titleCasa}</TitleCasa>
                <DescriptionCasa>{item.descriptionCasa}</DescriptionCasa>
                <SubTituloCasa>{item.testeCasa}</SubTituloCasa>
                <SubTituloCasa2>{item.testeCasa2}</SubTituloCasa2>
                <SubTituloCasa3>{item.testeCasa3}</SubTituloCasa3>
              </Grup>
            </Imagem>
          </Container2>
        )}
      />
    </Container>
  );
}
