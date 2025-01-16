import React from 'react';
import colorNames from 'colornames'

const Input = ({colorValue, setColorValue,setHexValue,textColor, setTextColor }) => {
  return (
    <>
    <form action="">
        <label htmlFor="">Add Color Name</label>
        <input 
            type="text" 
            autoFocus
            placeholder='add color name'
            required
            value={colorValue}
            onChange={(e)=> {
                setColorValue(e.target.value);  
                setHexValue(colorNames(e.target.value));
            
            }}
        
        />
        <button type='button'
        onClick={()=>setTextColor(!textColor)}>
            Toggle Text Color
        </button>
    </form>
   
    </>
  )
}

export default Input
