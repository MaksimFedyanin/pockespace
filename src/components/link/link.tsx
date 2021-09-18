import Link from 'next/link';
import {Platform, Pressable} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {APP_ACTIONS} from "../../redux/app-slice";

const PockeSpaceLink = ({ href, children }) => {
    if (Platform.OS === 'web') {
        return <Link href={href}>{children}</Link>;
    }

    const dispatch = useDispatch();

    return <Pressable onPress={() => dispatch(APP_ACTIONS.setUrl(href))}>
        {children}
    </Pressable>;
};

export default PockeSpaceLink;


