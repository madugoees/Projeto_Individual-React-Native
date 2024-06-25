import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Buttons() {
    return (
    <View>
      <TouchableOpacity style={styles.button01}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button02}>
        <Text style={styles.buttonText}>Continuar com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button03}>
        <Text style={styles.buttonText}>Continuar com o Google</Text>
      </TouchableOpacity>

    </View>
        
    );

}    

const styles = StyleSheet.create({
buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },

  button01: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 280,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    borderColor: 'gray',
    marginBottom: 25,
  },

  button02: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 280,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    borderColor: 'gray',
    marginBottom: 10,
  },

  button03: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 280,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 25,
    borderColor: 'gray',
  },
});
