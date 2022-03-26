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
              <LedsButton url={"down"} color={"white"} icon={true} icon_name={"remove-outline"} />
              <LedsButton url={"up"} color={"white"} icon={true} icon_name={"add-outline"} />
              <LedsButton url={"off"} color={"black"} icon={false} label={"OFF"} label_color={"white"}/>
              <LedsButton url={"on"} color={"red"} icon={false} label={"ON"} label_color={"black"}/>
            </Row>
            <Row>
              <LedsButton url={"red1"} color={"#DB1109"} icon={false} label={"R1"} label_color={"black"} />
              <LedsButton url={"green1"} color={"#1B682A"} icon={false} label={"G1"} label_color={"black"} />
              <LedsButton url={"blue1"} color={"#1B4499"} icon={false} label={"B1"} label_color={"black"}/>
              <LedsButton url={"white"} color={"white"} icon={false} label={"W"} label_color={"black"}/>
            </Row>
            <Row>
              <LedsButton url={"red2"} color={"#E93A01"} icon={false} label={"R2"} label_color={"black"} />
              <LedsButton url={"green2"} color={"#258526"} icon={false} label={"G2"} label_color={"black"} />
              <LedsButton url={"blue2"} color={"#2C74C8"} icon={false} label={"B2"} label_color={"black"}/>
              <LedsButton url={"flash"} color={"grey"} icon={false} label={"Flash"} label_color={"black"}/>
            </Row>
            <Row>
              <LedsButton url={"red3"} color={"#EF6A04"} icon={false} label={"R3"} label_color={"black"} />
              <LedsButton url={"green3"} color={"#3CADCB"} icon={false} label={"G3"} label_color={"black"} />
              <LedsButton url={"blue3"} color={"#41165E"} icon={false} label={"B3"} label_color={"black"}/>
              <LedsButton url={"strobe"} color={"grey"} icon={false} label={"Strobe"} label_color={"black"}/>
            </Row>
            <Row>
              <LedsButton url={"red4"} color={"#F6BA0E"} icon={false} label={"R4"} label_color={"black"} />
              <LedsButton url={"green4"} color={"#3193AE"} icon={false} label={"G4"} label_color={"black"} />
              <LedsButton url={"blue4"} color={"#7F1A66"} icon={false} label={"B4"} label_color={"black"}/>
              <LedsButton url={"fade"} color={"grey"} icon={false} label={"Fade"} label_color={"black"}/>
            </Row>
            <Row>
              <LedsButton url={"red5"} color={"#FBE113"} icon={false} label={"R5"} label_color={"black"} />
              <LedsButton url={"green5"} color={"#226F79"} icon={false} label={"G5"} label_color={"black"} />
              <LedsButton url={"blue5"} color={"#E93F7E"} icon={false} label={"B5"} label_color={"black"}/>
              <LedsButton url={"smooth"} color={"grey"} icon={false} label={"Smooth"} label_color={"black"}/>
            </Row>
        </Controller>
      );
}