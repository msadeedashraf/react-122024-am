
import './App.css'
import Monkeylist from './Monkeylist'
import { useEffect, useState } from 'react';

function App() {
  const API_URL = "https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json";

  const [monkeyList, setMonkeyList] = useState([]);

  useEffect(  () => {
    const fetchMonkey = async () => {
      try {
        const response = await fetch(API_URL);
        console.log(response);
        const listMonkey = await response.json();
        setMonkeyList(listMonkey);
        console.log(listMonkey);
      }
      catch (err) {console.log(err.stack);}
      };
  
      fetchMonkey();
      
  }, [] );

  return (
    <>
      <h1>List of Monkeys</h1>
      <Monkeylist monkeyList={monkeyList}/>
    </>
  )
}

export default App
