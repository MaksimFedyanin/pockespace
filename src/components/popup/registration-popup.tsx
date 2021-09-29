import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";

const RegistrationPopup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View>
        <TextInput value={email} style={styles.input} onChange={setEmail}/>
        <TextInput value={password} style={styles.input} onChange={setPassword}/>
        <Pressable style={styles.btn} onPress={() => ({})}>
            <Text>registration</Text>
        </Pressable>
    </View>;
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: 'rgb(242, 242, 242)',
        borderRadius: 15,
    },
    btn: {
        height: 60,
        marginBottom: 15,
        borderRadius: 15,
    },
});

export default RegistrationPopup;
