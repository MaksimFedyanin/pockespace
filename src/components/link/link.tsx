import Link from 'next/link';
import { Platform, Pressable } from 'react-native';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { RouterState } from '../../state/router';

const PockeSpaceLink = ({ href, children }) => {
  if (Platform.OS === 'web') {
    return <Link href={href}>{children}</Link>;
  }

  const setRouter = useSetRecoilState(RouterState);

  return (
    <Pressable onPress={() => setRouter(href)}>
      {children}
    </Pressable>
  );
};

export default PockeSpaceLink;
