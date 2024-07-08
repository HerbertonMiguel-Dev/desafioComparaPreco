// Importações do React e componentes do React Native
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal
} from "react-native";

// Importação do componente ModalCalcular
import ModalCalcular from "./src/ModalCalcular";

// Componente principal da aplicação
export default function App() {
  // Definindo estados usando o hook useState
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [alcool, setAlcool] = useState(''); // Estado para armazenar o valor do álcool
  const [gasolina, setGasolina] = useState(''); // Estado para armazenar o valor da gasolina

  // Função para abrir o modal
  function abrirModal() {
    if (alcool === '' || gasolina === '') {
      // Verifica se os campos estão vazios
      Alert.alert("Erro", "Por favor, insira os valores de álcool e gasolina.");
      return;
    }
    setModalVisible(true); // Define a visibilidade do modal como verdadeira
  }

  // Função para fechar o modal
  function fecharModal() {
    setModalVisible(false); // Define a visibilidade do modal como falsa
  }

  // Função para calcular a melhor opção entre álcool e gasolina
  function calcularMelhorOpcao() {
    const valorAlcool = parseFloat(alcool); // Converte o valor do álcool para float
    const valorGasolina = parseFloat(gasolina); // Converte o valor da gasolina para float

    if (isNaN(valorAlcool) || isNaN(valorGasolina)) {
      // Verifica se os valores são válidos
      return "Valores inválidos!";
    }

    const resultado = valorAlcool / valorGasolina; // Calcula a razão entre álcool e gasolina

    // Retorna a melhor opção com base no resultado
    return resultado < 0.7 ? "Compensa usar Álcool" : "Compensa usar Gasolina";
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')} // Logo da aplicação
        style={{ width: '65%', height: '39%', marginBottom: 20 }}
      />
      <Text style={styles.texto}>Qual melhor opção?</Text>

      <Text style={styles.label}>Álcool (preço por litro):</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite o valor do Álcool" 
        value={alcool}
        onChangeText={setAlcool} // Atualiza o estado do álcool ao digitar
        keyboardType="numeric" // Define o teclado numérico
      />

      <Text style={styles.label}>Gasolina (preço por litro):</Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite o valor do Gasolina" 
        value={gasolina} 
        onChangeText={setGasolina} // Atualiza o estado da gasolina ao digitar
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={abrirModal} // Chama a função abrirModal ao pressionar o botão
      >
        <Modal animationType="slide" visible={modalVisible}>
          <ModalCalcular 
            fechar={fecharModal} // Passa a função fecharModal como prop para o ModalCalcular
            resultado={calcularMelhorOpcao()} // Passa o resultado do cálculo como prop
            alcool={alcool} // Passa o valor do álcool como prop
            gasolina={gasolina} // Passa o valor da gasolina como prop
          />
        </Modal>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});