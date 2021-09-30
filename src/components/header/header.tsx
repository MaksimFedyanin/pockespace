// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Wrapper from "../wrapper/wrapper";

const Header = ({ onLayout = () => ({}) }) => {
    return <View style={styles.header} onLayout={onLayout}>
        <Wrapper>
            <View style={styles.info}>
                {/*<IconButton name='menu-outline' onPress={() => ({})}/>*/}
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://see.fontimg.com/api/renderfont4/DO3zx/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/QnJlYWtpbmcgU3BhY2U/magland.png',
                    }}
                    resizeMode="contain"
                />
                {/*<IconButton name='message-circle-outline' onPress={() => ({})}/>*/}
            </View>
            <View/>
        </Wrapper>
    </View>;
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 75,
    },
    info: {
        flexDirection: "row",
        justifyContent: "center",
        width: '100%',
    },
    logo: {
        width: 200,
        height: 40,
    }
});

export default Header;
