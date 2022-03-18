import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import {signIn} from '../actions/auth';
// import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';

const SignIn = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [loader, setLoader] = useState(false);

  const loginUser = () => {
    setLoader(true);
    if (validate(email, password) && email.length > 0 && password.length > 0) {
      userLogin();
      setLoader(false);
    } else {
      if (Platform.OS == 'android') {
        ToastAndroid.show('Enter all fields', ToastAndroid.LONG);
      }
      setLoader(false);
    }
  };

  const validate = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const userLogin = () => {
    dispatch(signIn(email, password, props.navigation));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          height: 366,
          width: '98%',
          borderRadius: 44,
          zIndex: 3,
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          elevation: 5,
        }}>
        <View style={{width: '100%'}}>
          <Text style={styles.subHeading}>Welcome</Text>
        </View>
        <View style={{padding: 15, marginTop: '25%'}}>
          <View>
            <TextInput
              placeholder="Email Address"
              value={email}
              onChangeText={email => setEmail(email)}
              style={{
                borderWidth: 0.2,
                borderColor: 'black',
                borderRadius: 7,
                backgroundColor: 'white',
                // margin: 20,
                justifyContent: 'flex-start',
                fontSize: 16,
                color: 'grey',
                fontFamily: 'Roboto-Regular',
              }}
              underlineColor="grey"
              activeOutlineColor="black"
              selectionColor="black"
              activeUnderlineColor="black"
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={password => setPassword(password)}
              style={{
                backgroundColor: 'white',
                // margin: 20,
                marginTop: 10,
                borderWidth: 0.2,
                borderRadius: 7,
                justifyContent: 'flex-start',
                fontSize: 16,
                color: 'grey',
              }}
              activeOutlineColor="black"
              selectionColor="black"
              secureTextEntry={true}
            />
          </View>
        </View>
        {loader ? (
          <ActivityIndicator size={'small'} color={'black'} />
        ) : (
          <Text style={styles.loginButtonText}>SIGN IN</Text>
        )}
        <TouchableOpacity onPress={loginUser} style={styles.loginButton}>
          {loader ? (
            <ActivityIndicator size={'small'} color={'white'} />
          ) : (
            <Text style={styles.loginButtonText}>SIGN IN</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  loginHeading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
  },
  loginStyle: {
    backgroundColor: 'black',
    width: 40,
    marginTop: 5,
  },
  mainHeading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
  },
  subHeading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 45,
    borderRadius: 100,
    backgroundColor: '#6FBE44',
    fontFamily: 'Roboto-Regular',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});

export default SignIn;
