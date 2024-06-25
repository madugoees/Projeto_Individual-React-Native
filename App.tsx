import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput,} from 'react-native';
import Buttons from './src/src/components/Buttons/Buttons';
import { Imagem } from './src/src/components/Images/Imagem'; 

export default function App() {
  const [title, setTitle] = useState("");
  return (
    <View style={styles.containerMain}>

      <Imagem />

      <Image style={styles.logo} source={require('../projetoIndividual/assets/logo.png')} />

      <View style={styles.bemVindo}>
        <Text style= {styles.textoBemVindo}> Bem vindo(a) ao Pinterest! </Text>
      </View>

      <View>
        <TextInput style={styles.input}
          placeholderTextColor= 'grey' 
          placeholder='Endereço de Email'
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <Buttons />

    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  bemVindo: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },

  textoBemVindo: {
    fontSize: 25,
    fontFamily: '',
    fontWeight: 'bold',
    color: 'white',
  },

  input: {
    color: 'white',
    height: 45,
    width: 280,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 15,
    borderColor: 'gray',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },

  logo: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 110,
    height: 110,
    bottom: 25,
  },

});


