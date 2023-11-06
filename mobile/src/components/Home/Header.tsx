
import React from 'react'
import styled from 'styled-components/native';

 const WelcomeContainer = () => {
    const logo = require('../../assets/logocompany.png')
  return (
    <Container>
    <CompanyLogo resizeMode='center' source={logo}></CompanyLogo>
    <RightHeaderContainer>
    <UserContainer>
    <GreyText>Handicrafted by</GreyText>
    <UserName>Jim HLS</UserName>
    </UserContainer>
    <UserImage resizeMode='contain' source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQb2MUQarpkWqHVcKjApJ2iKJWLRuqWUDwwm8pbBzvBufTepPv8'}}></UserImage>
    </RightHeaderContainer>
  </Container>
  )
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffff;
    padding: 0px 19px;
    align-items: center;
    margin-bottom: 10px;

`
const CompanyLogo = styled.Image`
    height: 60px;
    width: 60px;
    margin-left: 10px;
`;
const RightHeaderContainer = styled.View`
    flex-direction: row;
    padding: 10px;
    align-items: center;
    `;
const UserContainer = styled.View`
    flex-direction: column;
   
    align-items: flex-end;

`;
const GreyText = styled.Text`
    font-size: 12px;
    color: #969696;
    margin-bottom: 5px;
`;
const UserName = styled.Text`
    font-size: 12px;
    color: black;
`;
const UserImage = styled.Image`
    margin: 0px 5px;
    height: 50px;
    width: 50px;
    border-radius: 35px;
`;
export default WelcomeContainer;
