// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

const Input = (props: TextInputProps) => {
    return <TextInput {...props} style={styles.input}/>;
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: 'rgb(242, 242, 242)',
        borderRadius: 15,
    },
});

export default Input;
