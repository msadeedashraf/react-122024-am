
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import './App.css'

function App() {
  
  const [items, setItems] = useState(
    [
      {
        id : 1,
        checked : true,
        item : "Bananas"
      },
      {
        id : 2,
        checked : true,
        item : "Bread"
      
      },
      {
        id : 3,
        checked : false,
        item : "Eggs"
      
      },
      {
        id : 4,
        checked : false,
        item : "Eggs"
      
      },
      {
        id : 5,
        checked : false,
        item : "Eggs"
      
      }
    ]
      );

       const handleCheck = (id) => {
          
             // console.log(`key : ${id}`);
             const listItems = items.map((item)=> item.id === id ? {...item, checked : !item.checked} : item );
          
             setItems(listItems);
          
             localStorage.setItem('mylist',JSON.stringify(listItems));
            }
          
          
            const handleDelete = (id) => {
          
               
              //console.log(id);
              const listItems = items.filter(( item)=> item.id !== id );
          
              setItems(listItems);
           
              localStorage.setItem('mylist',JSON.stringify(listItems));
          
            }

  return (
    <>
  

    <Header title = 'Groceries List' />
    <Content 
        length={items.length}
        items={items} 
        
        handleCheck={handleCheck}
        handleDelete={handleDelete}
    />
    <Footer length={items.length} year = '2026'/>
    </>
  )
}

export default App
