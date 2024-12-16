import './App.css'
import Header from './Header.jsx'
import Footer  from './Footer.jsx'


function App() {

const students = ["Sam","Arash", "Aimee", "Kennedy", "Amber", "Salah"];

const n = Math.floor(Math.random() * 6);

const myName  = students[n];


function myName2()
{
  const students = ["Sam","Arash", "Aimee", "Kennedy", "Amber", "Salah"];

const n = Math.floor(Math.random() * 6);

const myName  = students[n];

return myName;
}



  return (
    <>
    <Header/>

        <h1>This is {myName} </h1>
        <h1>This is {myName2()} </h1>
    <Footer/>
    
    
    </>
  )
}

export default App
