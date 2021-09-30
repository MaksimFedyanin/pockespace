import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import Input from "../input/input";
import Btn from "../btn/btn";

const RegistrationPopup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View>
        <Input value={email} style={styles.input} onChange={setEmail}/>
        <Input value={password} style={styles.input} onChange={setPassword}/>
        <Btn title="registration" onPress={() => ({})}/>
    </View>;
}

const styles = StyleSheet.create({
});

export default RegistrationPopup;
