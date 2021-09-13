// @generated: @expo/next-adapter@2.1.52
import React from "react";
import {StyleSheet, View, Text} from "react-native";
import IconButton from "../icon-button/icon-button";
import Wrapper from "../wrapper/wrapper";

const Header = () => {
    return <View style={styles.header}>
        <Wrapper>
            <View style={styles.info}>
                <IconButton name='menu-outline' onPress={() => ({})}/>
                <Text style={styles.logo}>POCKESPACE</Text>
                <View style={{ width: 24 }}/>
                {/*<IconButton name='message-circle-outline' onPress={() => ({})}/>*/}
            </View>
            <View></View>
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
        justifyContent: "space-between",
        width: '100%',
    },
    logo: {
        color: 'rgb(72, 72, 72)',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default Header;
