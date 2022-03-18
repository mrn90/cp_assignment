import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createPost} from '../actions/posts';

const NewPost = props => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  let postData = useSelector(state => state.posts.posts);

  const createPosts = () => {
    dispatch(
      createPost(postData.length + 1, title, description, props.navigation),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainHeading}>CREATE POSTS</Text>
        <Text></Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{backgroundColor: 'white', borderRadius: 7}}
            mode="outlined"
            label={'Post Title'}
            value={title}
            onChangeText={title => setTitle(title)}
            placeholder={'Title'}
            activeOutlineColor="grey"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{backgroundColor: 'white', borderRadius: 7}}
            mode="outlined"
            label={'Post Description'}
            value={description}
            onChangeText={description => setDescription(description)}
            placeholder={'Description'}
            activeOutlineColor="grey"
            multiline={true}
            numberOfLines={4}
            theme={{fonts: {regular: {fontFamily: 'Roboto-Regular'}}}}
          />
        </View>
        <TouchableOpacity
          onPress={() => createPosts()}
          style={styles.postButton}>
          <Text style={styles.btnTxt}>POST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Math.round(Dimensions.get('window').height),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  mainHeading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    fontWeight: 'normal',
    margin: 10,
  },
  inputContainer: {
    margin: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  postButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 45,
    borderRadius: 100,
    backgroundColor: '#6FBE44',
    fontFamily: 'Roboto-Regular',
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});

export default NewPost;
