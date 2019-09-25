import React from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, Linking } from 'react-native';

const Attach = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Linking.openURL('')}>
                <Text style={[styles.txt, { paddingTop: 24 }]}>Attach file</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com?')}>
                <Text style={styles.txt}>Insert from Drive</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Attach;

const styles = {
    container: {
        backgroundColor: "#fff",
        height: 100,
        width: 180,
        position: "absolute",
        alignSelf: "flex-end",
        marginTop: 4,
        elevation: 8,
        borderRadius: 4,
        right: 6
    },
    txt: {
        fontSize: 16,
        padding: 12,
        paddingLeft: 16
    }
}
