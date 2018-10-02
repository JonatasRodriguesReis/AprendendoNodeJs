import {combineReducers} from 'redux';
import {reducerTeste} from './reducerTeste';

export const index = combineReducers({
    teste: reducerTeste
});