import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import useComponentSize from '../../hooks/useComponentSize';
import useScreenSize from '../../hooks/useScreenSize';
import Popup from '../popup/popup';
import Header from '../header/header';
import Diviner from '../diviner/diviner';
import Menu from '../menu/menu';
import Tabs from '../tabs/tabs';

const Layout = ({ children }) => {
  const [layout, onLayout] = useComponentSize();
  const [layoutHeader, onLayoutHeader] = useComponentSize();
  const [layoutTabs, onLayoutTabs] = useComponentSize();
  const [window] = useScreenSize();
  const [mount, setMount] = useState(false);
  const isMobile = layout?.width < 1024;
  const [height, setHeight] = useState<number | string>(0);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    const value = window.height - layoutHeader.height - layoutHeader.height - layoutTabs.height;

    setHeight(value);
  }, [window, layoutHeader, layoutTabs]);

  return (
    <View>
      <View style={isMobile ? styles.appMobile : styles.app} onLayout={onLayout}>
        {(mount && isMobile) && <Header onLayout={onLayoutHeader} />}
        {(mount && isMobile) && <Diviner />}
        {(mount && !isMobile) && (
        <View style={styles.menu}>
          <Menu />
        </View>
        )}
        <View style={isMobile ? {
          flex: 1,
          flexBasis: height,
          overflow: 'hidden',
        } : styles.wrapper}
        >
          {children}
        </View>
        {(mount && !isMobile) && <View style={styles.menu} />}
        {(mount && isMobile) && <Diviner />}
        {(mount && isMobile) && <Tabs onLayout={onLayoutTabs} />}
      </View>
      <Popup />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appMobile: {
    height: '100%',
  },
  wrapper: {
    width: '100%',
    maxWidth: 500,
  },
  menu: {
    flex: 1,
    width: '100%',
    maxWidth: 200,
    height: '100%',
  },
  tabs: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Layout;
