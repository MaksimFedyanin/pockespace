import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Platform, Button} from "react-native";
import Header from "../src/components/header/header";
import Diviner from "../src/components/diviner/diviner";
import Menu from "../src/components/menu/menu";
import Tabs from "../src/components/tabs/tabs";
import useComponentSize from "../src/hooks/useComponentSize";
import useScreenSize from "../src/hooks/useScreenSize";
import { Provider } from "react-redux";
import { initStore } from "../src/redux/store";
import PopupHost from "../src/components/popup/popup-host";
import Popup from "../src/components/popup/popup";

function PockeSpaceApp({ Component, pageProps }) {
    const [layout, onLayout] = useComponentSize();
    const [layoutHeader, onLayoutHeader] = useComponentSize();
    const [layoutTabs, onLayoutTabs] = useComponentSize();
    const [window, screen] = useScreenSize();
    const [mount, setMount] = useState(false);
    const isMobile = layout?.width < 1024;
    const [height, setHeight] = useState<number | string>(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    useEffect(() => {
        const value = window.height - (Platform.OS === 'web' ? 0 : layoutTabs.height);

        setHeight(value);
    }, [window, layoutHeader, layoutTabs]);

    return <View style={{ height }}>
        <Provider store={initStore(pageProps.store)}>
            <PopupHost>
                <Popup visible={visible} onClose={() => setVisible(false)}>
                    <Text>22224444</Text>
                </Popup>
                <View style={isMobile ? styles.appMobile : styles.app} onLayout={onLayout}>
                    {(mount && isMobile) && <Header onLayout={onLayoutHeader}/>}
                    {(mount && isMobile) && <Diviner/>}
                    {(mount && !isMobile) && <View style={styles.menu}>
                        <Menu/>
                    </View>}
                    <View style={isMobile ? {
                        flex: 1,
                        height,
                        overflow: "hidden",
                    } : styles.wrapper}>
                        <Component />
                    </View>
                    {(mount && !isMobile) && <View style={styles.menu}/>}
                    {(mount && isMobile) && <Diviner/>}
                    {(mount && isMobile) && <Tabs onLayout={onLayoutTabs}/>}
                </View>
            </PopupHost>
        </Provider>
    </View>;
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
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

export default PockeSpaceApp;
