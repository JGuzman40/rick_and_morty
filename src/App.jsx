import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { useState } from 'react';


function App() {

// React.useState()

  const [characters, setCharacters] = useState([])
//   const example = {
//     id: 1,
//     name: 'Rick Sanchez',
//     status: 'Alive',
//     species: 'Human',
//     gender: 'Male',
//     origin: {
//        name: 'Earth (C-137)',
//        url: 'https://rickandmortyapi.com/api/location/1',
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//  };

 const onSearch =(id) => {
 // setCharacters([...characters, example])
 axios(`https://rickandmortyapi.com/api/character/${id}`)
 .then(({ data }) => {
  if (data.name) {
     setCharacters((oldCharacters) => [...oldCharacters, data]);
  } else {
     window.alert('Personaje no encontrado');
  }
}).catch(error => window.alert(error))
}

const onClose =(id) => {
  setCharacters(characters.filter(char => char.id !== Number(id)))
}

  return (
    <div className='App'>
      <Nav onSearch={onSearch}/>
      <hr />
      <Cards characters={characters} onClose ={onClose} />
      <hr />
    
    </div>
  );
}

export default App;
