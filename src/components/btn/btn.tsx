// @generated: @expo/next-adapter@2.1.52
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  StyleSheet,
  PressableProps,
  Pressable,
  Text,
} from 'react-native';

const Btn = (props: PressableProps & { title: string }) => (
  <LinearGradient
    colors={['#4568DC', '#B06AB3']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.btn}
  >
    <Pressable {...props}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  </LinearGradient>
);

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginBottom: 15,
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Btn;
