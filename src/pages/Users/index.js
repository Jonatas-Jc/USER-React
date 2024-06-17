import React, { useState, useEffect } from 'react';
import { Container, Image, User } from './styles'
import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import H1 from '../../components/title'
import ContainerItens from '../../components/containerItens'
import Button from '../../components/button'

export default function Users() {

  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(()=>{

    async function fetchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
fetchUsers()
  },[])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id != userId)
    setUsers(newUsers)
  }

  function goBackPage() {
    history.push('/')
  }

  return (

    <Container>

      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img src={Trash} /> </button>
            </User>
          ))
        }
        </ul>

        <Button isBack={true} onClick={goBackPage} > <img alt="arrow" src={Arrow}/>Voltar</Button>

      </ContainerItens>

    </Container>
  )
}