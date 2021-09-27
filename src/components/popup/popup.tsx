import React, { useEffect, useRef } from "react";
import { PopupContext, PopupMethods } from "./popup-host";
import PopupConsumer from "./popup-consumer";
import { StyleSheet, View, Animated, Pressable } from "react-native";

const Popup = ({ visible, onClose, children }) => {
    const animated = useRef(new Animated.Value(0)).current;
    const animatedVisible = useRef(Animated.timing(
        animated,
        {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }
    ));

    useEffect(() => {
        if (visible) {
            animatedVisible.current.start();
        } else {
            animatedVisible.current.reset();
        }
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
                    <View style={styles.popup}>
                        <Animated.View style={{
                            width: '100%',
                            height: '100%',
                            transform: [{translateY: value}],
                        }}>
                            <View style={styles.content}>
                                {children}
                            </View>
                        </Animated.View>
                    </View>
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
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }
});

export default Popup;
