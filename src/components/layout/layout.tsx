import useComponentSize from "../../hooks/useComponentSize";
import useScreenSize from "../../hooks/useScreenSize";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import PopupHost from "../popup/popup-host";
import Popup from "../popup/popup";
import Header from "../header/header";
import Diviner from "../diviner/diviner";
import Menu from "../menu/menu";
import Tabs from "../tabs/tabs";

const Layout = ({ children }) => {
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
                        {children}
                    </View>
                    {(mount && !isMobile) && <View style={styles.menu}/>}
                    {(mount && isMobile) && <Diviner/>}
                    {(mount && isMobile) && <Tabs onLayout={onLayoutTabs}/>}
                </View>
            </PopupHost>
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

export default Layout;
