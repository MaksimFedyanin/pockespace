import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Pressable, Platform,
} from 'react-native';
import { useSetRecoilState } from 'recoil';
import Input from '../input/input';
import Btn from '../btn/btn';
import PopupTitle from './popup-title';
import PopupContent from './popup-content';
import { PopupState } from '../../state/popup';

const LoginPopup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showPopup = useSetRecoilState(PopupState);

  return (
    <View>
      <PopupTitle title="Sign in" />
      <PopupContent>
        <Input
          value={email}
          placeholder="email"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoFocus={Platform.OS !== 'web'}
          returnKeyType="next"
          onChangeText={setEmail}
        />
        <Input
          value={password}
          placeholder="password"
          secureTextEntry
          textContentType="newPassword"
          returnKeyType="next"
          onChangeText={setPassword}
        />
        <Btn title="Continue" onPress={() => ({})} />
      </PopupContent>
      <View style={styles.horizontalText}>
        <Text style={styles.title}>no account? </Text>
        <Pressable accessibilityRole="button" onPress={() => showPopup('registration')}>
          <Text style={styles.link}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalText: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4568DC',
  },
});

export default LoginPopup;
