// src/store/rootReducer.js

import { combineReducers } from 'redux';
import { demoProject } from '../DemoStart/Demo.reducer';

const rootReducer = combineReducers({
  demoProject: demoProject
});

export default rootReducer;
