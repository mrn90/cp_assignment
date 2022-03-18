import {Create_Post, Get_Post} from './types';
import axios from 'axios';

export const getPosts = () => async dispatch => {
  try {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      if (res.data.length) {
        dispatch({
          type: Get_Post,
          payload: res.data,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (id, title, desc, navigation) => async dispatch => {
  try {
    const data = {
      id: id,
      title: title,
      body: desc,
    };
    dispatch({
      type: Create_Post,
      payload: data,
    });
    navigation.navigate('Home');
  } catch (err) {
    console.log(err);
  }
};
