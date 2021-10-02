import React, { useEffect, useMemo, useRef } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Pressable,
  Platform,
  Keyboard,
  KeyboardAvoidingView, TouchableOpacity,
} from 'react-native';
import { useRecoilState } from 'recoil';
import { PopupState, PopupType } from '../../state/popup';
import RegistrationPopup from './registration-popup';
import LoginPopup from './login-popup';
import IconButton from '../icon-button/icon-button';

const getPopup = (type: PopupType) => {
  if (type === 'registration') {
    return RegistrationPopup;
  }
  if (type === 'login') {
    return LoginPopup;
  }

  return null;
};

const Popup = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const animatedVisible = useRef(Animated.timing(
    animated,
    {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    },
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

  return !!Component && (
  <Pressable
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
    }}
    accessibilityRole="button"
    onPress={() => setPopupType(null)}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.popup}>
        <Animated.View style={{
          width: '100%',
          height: '100%',
          transform: [{ translateY: value }],
        }}
        >
          <TouchableOpacity
            style={styles.content}
            activeOpacity={1}
            onPress={Platform.OS !== 'web' ? () => Keyboard.dismiss() : () => ({})}
          >
            <View style={styles.closeBtn}>
              <IconButton name="close" fill="rgb(195, 195, 195)" onPress={() => setPopupType(null)} />
            </View>
            <Component />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  </Pressable>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
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
  },
  closeBtn: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 10,
  },
});

export default Popup;
