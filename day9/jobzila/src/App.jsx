import './App.css';
import React from 'react';


const Mygreetings = (props) => {
  return (
    <div>
      <h1>Welcome {props.name} to CBC!</h1>
    </div>
  );
};


function App() {
  const myName = "Hussam";
  const myElement = (
    <div>
      <h1 className="heading">I am a Header.</h1>
      <h1 className="heading">I am a Header too.</h1>
    </div>
  );
  const dateTime = new Date();

  return (
    <>
      <Mygreetings name="Arash" />

      <h1>My Name is {myName}, and my age is {1 + 39}</h1>
      {myElement}

      <h1>{dateTime.getHours() < 12 ? "Good Morning" : "Good Evening"}</h1>
    </>
  );
}

export default App;
