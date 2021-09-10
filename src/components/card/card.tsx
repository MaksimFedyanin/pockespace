import React, {useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {IPost} from "../../types/post";

const Card = ({ post }: { post: IPost }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <View style={styles.avatar}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: post.avatar,
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.name}>{post.space}</Text>
                        {/*<Text style={styles.authors}>{(post.authors || []).join(', ')}</Text>*/}
                    </View>
                </View>
            </View>
            <View>
                <Text>{post.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        justifyContent: "space-between",
    },
    user: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    name: {
        marginLeft: 6,
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    authors: {
        marginLeft: 6,
        color: 'gray',
        fontSize: 10,
    },
});

export default Card;
