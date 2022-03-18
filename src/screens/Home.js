import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../actions/posts';
import Feather from 'react-native-vector-icons/Feather';

const Home = props => {
  const dispatch = useDispatch();
  let postData = useSelector(state => state.posts.posts);

  const getPostData = () => {
    dispatch(getPosts());
  };

  const renderData = ({item}) => (
    <View style={styles.postContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.post}>{item.id}.</Text>
        <Text style={styles.postTitle}>{item.title.toUpperCase()}</Text>
      </View>
      <Text style={styles.postBody}>{item.body}</Text>
    </View>
  );

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          onPress={props.navigation.goBack}
          name="arrow-left"
          size={32}
          color="black"
        />
        <Text style={styles.mainHeading}>POSTS</Text>
        <Feather
          onPress={() => props.navigation.navigate('NewPost')}
          name="plus"
          size={32}
          color="black"
        />
      </View>
      <FlatList data={postData} renderItem={renderData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  mainHeading: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  postContainer: {
    // backgroundColor: 'white',
    margin: 20,
    // padding: 15,
    alignItems: 'flex-start',
    borderRadius: 15,
    // elevation: 2,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    // marginBottom: 10,
  },
  post: {
    fontFamily: 'Roboto-Regular',
    marginRight: 2,
    textAlign: 'left',
  },
  postTitle: {
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: 'bold',
  },
  postBody: {
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
});

export default Home;
