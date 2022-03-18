import axios from 'axios';
import {Login_Sucess, Login_Fail} from './types';
import Toast from 'react-native-toast-message';

export const signIn = (email, password, navigation) => async dispatch => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      data: {
        email: email,
        password: password,
      },
    });
    if (res.data.token) {
      Toast.show({
        type: 'success',
        text1: 'Signed In Successfully',
      });
      dispatch({
        type: Login_Sucess,
        payload: res.data,
      });
      navigation.navigate('Home');
    }
  } catch (err) {
    console.log(err, 'ERROR');
    dispatch({
      type: Login_Fail,
    });
  }
};
