import { ForkEffect, call, put, takeLatest, select } from "redux-saga/effects";
import { GetJokeData, JokeSeen, SelectJoke, SelectJokeSeen, UpdateJokeData, UpdateJokeStatus } from "./reducer";
import { PayloadAction } from "@reduxjs/toolkit";
function* jokeSaga({payload}: PayloadAction<JokeSeen>): any {
    const jokeSeen = yield select(SelectJokeSeen);
    const jokeData = yield select (SelectJoke);
    // if (jokeSeen.length >= jokeData.length){
    //  console.log('hahah')
    // }

}
export default function* (): Generator<ForkEffect<never>, void> {
    // yield takeLatest(UpdateJokeData.type, jokeSaga);
  }