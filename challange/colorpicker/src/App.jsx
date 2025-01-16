
import { useState } from 'react'
import './App.css'
import Input from './Input'
import Square from './Square'

function App() {
  
const [colorValue, setColorValue] = useState('yellow');
const [hexValue, setHexValue] = useState('#FFFFFF');
const [textColor, setTextColor] = useState('grey');
  return (
    <>
      <Square 
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        textColor={textColor}
        
      />
      <Input colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        textColor={textColor}
        setTextColor = {setTextColor}
        />
    </>
  )
}


export default App
