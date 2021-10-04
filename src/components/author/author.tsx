import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import PockeSpaceLink from '../link/link';
import IconButton from '../icon-button/icon-button';

const Author = ({
  id,
  title,
  avatar,
  space,
  publicationDate,
}) => (
  <View style={styles.author}>
    <View style={styles.user}>
      <View style={styles.avatar}>
        <Image
          style={styles.userImage}
          source={{
            uri: avatar,
          }}
        />
      </View>
      <PockeSpaceLink href={`/post/${id}`}>
        <View style={styles.info}>
          <Text style={styles.name}>{space}</Text>
          <Text style={styles.date}>{publicationDate}</Text>
        </View>
      </PockeSpaceLink>
    </View>
    <IconButton name="more-horizontal-outline" onPress={() => ({})} />
  </View>
);

const styles = StyleSheet.create({
  author: {
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
});

export default Author;
