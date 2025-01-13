
import { useState } from "react";
import{FaTrashAlt} from "react-icons/fa"

const Content = () => {


  //const [] = useState();


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
    <main>
      {items.length ? (<ul>
        {
        items.map((item)=>(
          <li className="item" key={item.id}>
            <input type="checkbox"  onChange={()=> handleCheck(item.id)} checked={item.checked} />
            <label 
            
            style={(item.checked)? {textDecoration:'line-through'} : null}
            onClick={()=> handleCheck(item.id)}> {item.item}</label>
            <FaTrashAlt onClick={()=> handleDelete(item.id)} role="button" tabIndex="0"/>
          </li>
              ))
        }
      </ul> ) :( <p style={{marginTop:'2rem',marginBottom:'2rem', color:'red'}} >Your list is empty</p> )}

    
    </main>
  )
}

export default Content
