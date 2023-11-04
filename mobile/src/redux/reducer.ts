
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MiddlewareArray, configureStore} from '@reduxjs/toolkit';
import {persistCombineReducers} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import JokeReducer, {Slice as JokeSlice} from './Joke/reducer';
const reducers = {

    JokeReducer: JokeReducer
};
type ReducerType = ReturnType<typeof rootReducer>;
type ReducerNameEnum = keyof ReducerType;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  blacklist: [
    // these reducer have filtering dont need to save persist
    'JokeReducer'
 
  ] as ReducerNameEnum[] as string[],
};
const sagaMiddleware = createSagaMiddleware();

const middlewareArray = new MiddlewareArray().concat(sagaMiddleware);

export const persistedRootReducer = persistCombineReducers(
  persistConfig,
  reducers,
);
export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: middlewareArray,
});
export type RootState = ReturnType<typeof persistedRootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default persistedRootReducer;