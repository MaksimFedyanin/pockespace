// @generated: @expo/next-adapter@2.1.52
import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Wrapper from "../wrapper/wrapper";

const Header = ({ onLayout = () => ({}) }) => {
    return <View style={styles.header} onLayout={onLayout}>
        <Wrapper>
            <View style={styles.info}>
                {/*<IconButton name='menu-outline' onPress={() => ({})}/>*/}
                <Text style={styles.logo}>POCKESPACE</Text>
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
        color: 'rgb(72, 72, 72)',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default Header;
