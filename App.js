import React, {useState} from 'react';
import { StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import Lists from './components/Lists';

const App=()=> {
  const [toDos, setTodos] = useState([
    {text: "go to school", id: 1},
    {text: "play rc plane", id: 2},
    {text: "phone call", id: 3}
  ]);
  const pressHandler=(id)=>{
      const filtered = toDos.filter((toDo)=>{
        return toDo.id !== id;
      })
      setTodos(filtered);
      console.log(id)
  }
  
  const addPressHandler = (text)=>{
    if(text==="Enter" || text.length<3){
      console.log(text.length)
      Alert.alert("Opps","list must be longer than 3 chars",[
        {text: "close", onPress: ()=>console.log("alert close")}
      ])
      
    } else{
      
      const newText =(toDo)=>{
        return [
          {text: text, id: Math.random()},
          ...toDo
        ]
      }
      setTodos(newText);
    }
  }
 
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("dismissed")
    }}>
          <View style={styles.container}>
             {/* header */}
              <Header/>
          
                <View style={styles.content}>
                  <Addtodo addPressHandler={addPressHandler}/>
                      <Lists toDos={toDos} pressHandler={pressHandler}/>
                </View>
          </View>
    </TouchableWithoutFeedback>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    padding: 40,
  }
});
