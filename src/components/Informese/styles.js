import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  padding: 0 10px;
  position: relative;

  bottom: 90px;
`;

export const Titulo = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
`;

export const Container2 = styled.View`
  position: relative;
  top: 10px;
  padding: 10px;
  width: 120px;
`;

export const Imagem = styled.Image`
  position: relative;
  left: 20px;
  top: 22px;
  width: 60px;
  height: 60px;
`;

export const Background = styled.View`
  background-color: #403e3e;
  position: relative;
  border-radius: 25px;

  width: 100px;
  height: 100px;
`;

export const Play = styled(Icon)`
  position: relative;
  right: 12px;
  width: 52px;
`;

export const BackgroundPlay = styled.View`
  left: 22px;
  width: 8px;
  border-radius: 10px;
  background-color: #111;
  position: relative;
`;
