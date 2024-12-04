// src/store/sagas/exampleSaga.js

import { takeLatest, call, put } from 'redux-saga/effects';
import { storeApi } from './Demo.action';
import { GET_API } from './Demo.constant';

function getFetchData(data){
  return {method: "GET"}
}

function request(param, url) {
  return fetch(url, param).then((response) => response.json());
}

export function* fetchDataSaga() {
  const url = "https://dummyjson.com/todos?limit=10"
  try {
    const param = getFetchData()
   const apiresponse = yield call(request,param,url)
   console.log(apiresponse);
   
   yield put(storeApi(apiresponse?.todos))
  } catch (error) {
    console.log("lllllll");
    
  }
}

export function* watchExampleSaga() {
  yield takeLatest(GET_API, fetchDataSaga);
}
