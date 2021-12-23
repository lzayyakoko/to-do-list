import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Lists=(props)=>{
    const toDos = props.toDos;
    const pressHandler = props.pressHandler;
    return(
        <ScrollView>
                <View style={styles.itemContainer}>
                {toDos.map((item)=>(
                    <TouchableOpacity onPress={()=>pressHandler(item.id)} key={item.id}>
                            <View style={styles.item}>
                                <MaterialIcons name="delete" size={25}/>
                                <Text style={styles.itemText}>{item.text}</Text>
                            </View>
                    </TouchableOpacity>
                ))}
                </View>
        </ScrollView>

    )
}
export default Lists;
const styles = StyleSheet.create({
    itemContainer:  {
        flex: 1,
        // backgroundColor: "yellow",
        paddingBottom: 5
    },
    item: {
        flexDirection: "row",
        borderStyle: "dashed",
        borderWidth: 1,
        marginTop: 10,
        padding: 15,
        fontSize: 20,
        borderRadius: 10,
      },
    itemText:   {
        marginLeft: 10,
    }
})