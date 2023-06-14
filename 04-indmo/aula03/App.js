import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [Valor, setValor] = useState("");
  const [Juros, setJuros] = useState("");
  const [Parcelas, setParcelas] = useState("");
  const [Montante, setMontante] = useState(0);
  const [ValorParcela, setValorParcela] = useState(0);

  const calcular = () => {
    setMontante(Valor * (1 + Juros/100)**Parcelas);
    setValorParcela((Valor * (1 + Juros/100)**Parcelas) / Parcelas);

    setValor("");
    setJuros("");
    setParcelas("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular Empréstimo</Text> 
      <TextInput
        style={styles.inputs}
        placeholder="Valor do empréstimo:"
        value={Valor.toString()}
        onChangeText={(val) => { setValor(Number(val)) }}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Quantidade de parcelas:"
        value={Parcelas.toString()}
        onChangeText={(val) => { setParcelas(Number(val)) }}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Taxa de juros:"
        value={Juros.toString()}
        onChangeText={(val) => { setJuros(val) }}
      />
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.texto}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.textos}>Total/M: {Montante.toFixed(2)}</Text>
      <Text style={styles.textos}>Valor das parcelas: {ValorParcela.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold',
  },
  textos: {
    fontSize: 18,
    color: '#fee',
  },
  inputs: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%',
    padding: 10,
    color: '#fcc',
    fontSize: 16,
  },
  botao:{
    alignItems: 'center',
    backgroundColor: '#66f',
    padding: 10,
    color: '#fff',
    width: '90%',
    marginTop: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 18,
  }
});
