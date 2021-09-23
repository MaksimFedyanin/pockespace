import React, {useRef} from "react";
import { PopupContext, PopupMethods } from "./popup-host";
import PopupConsumer from "./popup-consumer";
import { StyleSheet, View, Animated } from "react-native";

const Popup = ({ visible, children }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    return <PopupContext.Consumer>
        {(manager) => (
            <PopupConsumer manager={manager as PopupMethods}>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <View style={styles.popup}>
                        <View style={styles.content}>
                            {children}
                        </View>
                    </View>
                </Animated.View>
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
        width: '100%',
        minHeight: 500,
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    }
});

export default Popup;
