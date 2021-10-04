// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import Card from '../src/components/card/card';
import Diviner from '../src/components/diviner/diviner';
import Wrapper from '../src/components/wrapper/wrapper';
import { getPosts } from '../api/feed';
import { PostsState } from '../src/state/posts';
import { RouterState } from '../src/state/router';

export default function Home() {
  const [posts, setPosts] = useRecoilState(PostsState);
  const router = useRecoilValue(RouterState);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();

        setPosts(response.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Wrapper>
          <Card post={item} />
        </Wrapper>
      )}
      ItemSeparatorComponent={() => <Diviner />}
      keyExtractor={(item) => item.title}
    />
  );
}
