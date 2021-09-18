import React from "react";
import {View} from "react-native";
import {useRouter} from "next/router";

const PostId = () => {
    const router = useRouter();
    const { post } = router.query;

    return <View>{post}</View>;
};

export default PostId;
