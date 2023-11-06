import {StyleSheet, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
const WelcomeContainer = () => {
  return (
    <Container>
      <Text size={22} weight={600}>A joke a day keeps the doctor away</Text>
      <Text size={14} weight={600}>If you joke wrong way, your teeth have to pay. (Serious)</Text>
    </Container>
  );
};
const Container = styled.View`
  background-color: #2fb363;
  height: 160px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text<{size: number,weight: number}>`
  color: #ffff;
  text-align: center;
  padding : 15px 0px;
  font-weight: ${props=> props.weight};
  font-size: ${props => props.size}px;
`;
export default WelcomeContainer;
