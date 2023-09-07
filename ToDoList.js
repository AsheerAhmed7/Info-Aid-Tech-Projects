import React, { Component, useState } from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import { ScrollView, SectionList } from 'react-native';
import { Text, View,Button,StyleSheet,TextInput, FlatList } from 'react-native';

const App=()=>{
  const[task,setTask]=useState([]);
  const[name,setName]=useState('');
  const [backgroundColor, setBackgroundColor] = useState([]);

  const delet=(item)=>{

    const update = task.filter((element)=> item !== element);
    const updateColor = backgroundColor.filter((_,index)=> item!=task[index]);
    setTask(update);
    setBackgroundColor(updateColor);
  };
  return(
  <View style={styles.main}>
    <View style={styles.box}>
    <Text style={styles.title} >TO DO LIST</Text>
   <FlatList
   data={task}
   renderItem={({item,index})=><View style={styles.wrap}>
   <Text style={{fontSize:30,flex:1,flexWrap:'wrap'}}>{item}</Text>
   
    <View style={styles.field}>
      <View style={{marginRight:10}}>
      <TouchableOpacity onPress={()=>{
             const updatedColors = [...backgroundColor];
             updatedColors[index] = updatedColors[index] === 'pink' ? 'red' : 'pink';
             setBackgroundColor(updatedColors);
      }
      }>
    <View style={[styles.radio,{backgroundColor:backgroundColor[index]}]}></View>
    <Text style={{fontWeight:'bold'}}>Mark as Done</Text>
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity onPress={()=>delet(item)}>
    <View style={styles.radio}></View>
    <Text style={{fontWeight:'bold'}}>Remove Task</Text>
   </TouchableOpacity></View>
   </View>
   </View>}
   keyExtractor={(item, index) => index.toString()}
   >
   </FlatList>
    </View>
    <View style={styles.inputwrap}>
   <TextInput
   style={styles.textinput}
   placeholder='Enter the task'
   value={name}
   onChangeText={(text)=>setName(text)}
   />

   <TouchableOpacity title='Add Task' onPress={()=>{
    if(name==''){
      console.warn("Task can not be empty");
    }else{
    setTask([...task,name]);
    setBackgroundColor([...backgroundColor, 'pink']);
    setName('');
    value='';}
   }}>
    <View style={styles.radio}></View>
    <Text style={styles.add}>ADD TASK</Text>
   </TouchableOpacity>
   </View>
   
   </View>
  )
};
const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'pink'
  }, 
  box:{
   flex:1
  },
  wrap:{
   flexDirection:'row',
   justifyContent: 'space-between',
   borderWidth:2,
   borderColor:'red',
   margin:5,
   borderRadius:10,
   padding:5
  },
  title:{
    fontSize:40,
    marginTop:80,
    textAlign:'center',
    color:'red'
  },
  radio:{
    height:40,
    width:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
  },
  textinput:{
    fontSize:30,borderColor:'red',borderWidth:3,borderRadius:5,
    width:200,
    padding:5
   
    },
  inputwrap:{
    flexDirection:'row',
   justifyContent:'space-evenly'
  },
  add:{
    marginTop:5,
    fontSize:20
  },
  field:{
    flex:1,
    flexDirection:'row'
  },
  mark:{
    backgroundColor:'pink'
  }
})
export default App;
