import React from 'react';
import { View } from 'react-native';
import { LedsButton } from '../../components/Buttons';
import { Controller, Row } from './styles';

interface Props {
  }

export const MainScreen: React.FC<Props> = ({}) => {
    return (
        <Controller>
            <Row>
              <LedsButton url={"up"} color={"white"} icon={true} icon_name={"remove-outline"} />
              <LedsButton url={"down"} color={"white"} icon={true} icon_name={"add-outline"} />
              <LedsButton url={"off"} color={"black"} icon={false} label={"OFF"} label_color={"white"}/>
              <LedsButton url={"on"} color={"red"} icon={false} label={"ON"} label_color={"black"}/>
            </Row>
        </Controller>
      );
}