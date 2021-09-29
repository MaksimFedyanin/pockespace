import React, { useEffect, useMemo, useRef } from "react";
import {StyleSheet, View, Animated, Pressable, TouchableOpacity} from "react-native";
import { PopupState, PopupType } from "../../state/popup";
import RegistrationPopup from "./registration-popup";
import { useRecoilState } from "recoil";

const getPopup = (type: PopupType) => {
    if (type === 'registration') {
        return RegistrationPopup;
    }

    return null;
}

const Popup = () => {
    const animated = useRef(new Animated.Value(0)).current;
    const animatedVisible = useRef(Animated.timing(
        animated,
        {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }
    ));
    const [popupType, setPopupType] = useRecoilState(PopupState);
    const Component = useMemo(() => getPopup(popupType), [popupType]);

    useEffect(() => {
        if (Component) {
            animatedVisible.current.start();
        } else {
            animatedVisible.current.reset();
        }
    }, [Component]);

    const value = animated.interpolate({
        inputRange: [0, 1],
        outputRange: ['500%', '0%'],
    });

    return !!Component && <Pressable
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
        }}
        accessibilityRole="button"
        onPress={() => setPopupType(null)}
    >
        <View style={styles.popup}>
            <Animated.View style={{
                width: '100%',
                height: '100%',
                transform: [{translateY: value}],
            }}>
                <TouchableOpacity style={styles.content} activeOpacity={1}>
                    <Component/>
                </TouchableOpacity>
            </Animated.View>
        </View>
    </Pressable>;
};

const styles = StyleSheet.create({
    popup: {
        position: "absolute",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    content: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        minHeight: 500,
        padding: 20,
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }
});

export default Popup;
