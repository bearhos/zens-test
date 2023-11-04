import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSage";
import persistedRootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middleware = new MiddlewareArray().concat(
  sagaMiddleware
);

// if (__DEV__) {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const createDebugger = require('redux-flipper').default;

// }

// Create Store
const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Start rootSaga
sagaMiddleware.run(rootSaga);

// Setup Store persistence
const persistor = persistStore(store, null);

export {store, persistor};