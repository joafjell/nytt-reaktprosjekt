import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';

function App() {

  const savedUser =() =>{
    const saved = localStorage.getItem("Bruker")
    const initialValue = JSON.parse(saved)
    return initialValue || "";
  }

  const [exists, setExists] = useState()
  const [login, setLogin] = useState({Username: "", password: ""})
  //State for å holde på registrert bruker
  const [user, setUser] = useState(savedUser)
  //const [account, setAccount] = useState(savedUser)
  useEffect(()=>{
    localStorage.setItem("Bruker", JSON.stringify(user))
  },[user])

  console.log(localStorage)
  console.log("sjekk", savedUser)
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={!exists ? <Login 
        setLogin={setLogin} 
        login={login} 
        user={user}
        exists={exists}
        setExists={setExists}
        />
        :
        <Welcome user={user.username}/>} />
        <Route path='register' element={<Register user={user} setUser={setUser}/>} />
      </Route>
    </Routes>
  );
}

export default App;
