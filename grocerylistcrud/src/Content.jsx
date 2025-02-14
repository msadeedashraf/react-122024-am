

import ItemsList from "./ItemsList";

const Content = ({items,handleCheck, handleDelete}) => {


  
    
  return (
    <>
      {
      items.length ? 
      (
      <ItemsList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/> 
      ) 
      :
      ( <p style={{marginTop:'2rem',marginBottom:'2rem', color:'red'}} >Your list is empty</p> )
      }

    </>
    
    
   
  )
}

export default Content
