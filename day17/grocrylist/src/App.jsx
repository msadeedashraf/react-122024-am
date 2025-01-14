
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import './App.css'
import AddItem from "./AddItem";

function App() {
  
  const [items, setItems] = useState(   
  JSON.parse(localStorage.getItem('mylist'))    
  );

const [newItem, setNewItem] = useState('');      

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
  

    <Header title = 'To Do List' />
    <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
     />
    <Content 
        length={items.length}
        items={items} 
        
        handleCheck={handleCheck}
        handleDelete={handleDelete}
    />
    <Footer length={items.length} year = '2025'/>
    </>
  )
}

export default App
