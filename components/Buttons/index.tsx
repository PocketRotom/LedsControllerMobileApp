import React from 'react';
import api from '../../services/api';
import {Button, Label} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  url: string;
  color: string;
}

const callAPI = async (url: string) => {
  return api.get(url).then((res: any) => {
    return res.data;
  });
};

export const LedsButton: React.FC<Props> = ({url, color}) => {
  return (
    <>
      <Button style={{backgroundColor: color}} onPress={() => callAPI(url)}>
        <Label>ON</Label>
      </Button>
      {/* <Icon name="heart-dislike-outline" size={45} color={'green'} /> */}
    </>
  );
};
