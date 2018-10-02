import {ADICIONAR,GETALL,REMOVER} from './types';
import axios from 'axios';

export const clickButton = post => ({
    type: ADICIONAR,
    post: post
});

export const createPost = (post) => {
    return (dispatch) => {
      return axios.post('/add', post)
        .then(response => {
          dispatch(createPostSuccess())
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const createPostSuccess =  () => {
    return (dispatch) => {
      return axios.get('/tasks')
        .then(response => {
          dispatch({
            type:ADICIONAR,
            posts : response.data 
          })
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const getAll =  () => {
    return (dispatch) => {
      return axios.get('/tasks')
        .then(response => {
          dispatch({
            type:GETALL,
            posts: response.data
          })
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const remover =  (id) => {
    return (dispatch) => {
      return axios.get('/remove/' + id)
        .then(response => {
          dispatch(getAll())
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  