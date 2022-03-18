import {Login_Sucess, Login_Fail} from '../actions/types';

const initalState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initalState, action) {
  const {type, payload} = action;
  switch (type) {
    case Login_Sucess:
      console.log(payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload.token,
      };
    case Login_Fail:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
