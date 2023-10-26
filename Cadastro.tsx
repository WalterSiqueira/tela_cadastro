import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

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
  const [usuarios, setUsuarios] = useState([] as any[]);
  
  const adicionarCadastro = () => {
    // Aqui você pode fazer o que quiser com os dados inseridos, como enviar para um servidor.
    // Neste exemplo, apenas adicionamos os dados à lista de usuários.
    const novoUsuario = {
      codigo,
      rg,
      cpf,
      nome,
      email,
      celular,
      telefone,
      endereco,
      complemento,
    };
    setUsuarios([...usuarios, novoUsuario]);
    // Limpa os campos do formulário
    setCodigo('');
    setRg('');
    setCpf('');
    setNome('');
    setEmail('');
    setCelular('');
    setTelefone('');
    setEndereco('');
    setComplemento('');
  };

  const apagarCadastro = (index: number) => {
    // Remove um usuário específico da lista de usuários
    const novosUsuarios = [...usuarios];
    novosUsuarios.splice(index, 1);
    setUsuarios(novosUsuarios);
  };

  return (
    <View>
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
          onPress={adicionarCadastro}
        />
      </View>
      
      <Text>Usuários Cadastrados:</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>Código: {item.codigo}</Text>
            <Text>RG: {item.rg}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Celular: {item.celular}</Text>
            <Text>Telefone: {item.telefone}</Text>
            <Text>Endereço: {item.endereco}</Text>
            <Text>Complemento: {item.complemento}</Text>
            <Button
              title="Apagar"
              onPress={() => apagarCadastro(index)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Cadastro;
