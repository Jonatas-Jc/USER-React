import React, { useState, useRef } from 'react';
import { Container, Image, Label, Input, User } from './styles'
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import H1 from '../../components/title'
import ContainerItens from '../../components/containerItens';
import Button from '../../components/button'



export default function App() {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  async function addNewUser() {
    const {data: newUser} = await axios.post('http://localhost:3001/users', 
    { name: inputName.current.value, age: inputAge.current.value})
    console.log(newUser)

    setUsers([...users, newUser])
  
    history.push('/users')
  }
  


  return (

    <Container>

      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <Label>Nome</Label>
        <Input ref={inputName} placeholder="Nome" />

        <Label>Idade</Label>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser} >Cadastrar <img alt="arrow" src={Arrow} /></Button>

      </ContainerItens>

    </Container>
  )
}