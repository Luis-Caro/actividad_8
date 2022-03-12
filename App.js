import React, {useEffect, useState} from 'react' ;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
const [datos, setData] = useState([]);
const [isloading, setloading] = useState([]);

    const getPost = async () =>{

      try{

    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }catch (error){
    console.error(error);
  }finally{
    setloading(false);
  }

  }
  useEffect(()=>{
    getPost();
  }, []

  )
  return (
    <View style={styles.container}>
      {isloading ? 
      <ActivityIndicator />
      :(
       <FlatList data = {datos}
       keyExtractor = {({id}, index) => id}
       renderItem = {
         ({item}) =>(
           <Text>{item.title}</Text>
         )
       }
       />

      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});