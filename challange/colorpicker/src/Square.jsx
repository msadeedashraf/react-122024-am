import React from 'react'

const Square = ({colorValue, setColorValue, hexValue, textColor}) => {
  return (
    <>
   <section 
    className='square'
    style={
        {
            backgroundColor:colorValue, 
            color:textColor? '#000' : '#fff'

        }
}
   >

<p> {colorValue? colorValue:"Empty Value"} </p>
<p>{hexValue?hexValue:null}</p>
   </section >
    </>
  )
}

export default Square
