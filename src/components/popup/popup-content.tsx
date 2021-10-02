import React from 'react';
import { StyleSheet, View } from 'react-native';

const PopupContent = ({ children }) => <View style={styles.content}>{children}</View>;

const styles = StyleSheet.create({
  content: {
    marginVertical: 24,
  },
});

export default PopupContent;
