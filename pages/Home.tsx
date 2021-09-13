// @generated: @expo/next-adapter@2.1.52
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Card from "../src/components/card/card";
import { IPost } from "../src/types/post";
import Diviner from "../src/components/diviner/diviner";
import Wrapper from "../src/components/wrapper/wrapper";

export default function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        fetch('http://localhost:8082/feed')
            .then((response) => response.json())
            .then((response) => {

                setPosts(response.result);
            })
            .catch((error) => {
                console.error(error);
            });
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

const styles = StyleSheet.create({});
