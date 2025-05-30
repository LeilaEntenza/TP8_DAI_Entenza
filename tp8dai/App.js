import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInputComponent, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Login App Entenza</Text>
      </View>
      <View style={styles.container}>
        <Image source={{uri: 'https://i.pinimg.com/736x/26/31/01/263101e6d2a00ab9d94b59e4706666e3.jpg'}} style={styles.imagen}/>
        <TextInput placeholderTextColor='grey' placeholder ='mail' style={styles.input}/>
        <TextInput secureTextEntry={true} placeholderTextColor='grey' placeholder='contraseña' style={styles.input}/>
        <Pressable style={styles.ingresar}><Text style={styles.ingresarText}>INGRESAR</Text></Pressable>
        <Text style={styles.textoDefault}>¿Olvidaste la clave?</Text>
        <Text style={styles.textoDefault}>Crear Cuenta</Text>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'end',
    height: 80
  },

  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17
  },

  imagen: {
    width: 300,
    height: 200,
    margin: 3,
    borderRadius: 5
  },
  
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    fontSize: 17,
    margin: 3,
    padding: 3
  },

  ingresarText: {
    color: 'white',
    textAlign: 'center'
  },

  ingresar:{
    width: 300,
    height: 50,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    margin: 5
  },

  textoDefault: {
    margin: 3,
    fontSize: 15
  },
});
