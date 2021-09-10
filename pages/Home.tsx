// @generated: @expo/next-adapter@2.1.52
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, VirtualizedList} from 'react-native';
import Card from "../src/components/card/card";
import { IPost } from "../src/types/post";

const getItem = (posts: IPost[], index: number) => {
    return {
        id: index,
        post: posts[index],
    };
};

export default function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        fetch('http://localhost:8082/feed/')
            .then((response) => response.json())
            .then((response) => {

                setPosts(response.result);
            });
    }, []);

    return (
        <View style={{ padding: 16 }}>
            <SafeAreaView>
                <VirtualizedList
                    data={posts}
                    initialNumToRender={4}
                    renderItem={({ item }) => <Card post={item.post} />}
                    keyExtractor={item => item.id + ''}
                    getItemCount={(data) => data.length}
                    getItem={getItem}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({});
