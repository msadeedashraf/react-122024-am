import LineItems from "./LineItems"



const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {
        items.map((item)=>(
         <LineItems item={item} handleCheck={handleCheck} handleDelete={handleDelete}  />
              ))
        }
      </ul>
  )
}

export default ItemsList
