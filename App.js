import React, { Component, useState } from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import { ScrollView, SectionList } from 'react-native';
import { Text, View,Button,StyleSheet,TextInput, FlatList } from 'react-native';

const App=()=>{
  const[task,setTask]=useState([]);
  const[name,setName]=useState('');
  const delet=(item)=>{

    const update = task.filter((element)=> item !== element);
    setTask(update);
  };
  return(
  <View style={styles.main}>
    <Text style={{fontSize:30}}>TO DO LIST</Text>
   <TextInput
   style={{fontSize:30,borderColor:'red',borderWidth:3,borderRadius:5}}
   placeholder='Enter the task'
   value={name}
   onChangeText={(text)=>setName(text)}
   />
   <Button title='Add task' onPress={()=>{
     setTask([...task,name]);
     setName('');
     value='';
   }}/>
    <View>
   <FlatList
   data={task}
   renderItem={({item})=><View style={styles.wrap}>
   <Text style={{fontSize:30}}>{item}</Text>
   <TouchableOpacity onPress={()=>delet(item)}>
    <View style={styles.radio}></View>
   </TouchableOpacity>

   </View>}
   keyExtractor={(item, index) => index.toString()}
   >
   </FlatList>
    </View>
   </View>
  )
};
const styles=StyleSheet.create({
  main:{
    flex:1
  }, 
  title:{
    flex:1,
    fontSize:30,
    marginTop:20,
    textAlign:'center',
    color:'red'
  },
  radio:{
    height:40,
    width:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20
  }
})
export default App;
