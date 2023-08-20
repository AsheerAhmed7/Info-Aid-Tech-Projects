import React, { Component, useState } from 'react';
import { ActivityIndicator, Modal, Touchable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ScrollView, SectionList } from 'react-native';
import { Text, View,Button,StyleSheet,TextInput, FlatList } from 'react-native';

const App=()=>{
  const[show,setShow]=useState(false);
  const[input,setValue]=useState('');
   const handle=(text)=>{
    text=input+text;
    setValue(text);
   };
   const result=()=>{

    let text=eval(input);
    if(text=='Infinity'|| text=="undefined"){
      console.warn("undefined");
      setValue('')
    }
    else{
    text=text.toString();
    setValue(text);
    }
   }
     return(
   <View style={styles.main}>
    <View  style={styles.header}>
   <Text style={{fontSize:40 ,color:'white'}}>CALCULATOR APP</Text>
    
    <TextInput 
    style={styles.input}
    editable={false}
    value={input}
    
    ></TextInput>
  
   </View>
   <View style={styles.wrap}>
    <TouchableOpacity onPress={()=>handle("7")}>
      <Text style={styles.text}>7</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("8")}>
      <Text style={styles.text}>8</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("9")}>
      <Text style={styles.text}>9</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("/")}>
      <Text style={styles.text}>/</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("4")}>
      <Text style={styles.text}>4</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("5")}>
      <Text style={styles.text}>5</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("6")}>
      <Text style={styles.text}>6</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("*")}>
      <Text style={styles.text}>*</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("1")}>
      <Text style={styles.text}>1</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("2")}>
      <Text style={styles.text}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("3")}>
      <Text style={styles.text}>3</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("-")}>
      <Text style={styles.text}>-</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("0")}>
      <Text style={styles.text}>0</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle(".")}>
      <Text style={styles.text}>.</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setValue("")}>
      <Text style={styles.text}>C</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handle("+")}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={result}>
      <Text style={styles.text}>=</Text>
    </TouchableOpacity>
  
   </View>
   </View>
  )
};
const styles=StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   backgroundColor:'black'
  },
  header:{
    fontSize:35 ,flex:0.75,
    justifyContent:'center',
    alignItems:'center',
  
  },
  wrap:{
    flex:1.4,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:'center',
    borderColor:'red',
    borderWidth:3
 
  },
  text:{
    color:'white',
    fontSize:30,
    borderWidth:3,
    borderColor:'white',
    borderRadius:5,
    padding:20,
    marginRight:20,
    marginTop:18,
    height:80,
    width:60 
  },
  input:{
    color:'black',
    backgroundColor:'white',
    fontSize:30,
    marginTop:20,
    borderColor:'red',
    borderWidth:3,
    borderRadius:10,
    height:80,
    width:350,
    paddingLeft:20
  },
 
 
})
export default App;
