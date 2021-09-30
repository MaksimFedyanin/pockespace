// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../icon-button/icon-button";
import Wrapper from "../wrapper/wrapper";
import { useSetRecoilState } from "recoil";
import { PopupState } from "../../state/popup";

const Tabs = ({ onLayout = () => ({}) }) => {
    const showPopup = useSetRecoilState(PopupState);

    return <View onLayout={onLayout}>
        <Wrapper>
            <View style={styles.tabs}>
                <IconButton name='home-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                <IconButton name='search-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                <IconButton name='smartphone-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                <IconButton name='bell-outline' fill="rgb(144, 144, 144)" onPress={() => ({})}/>
                <IconButton name='person-outline' fill="rgb(144, 144, 144)" onPress={() => showPopup('registration')}/>
            </View>
        </Wrapper>
    </View>;
};

const styles = StyleSheet.create({
    tabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
    }
});

export default Tabs;
