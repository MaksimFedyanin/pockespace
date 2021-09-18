import {useCallback, useState} from "react";

const useComponentSize = () => {
    const [layout, setLayout] = useState({ width: 0, height: 0 });

    const onLayout = useCallback((event) => {
        const { width, height } = event.nativeEvent.layout;

        setLayout({ width, height });
    }, []);

    return [layout, onLayout];
};

export default useComponentSize;
