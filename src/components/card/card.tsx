import React, { useState } from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import { IPost } from '../../types/post';
import IconButton from '../icon-button/icon-button';
import PockeSpaceLink from '../link/link';

const Card = ({ post }: { post: IPost }) => {
  const [isActiveLike, setActiveLike] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.user}>
          <View style={styles.avatar}>
            <Image
              style={styles.userImage}
              source={{
                uri: post.avatar,
              }}
            />
          </View>
          <PockeSpaceLink href={`/post/${post.title}`}>
            <View style={styles.info}>
              <Text style={styles.name}>{post.space}</Text>
              <Text style={styles.date}>{post.publicationDate}</Text>
            </View>
          </PockeSpaceLink>
        </View>
        <IconButton name="more-horizontal-outline" onPress={() => ({})} />
      </View>
      <View style={styles.content}>
        {/* {post.image && <Image style={styles.image} source={{uri: post.image}}/>} */}
        <Text style={styles.description}>{post.description}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <IconButton
            name={`heart${!isActiveLike ? '-outline' : ''}`}
            fill={isActiveLike ? '#D31027' : 'black'}
            onPress={() => {
              setActiveLike((value) => !value);
            }}
          />
        </View>
        <View style={styles.button}>
          <IconButton name="message-circle-outline" onPress={() => ({})} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  info: {
    marginLeft: 8,
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  name: {
    marginLeft: 6,
    color: 'rgb(72, 72, 72)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  date: {
    marginLeft: 6,
    color: 'rgb(195, 195, 195)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: -28,
  },
  description: {
    paddingHorizontal: 28,
    color: 'rgb(96, 96, 96)',
  },
  image: {
    width: 144,
    height: 144,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    marginRight: 16,
  },
});

export default Card;
