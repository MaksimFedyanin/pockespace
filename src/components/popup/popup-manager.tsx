import * as React from 'react';
import { View, StyleSheet } from 'react-native';

type State = {
    popups: Array<{
        key: number;
        children: React.ReactNode;
    }>;
};

export default class PopupManager extends React.PureComponent<{}, State> {
    state: State = {
        popups: [],
    };

    mount = (key: number, children: React.ReactNode) => {
        this.setState((state) => ({
            popups: [...state.popups, { key, children }],
        }));
    };

    update = (key: number, children: React.ReactNode) =>
        this.setState((state) => ({
            popups: state.popups.map((item) => {
                if (item.key === key) {
                    return { ...item, children };
                }
                return item;
            }),
        }));

    unmount = (key: number) =>
        this.setState((state) => ({
            popups: state.popups.filter((item) => item.key !== key),
        }));

    render() {
        return this.state.popups.map(({ key, children }) => (
            <View
                key={key}
                collapsable={false}
                pointerEvents="box-none"
                style={StyleSheet.absoluteFill}
            >
                {children}
            </View>
        ));
    }
};
