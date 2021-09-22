// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import Card from "../src/components/card/card";
import Diviner from "../src/components/diviner/diviner";
import Wrapper from "../src/components/wrapper/wrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from '../src/redux/appReducer';
import { getPosts } from "../api/feed";
import { FEED_ACTIONS } from "../src/redux/feed-slice";

export default function Home() {
    const posts = useSelector((state: AppState) => state.feed.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();

                dispatch(FEED_ACTIONS.setPosts(response.result));
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <Wrapper>
                <Card post={item} />
            </Wrapper>}
            ItemSeparatorComponent={() => <Diviner/>}
            keyExtractor={item => item.title}
        />
    );
}
