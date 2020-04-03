import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  position: relative;
  bottom: 335px;
  left: 20px;
  width: 270px;
  height: 50px;
  border-radius: 26px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin-left: 20px;
  margin-top: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
