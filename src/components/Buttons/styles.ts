import styled from "styled-components/native";

import IconNative from 'react-native-vector-icons/Ionicons';

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;  
  border-radius: 25px;
  border: 1px solid black;
  justify-content: center;
`;

export const Label = styled.Text`
  text-align: center;
  font-size: 25px;
`;

export const Icon = styled(IconNative)`
  text-align: center;
`;