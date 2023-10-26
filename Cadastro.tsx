import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Cadastro: React.FC = () => {
    const [codigo, setCodigo] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [dadosEnviados, setDadosEnviados] = useState(false);

  const enviarCadastro = () => {
    // Aqui você pode fazer o que quiser com os dados inseridos, como enviar para um servidor.
    // Neste exemplo, apenas exibiremos os dados na tela.
    setDadosEnviados(true);
  };

  return (
    <View>
      {dadosEnviados ? (
        <View>
          <Text>Dados do usuário:</Text>
          <Text>Código: {codigo}</Text>
          <Text>RG: {rg}</Text>
          <Text>CPF: {cpf}</Text>
          <Text>Nome: {nome}</Text>
          <Text>Email: {email}</Text>
          <Text>Celular: {celular}</Text>
          <Text>Telefone: {telefone}</Text>
          <Text>Endereço: {endereco}</Text>
          <Text>Complemento: {complemento}</Text>
        </View>
      ) : (
        <View>
          <Text>Código:</Text>
          <TextInput
            value={codigo}
            onChangeText={setCodigo}
          />
          <Text>RG:</Text>
          <TextInput
            value={rg}
            onChangeText={setRg}
          />
          <Text>CPF:</Text>
          <TextInput
            value={cpf}
            onChangeText={setCpf}
          />
          <Text>Nome:</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
          />
          <Text>Email:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
          />
          <Text>Celular:</Text>
          <TextInput
            value={celular}
            onChangeText={setCelular}
          />
          <Text>Telefone:</Text>
          <TextInput
            value={telefone}
            onChangeText={setTelefone}
          />
          <Text>Endereço:</Text>
          <TextInput
            value={endereco}
            onChangeText={setEndereco}
          />
          <Text>Complemento:</Text>
          <TextInput
            value={complemento}
            onChangeText={setComplemento}
          />
          <Button
            title="Enviar"
            onPress={enviarCadastro}
          />
        </View>
      )}
    </View>
  );
};

export default Cadastro;