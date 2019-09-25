import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Menu = (props) => {
    return (
        <TouchableOpacity onPresss style={styles.container}>
            {/* <View style={styles.right}> */}
            <TouchableOpacity>
                <Text style={[styles.txt, { paddingTop: 28 }]}>Schedule send</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt}>Add from Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt}>Confidential mode</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt}>Save draft</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt}>Discard</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txt}>Help & feedback</Text>
            </TouchableOpacity>
            {/* </View> */}
        </TouchableOpacity>
    )

}
export default Menu;

const styles = {
    container: {
        backgroundColor: "#fff",
        height: 350,
        width: 180,
        // width: "100%",
        // height: "100%",
        justifyContent: "flex-start",

        position: "absolute",
        alignSelf: "flex-end",
        marginTop: 3,
        elevation: 8,
        borderRadius: 4,
        right: 6,

    },
    right: {
        position: "absolute",
        alignSelf: "flex-end",
        marginTop: 3,
        elevation: 8,
        borderRadius: 4,
        right: 6,
        height: 350,
        width: 180,

    },
    txt: {
        fontSize: 16,
        padding: 14,
        paddingLeft: 16,
        marginLeft: 10
    }
}

