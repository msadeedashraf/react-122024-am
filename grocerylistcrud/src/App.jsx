
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import './App.css'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";



function App() {

  const API_URL = "http://localhost:3500/items";
  
const [items, setItems] = useState([]);

const [newItem, setNewItem] = useState('');   

const [search, setSearch] = useState('');

const [fetchError, setFetchError] = useState(null);
const [isLoading, setIsLoading] = useState(true);

//useEffect(()=>{}, []);

//useEffect(  () => {}, [] );

/*
const fetchItems = async () => {
try {}
catch (err) {}
}
*/






useEffect(  () => {
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      //console.log(response);
      if(!response.ok) throw Error('Did not receive data');
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
      
      //console.log(listItems);
    }
    catch (err) {
    //  console.log(err.stack);
    setFetchError(err.message)
    }
    finally
    {
      setIsLoading(false);
    }
    };

    setTimeout((async ()=> await fetchItems())(),5000);
    //(async ()=> await fetchItems())();
    
}, [] );

/*
useEffect(  () => {
  const fetchMonkey = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json");
      console.log(response);
      const listMonkey = await response.json();
      //setItems(listItems);
      console.log(listMonkey);
    }
    catch (err) {console.log(err.stack);}
    };

    fetchMonkey();
    
}, [] );

*/



//useEffect(()=>{localStorage.setItem('mylist',JSON.stringify(items));}, [items] );


//const [count , setCount] = useState(0);
//useEffect(()=>console.log("My name is sadeed"));
//useEffect(()=>console.log("My name is sadeed"), []);
//useEffect(()=>{ setTimeout(()=>{setCount((count)=>count+1)},1000) },[]);
//useEffect(()=>{ setTimeout(()=>{setCount((count)=>count+1)},1000) },[items]);
//console.log(`Increase the count by ${count}`)



const addItem = (item) => {

  const id = items.length ? items[items.length-1].id + 1 : 1;
  const myNewItem = {id, checked:false, item}
  //console.log(myNewItem);
  //console.log(items);
  const listItems = [...items,myNewItem]
  //console.log(listItems);
  //setAndSaveItems(listItems);
  setItems(listItems);
          

}


       const handleCheck = (id) => {
          
             // console.log(`key : ${id}`);
             const listItems = items.map((item)=> item.id === id ? {...item, checked : !item.checked} : item );
             setItems(listItems);
            }
          
          
            const handleDelete = (id) => {
          
               
              //console.log(id);
              const listItems = items.filter(( item)=> item.id !== id );
              setItems(listItems);
            }

const handleSubmit = (e) => {
e.preventDefault();

if(!newItem) return;
console.log(newItem);
addItem(newItem);

setNewItem('')
  //console.log('submited');
}



  return (
    <>
  

    <Header title = 'Groceries List' />
    <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
     />
     <SearchItem search={search} setSearch={setSearch}/>
    
    <main>

      

 
   

{isLoading && <p>Loading Item list...</p>}

    {fetchError && <p style={{color:"red"}}>{`Error : ${fetchError}`}</p>}
    {!fetchError && !isLoading &&
    
    <Content 
        length={items.length}
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        
        handleCheck={handleCheck}
        handleDelete={handleDelete}
    />
}

    </main>
    
    <Footer length={items.length} year = '2025'/>
    </>
  )
}

export default App
