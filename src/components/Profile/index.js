import React from 'react';

import LeftColumn from '../RegisterForm/LeftColumn';
import RightColumn from '../RegisterForm/RightColumn';

import { Content, Flex, Title, RoundedImage, Button, Text } from '../Styled';

const getAgeByIndex = (index) => {
  let age = 13;

  if (index === 1) {
    age = 20;
  } else if (index === 1) {
    age = 30;
  } else if (index === 2) {
    age = 45;
  }

  return `mais de ${age} anos`;
};

const getInterests = (arr) => {
  if (arr.length > 1) {
    return `${arr.slice(0, -1).join(', ')} e ${arr.slice(-1)[0]}`;
  }
  return arr[0];
};

export default props => (
  <Content>
    {console.log('props', props)}
    <Flex height="100%">
      <LeftColumn>
        <RoundedImage src={props.data.profile_picture} size="150px" />
        <div style={{ marginTop: 30 }}>
          <Button onClick={props.onEdit}>
            Editar Foto / Perfil
          </Button>
        </div>
      </LeftColumn>
      <RightColumn>
        <Title>Seu perfil</Title>
        <Text>
          Eu sou o <b>{props.data.name}</b> <b>{props.data.surname}</b>, tenho <b>{getAgeByIndex(props.data.age)}</b> e você
          pode enviar e-mails para <b>{props.data.email}</b>. Eu moro no estado do <b>{props.data.state.estado}</b>. Eu gosto de <b>{getInterests(props.data.interests)}</b>.
          {props.data.receive_messages ? ' Por-favor me envie newsletters.' : ''} Para me contatar ligue no teletone <b>{props.data.phone}</b>.
        </Text>
        <div style={{ marginTop: 30 }}>
          <Button onClick={props.onConfirm}>Confirmar</Button>
        </div>
      </RightColumn>
    </Flex>
  </Content>
);
