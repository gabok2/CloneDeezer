import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  margin-top: 70px;
  padding: 0 20px;
  flex: 1;
`;
export const Container2 = styled.View`
  flex-direction: row;
`;
export const Titulo = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;
export const SubTitulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 15px;
`;
export const Imagem = styled.Image`
  margin-top: 15px;

  height: 150px;
  border-radius: 5px;
`;
export const Descricao = styled.Text`
  font-size: 12px;
  margin-top: 7px;
  width: 150px;

  color: #999;
`;

export const DescricaoFlow = styled.Text`
  font-size: 12px;
  margin-top: 7px;
  width: 150px;
  position: relative;
  bottom: 29px;

  color: #999;
`;

export const Flow = styled(LinearGradient)`
  margin-top: 15px;
  width: 150px;
  margin-right: 15px;
  height: 150px;
  border-radius: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
export const Colum = styled.View`
  flex-direction: column;
`;

export const TextoFlow = styled.Text`
  color: #fff;
  position: relative;
  bottom: 145px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

export const Play = styled(Icon)`
  position: relative;
  bottom: 12px;
  right: 5px;
  width: 52px;
`;

export const Background = styled.View`
  width: 32px;

  height: 27px;
  background-color: #111;
  position: relative;
  bottom: 160px;
  left: 55px;
`;
export const Background2 = styled.View`
  width: 32px;

  height: 27px;
  background-color: #111;
  position: relative;
  bottom: 150px;
  left: 55px;
`;
