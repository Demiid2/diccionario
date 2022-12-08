import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';



function App(props) {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${props.palabra}`)
      .then(response => setDatos(response.data));
      console.log(datos)
    
  }, [])
 // let first = datos[0]
 // let definition = first.meanings[0].definitions[1].definition;
  return (
    <div className='app'>
      <h1>{datos.word}</h1>
     
    </div>
  );
}

export default App;
