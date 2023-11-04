import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../reducer';
const data = [
  {
    id: 1,
    data: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."
        The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
        The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
  },
  {
    id: 2,
    data: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
  },
  {
    id: 3,
    data: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
  },
  {
    id: 4,
    data: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'`,
  },
  {
    id: 5,
    data: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
  },
];
export type JokeSeen = {
  data: string;
  id: number;
  like: boolean;
};
export type JokeDataType = {
    data: string;
    id: number;
   
  };
export interface SliceState {
  
  JokeData: JokeDataType[];
  JokeHaveSeen: JokeSeen[];
  done: boolean;
}
const initialState = {
  JokeData: data,
  JokeHaveSeen: [],
} as SliceState;
export const Slice = createSlice({
  name: 'Joke',
  initialState,
  reducers: {
   
    UpdateJokeData(state: SliceState, action: PayloadAction<JokeSeen>) {
      const jokeData = state.JokeHaveSeen;
      state.JokeHaveSeen = [...jokeData, action.payload];
    },
    
  },
});
export const {UpdateJokeData} = Slice.actions;
export const SelectJokeData = (state: RootState) => state.JokeReducer.JokeData;
export const SelectJokeSeen = (state: RootState) =>
  state.JokeReducer.JokeHaveSeen;

export default Slice.reducer;
