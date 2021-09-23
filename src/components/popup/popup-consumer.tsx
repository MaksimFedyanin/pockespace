import * as React from 'react';
import type { PopupMethods } from './popup-host';

type Props = {
    manager: PopupMethods;
    children: React.ReactNode;
};

export default class PopupConsumer extends React.Component<Props> {
    async componentDidMount() {
        this.checkManager();

        // Delay updating to prevent React from going to infinite loop
        await Promise.resolve();

        this.key = this.props.manager.mount(this.props.children);
    }

    componentDidUpdate() {
        this.checkManager();

        this.props.manager.update(this.key, this.props.children);
    }

    componentWillUnmount() {
        this.checkManager();

        this.props.manager.unmount(this.key);
    }

    private key: any;

    private checkManager() {
        if (!this.props.manager) {
            throw new Error(
                'Looks like you forgot to wrap your root component with `Provider` component from `react-native-paper`.\n\n' +
                "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
                'https://callstack.github.io/react-native-paper/getting-started.html'
            );
        }
    }

    render() {
        return null;
    }
}
