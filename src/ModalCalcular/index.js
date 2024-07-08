// Componente ModalCalcular para exibir o resultado do cálculo
import React from "react"; // Importa React
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"; // Importa componentes de layout e estilização do React Native

export default function ModalCalcular(props){
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/gas.png')} // Imagem de gasolina
        style={{ width: '65%', height: '39%', marginBottom: 20 }}
      />
      {/* Exibe o resultado do cálculo */}
      <Text style={styles.resultText}>{props.resultado}</Text> 
      <Text style={styles.priceLabel}>Com os preços:</Text>
      {/* Exibe o valor do álcool */}
      <Text style={styles.priceText}>Álcool: R$ {props.alcool} </Text>
      {/* Exibe o valor da gasolina */}
      <Text style={styles.priceText}>Gasolina: R$ {props.gasolina} </Text> 
      {/* Botão para fechar o modal */}
      <TouchableOpacity style={styles.button} onPress={props.fechar}> 
        <Text style={styles.buttonText}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos do componente ModalCalcular
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  resultText: {
    color: '#00ff00',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceLabel: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  priceText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});