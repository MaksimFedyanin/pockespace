import React, {useEffect, useRef} from "react";
import { PopupContext, PopupMethods } from "./popup-host";
import PopupConsumer from "./popup-consumer";
import {StyleSheet, View, Animated, Easing, Pressable} from "react-native";

const Popup = ({ visible, onClose, children }) => {
    const animated = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            animated,
            {
                toValue: visible ? 1 : 0,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start();
        Animated.timing(
            opacity,
            {
                toValue: visible ? 1 : 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start();
    }, [visible]);

    const value = animated.interpolate({
        inputRange: [0, 1],
        outputRange: ['500%', '0%'],
    });

    return <PopupContext.Consumer>
        {(manager) => (
            <PopupConsumer manager={manager as PopupMethods}>
                {visible && <Pressable
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    onPress={onClose}
                >
                    <Animated.View style={[styles.popup, {opacity: opacity}]}>
                        <Animated.View style={{
                            width: '100%',
                            height: '100%',
                            transform: [{translateY: value}],
                        }}>
                            <View style={styles.content}>
                                {children}
                            </View>
                        </Animated.View>
                    </Animated.View>
                </Pressable>}
            </PopupConsumer>
        )}
    </PopupContext.Consumer>;
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
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    }
});

export default Popup;
