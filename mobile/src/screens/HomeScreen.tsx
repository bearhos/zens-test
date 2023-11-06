import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import WelcomeContainer from '../components/Home/WelcomeContainer';
import Header from '../components/Home/Header';
import {

  SelectJokeData,
  SelectJokeSeen,
 
  UpdateJokeData,
} from '../redux/Joke/reducer';
import {useAppDispatch, useAppSelector} from '../redux/hook';
const HomeScreen = () => {
    const jokeData = useAppSelector(SelectJokeData);
  const [joke, setJoke] = useState(jokeData[0]?? null)
  const jokeSeen = useAppSelector(SelectJokeSeen);

  const dispatch = useAppDispatch();
  const getNextJoke = () => {
    // Replace this logic with fetching a joke from your database
    const nextIndex = jokeData.indexOf(joke) + 1;
    if (nextIndex < jokeData.length) {
        setJoke(jokeData[nextIndex]);
    } else {
        setJoke(null); // No more jokes
    }
  };
  const onPressButton = useCallback((like: boolean) => {
    
    dispatch(
      UpdateJokeData({
        id:joke.id,
        data: joke.data,
        like,
      }),
    );
    getNextJoke();
  }, [joke]);

  return (
    <Container>
      <Header />
      <WelcomeContainer />
      <ContentContainer>
        <ContentText>{joke !== null ? joke.data : `That's all the jokes for today! Come back another day!`}</ContentText>
        <ButtonContainer>
          <Button onPress={()=>joke !== null ?onPressButton(true): {}} backgroundColor={'#2C7EDB'}>
            <ButtonText >
              This is Funny!
            </ButtonText>
          </Button>
          <Button onPress={()=>joke !== null ?onPressButton(false): {}} backgroundColor={'#2FB363'}>
            <ButtonText >
              This is not funny.
            </ButtonText>
          </Button>
        </ButtonContainer>
      </ContentContainer>
      <CoppyRight>
        <CoppyRightText>
          This app is created as part of HIsolutions program. The material icon
          on this website are provide for general infomation only and do not
          consitute any from of advice, HLS assumes no responsiblity for the
          accurary of any particular statement and accpets no liability for any
          loss or damage which arise from reliance on the infomation
        </CoppyRightText>
        <CoppyRightTextCompany>
          Copyright 2021 HLS
        </CoppyRightTextCompany>
      </CoppyRight>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
`;
const ContentContainer = styled.View`
  padding: 20px 20px;
  justify-content: space-between;
  flex: 1;
`;
const ContentText = styled.Text`
  color: #4b4b4b;
  font-size: 16px;
  margin-top : 40px;
  line-height: 22px;
  text-align: left ;
`;
const ButtonContainer = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: space-around;
`;
const Button = styled.TouchableOpacity<{backgroundColor: string}>`
  height: 40px;
  width: 150px;
  justify-content: center;
  align-items: center;
  
  padding: 0px 7px;
  background-color: ${props => props.backgroundColor};
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: 600;
`;
const CoppyRight = styled.View`
  flex: 0.3;
  border-top-width: 1;
  border-color: #e1dfdf;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;
const CoppyRightText = styled.Text`
  color: #909090;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;
const CoppyRightTextCompany = styled.Text`
  color: #4b4b4b;
  margin-top: 10px;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
`;
export default HomeScreen;
