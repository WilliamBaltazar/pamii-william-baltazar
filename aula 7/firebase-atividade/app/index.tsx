import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOPxjy1aoqnFhH7aie6Y11D55UEUSzeuk",
  authDomain: "fir-atividade-10b57.firebaseapp.com",
  projectId: "fir-atividade-10b57",
  storageBucket: "fir-atividade-10b57.firebasestorage.app",
  messagingSenderId: "79066105909",
  appId: "1:79066105909:web:9153a076a181d110a1c97c"
};

  
  firebase.initializeApp(firebaseConfig);

  
  import React, {useEffect, useState } from 'react';
  import {FlatList, Text, View} from 'react-native';

  export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const nomesCollection = firebase.firestore().collection('Nomes');
        const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push ({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

      fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lista de Nomes: </Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
          )}
    />
  </View>
  );
}