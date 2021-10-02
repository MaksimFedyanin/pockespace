import { Icon } from 'react-native-eva-icons';
import { Pressable } from 'react-native';
import React, { useRef } from 'react';

interface IIconButton {
  name: string;
  fill?: string;
  onPress: () => void;
}

const IconButton = ({ name, fill = 'black', onPress }: IIconButton) => {
  const iconRef = useRef<Icon>(null);

  const onIconPress = () => {
    iconRef?.current.startAnimation();

    onPress();
  };

  return (
    <Pressable accessibilityRole="button" onPress={onIconPress}>
      <Icon
        ref={iconRef}
        name={name}
        fill={fill}
        width={24}
        height={24}
        animation="pulse"
      />
    </Pressable>
  );
};

export default IconButton;
