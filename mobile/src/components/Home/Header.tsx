
import React from 'react'
import styled from 'styled-components/native';

 const WelcomeContainer = () => {
  return (
    <Container>
    <CompanyLogo resizeMode='contain' source={{uri: 'https://lh4.googleusercontent.com/kXVQo6_f2rRFS5rAyfQmP8YkV3GGAvNSqWBRIciUksq49eZjc_2--gE25PKuStg_vNM_j4JpGnSwfujse2L4le6Ixf7W3Jt_8dP8Ah5zfG-IZ7MQI2aAEuO3Woh0RviE3ius2Umis4YAfNOTNZ6LFnQ'}}></CompanyLogo>
    <RightHeaderContainer>
    <UserContainer>
    <GreyText>Handicrafted by</GreyText>
    <UserName>Jim HLS</UserName>
    </UserContainer>
    <UserImage resizeMode='cover' source={{uri: 'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg'}}></UserImage>
    </RightHeaderContainer>
  </Container>
  )
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffff;
    padding: 10px 5px;

`
const CompanyLogo = styled.Image`
    height: 70px;
    width: 70px;
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
    font-size: 17px;
    color: #969696;
    margin-bottom: 5px;
`;
const UserName = styled.Text`
    font-size: 17px;
    color: black;
`;
const UserImage = styled.Image`
    margin: 0px 5px;
    height: 70px;
    width: 70px;
    border-radius: 35px;
`;
export default WelcomeContainer;
