import {clickButton,createPost} from '../actions/actionTeste';
import {ADICIONAR, GETALL} from '../actions/types';

const initialState = {
    posts: [],
    post:''
};
  export const reducerTeste = (state = initialState, action) => {
    switch (action.type) {
      case ADICIONAR:
        return {
          ...state,
          posts: action.posts,
        };
      case GETALL:
        return {
          ...state,
          posts: action.posts
        };
      default:
        return state;
    }
  };