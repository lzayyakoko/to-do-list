import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todo List</Text>
        </View>
    );
}
const styles =StyleSheet.create({
    header: {
        backgroundColor: "#1f1",
        paddingTop: 30,
    },
    title:  {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        padding: 10,
    }
})
