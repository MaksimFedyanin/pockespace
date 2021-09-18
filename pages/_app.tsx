import React, {useEffect, useState} from "react";
import { StyleSheet, View} from "react-native";
import Header from "../src/components/header/header";
import Diviner from "../src/components/diviner/diviner";
import Menu from "../src/components/menu/menu";
import Tabs from "../src/components/tabs/tabs";
import useComponentSize from "../src/hooks/useComponentSize";
import useScreenSize from "../src/hooks/useScreenSize";
import {Provider} from "react-redux";
import {initStore} from "../src/redux/store";

const store = initStore();

function PockeSpaceApp({ Component, pageProps }) {
    const [layout, onLayout] = useComponentSize();
    const [layoutHeader, onLayoutHeader] = useComponentSize();
    const [layoutTabs, onLayoutTabs] = useComponentSize();
    const [window, screen] = useScreenSize();
    const [mount, setMount] = useState(false);
    const isMobile = layout?.width < 1024;
    const [height, setHeight] = useState<number | string>('100%');

    useEffect(() => {
        setMount(true);
    }, []);

    useEffect(() => {
        setHeight(window.height - layoutHeader.height - layoutTabs.height);
    }, [window, layoutHeader, layoutTabs]);

    return <Provider store={store}>
        <View style={isMobile ? styles.appMobile : styles.app} onLayout={onLayout}>
            {isMobile && mount && <Header onLayout={onLayoutHeader}/>}
            {isMobile && mount && <Diviner/>}
            {!isMobile && mount && <View style={styles.menu}>
                <Menu/>
            </View>}
            <View style={isMobile ? { height } : styles.wrapper}>
                <Component {...pageProps} />
            </View>
            {!isMobile && mount && <View style={styles.menu}>
            </View>}
            {isMobile && mount && <Tabs onLayout={onLayoutTabs}/>}
        </View>
    </Provider>;
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    appMobile: {
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
