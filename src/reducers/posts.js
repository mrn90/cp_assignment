import {Get_Post, Create_Post} from '../actions/types';

const initalState = {
  posts: [],
  loading: true,
};

export default function (state = initalState, action) {
  const {type, payload} = action;
  switch (type) {
    case Get_Post:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case Create_Post:
      console.log(payload);
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    default:
      return state;
  }
}
