import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDFKEYq_f8FCAkjCfI6uAAmQyynA4-46kQ",
  authDomain: "meu-primeiro-firebase-4b5fa.firebaseapp.com",
  projectId: "meu-primeiro-firebase-4b5fa",
  storageBucket: "meu-primeiro-firebase-4b5fa.firebasestorage.app",
  messagingSenderId: "685717882356",
  appId: "1:685717882356:web:34516bdcf8b81b336ba5a1"
};

const app = initializeApp(firebaseConfig);

import React, {useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native';

export default function App(){
  const [nome, setNomes] = useState([]);
  
  useEffect(() => {
    const fetchData = async() =>{
      const nomesCollection = firebase.firestore().collection('Nomes'),
      const snapshot = await nomesCollection.get();

      const data =[];
      snapshot.forEach((doc)=>{
        data.push({id: doc.id, ...doc.data()});
      });

      setNomes(data);
    };

    fetchData();

  }, {});
  return (
    <View style ={{ flex: 1, justifyContent: 'center',
      alignItems: 'center' }}>
        <Text>Lista de Nomes: </Text>
        <FlatList
        data = {nomes}>
    )
}