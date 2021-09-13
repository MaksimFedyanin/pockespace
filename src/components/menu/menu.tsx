// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import IconButton from "../icon-button/icon-button";
import Wrapper from "../wrapper/wrapper";

const Menu = () => {
    return <Wrapper>
        <View style={styles.menu}>
            <Text style={styles.logo}>POCKESPACE</Text>
            <View style={styles.items}>
                <Pressable style={styles.item} accessibilityRole="button">
                    <IconButton name='home-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                    <Text style={styles.title}>Home</Text>
                </Pressable>
                <Pressable style={styles.item} accessibilityRole="button">
                    <IconButton name='search-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                    <Text style={styles.title}>Search</Text>
                </Pressable>
                <Pressable style={styles.item} accessibilityRole="button">
                    <IconButton name='smartphone-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                    <Text style={styles.title}>Feed</Text>
                </Pressable>
                <Pressable style={styles.item} accessibilityRole="button">
                    <IconButton name='bell-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                    <Text style={styles.title}>Notification</Text>
                </Pressable>
                <Pressable style={styles.item} accessibilityRole="button">
                    <IconButton name='person-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                    <Text style={styles.title}>Profile</Text>
                </Pressable>
            </View>
        </View>
    </Wrapper>
};

const styles = StyleSheet.create({
    logo: {
        color: 'rgb(72, 72, 72)',
        fontSize: 16,
        fontWeight: 'bold',
    },
    menu: {
        justifyContent: "flex-start",
    },
    items: {
        marginTop: 40,
    },
    item: {
        flexDirection: "row",
        width: '100%',
        height: 40,
    },
    title: {
        marginLeft: 18,
    },
});

export default Menu;
