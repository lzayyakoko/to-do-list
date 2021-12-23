import React, {useState} from "react";
import {StyleSheet, View, TextInput, Button } from "react-native";

const Addtodo=(props)=>{
    const addPressHandler = props.addPressHandler;
    const [text, setText] = useState("Enter");

    const changeHandler=(value)=>{
        const newValue = value;
        setText(value);
        console.log(newValue);
    }
    return(
        <View style={styles.addtodoContainer}>
            <TextInput
             onChangeText={changeHandler}
             style={styles.textInput} 
             placeholder="add to to"
            />
            <Button onPress={()=>addPressHandler(text)} color="#1f1"  title="ADD TODOS"/>
        </View>
    );
}
export default Addtodo;

const styles = StyleSheet.create({
    addtodoContainer:   {
       paddingHorizontal: 10,
       marginBottom: 15,
    },
    textInput:  {
        padding: 10,
        borderStyle: "dotted",
        borderBottomColor: "#333",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 10,
    },
    
})