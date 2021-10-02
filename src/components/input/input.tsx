// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const Input = (props: TextInputProps) => <TextInput {...props} style={styles.input} />;

const styles = StyleSheet.create({
  input: {
    height: 70,
    marginBottom: 15,
    paddingHorizontal: 14,
    borderWidth: 2,
    borderColor: 'rgb(242, 242, 242)',
    borderRadius: 15,
  },
});

export default Input;
