import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface IPopupTitleProps {
  title: string;
}

const PopupTitle = ({ title }: IPopupTitleProps) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default PopupTitle;
