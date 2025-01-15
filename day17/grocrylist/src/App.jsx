
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import './App.css'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { use } from "react";

function App() {
  
  const [items, setItems] = useState(   
  JSON.parse(localStorage.getItem('mylist'))    
  );

const [newItem, setNewItem] = useState('');   

const [search, setSearch] = useState('');


const setAndSaveItems = (newItems) => {

  setItems(newItems);
  localStorage.setItem('mylist',JSON.stringify(newItems));
}

const addItem = (item) => {

  const id = items.length ? items[items.length-1].id + 1 : 1;
  const myNewItem = {id, checked:false, item}
  //console.log(myNewItem);
  //console.log(items);
  const listItems = [...items,myNewItem]
  //console.log(listItems);
  setAndSaveItems(listItems);
          

}


       const handleCheck = (id) => {
          
             // console.log(`key : ${id}`);
             const listItems = items.map((item)=> item.id === id ? {...item, checked : !item.checked} : item );
          
             setAndSaveItems(listItems);
            }
          
          
            const handleDelete = (id) => {
          
               
              //console.log(id);
              const listItems = items.filter(( item)=> item.id !== id );
          
              setAndSaveItems(listItems);
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
    <Content 
        length={items.length}
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        
        handleCheck={handleCheck}
        handleDelete={handleDelete}
    />
    <Footer length={items.length} year = '2025'/>
    </>
  )
}

export default App
