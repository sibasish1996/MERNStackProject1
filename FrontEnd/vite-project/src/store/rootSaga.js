// src/store/rootSaga.js

import { all } from 'redux-saga/effects';
import { watchExampleSaga } from '../DemoStart/Demo.sga';


export default function* rootSaga() {
  yield all([
    watchExampleSaga(),
  ]);
}
