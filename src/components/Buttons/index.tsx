import React from 'react';
import api from '../../../services/api';
import {Button, Label, Icon} from './styles';

interface Props {
  url: string;
  color: string;
  icon: boolean;
  icon_name?: string;
  label?: string;
  label_color?: string;
}

const callAPI = async (url: string) => {
  return api.get(url).then((res: any) => {
    return res.data;
  });
};

export const LedsButton: React.FC<Props> = ({url, color, icon, icon_name, label, label_color}) => {

  let font_size =  20;
  if (label?.length > 4) {
    font_size = 13;
  }

  return (
    <>
      <Button style={{backgroundColor: color}} onPress={() => callAPI(url)}>
          {icon && <Icon name={icon_name} size={30} color={'black'} />}
          {!icon &&  <Label style={{color: label_color, fontSize: font_size}}>{label}</Label>}
      </Button>
      {/* <Icon name="heart-dislike-outline" size={45} color={'green'} /> */}
    </>
  );
};
