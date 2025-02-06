import { useEffect, useState } from 'react'
import './App.css'

import { NumericFormat } from 'react-number-format';

function App() {
const [preState, setPreState] = useState("");
const [curState, setCurState] = useState("");
const [input, setInput] = useState("0");

const [operator, setOperator] = useState(null);
const [total, setTotal] = useState(false);

const inputNum = (e) => {
  if (curState.includes(".") && e.target.innerText === ".") return;

  console.log(e.target.innerText);
  
  if (total) {
    setPreState("");
  }
  
  console.log(curState);
  curState
  ? setCurState((pre) => (pre + e.target.innerText) )
  : setCurState(e.target.innerText);
  
  //setInput(curState);
  //console.log(preState);

  console.log(curState);

  //console.log(curState);

  setTotal(false);


};

useEffect(() => {
  setInput(curState);

}, [curState]);




useEffect(() => {
  setInput("0");
}, []);





const operatorType = (e) => {

  setTotal(false);
  setOperator(e.target.innerText);
  if (curState === "") return;
  if (preState !== "") {
    //console.log("checking the operator to do calculations")
    equals();
  } else {
    //console.log("prestate is empty")
    setPreState(curState);
    setCurState("");
  }

};
const equals = (e) => {

  if (e?.target.innerText === "=") {
    setTotal(true);
  }
  let cal;
  switch (operator) {
    case "/":
      cal = precisionNumber(parseFloat(preState) / parseFloat(curState));
      break;

    case "+":
      cal = precisionNumber(parseFloat(preState) + parseFloat(curState));
      break;
    case "X":
      cal =   precisionNumber(parseFloat(preState) * parseFloat(curState));
      break;
    case "-":
      cal = precisionNumber(parseFloat(preState) - parseFloat(curState));
      break;
    default:
      return;
  }
  setInput("");
  setPreState(cal);
  setCurState("");



};

/*
function trailingZeros(str)
{
  console.log(str);
  console.log(str.toFixed(10));
  console.log(str.toFixed(10).replace(/0+$/, ''));
  return str.toFixed(10).replace(/0+$/, '');
}
*/

function precisionNumber(str)
{
  console.log(str);
  console.log(str.toFixed(10));
  console.log(str.toFixed(10).replace(/\.?0+$/, ''));
  return str.toFixed(10).replace(/\.?0+$/, '');
}






const minusPlus = () => {
if (curState.charAt(0)=== "-")
  {
    
    setCurState(curState.substring(1))
    
    

  }
  else
  {
    
setCurState("-"+curState)

  }



};
const reset = () => {
  setPreState("");
  setCurState("");
  setInput("0");

};
const percent = () => {
  preState
  ? setCurState(String((parseFloat(curState)/100)*preState))
  : setCurState(String(parseFloat(curState) / 100));


};
  
  return (
    <>
  <div className='container'>
      <div className='wrapper'>
     
        <div className='screen'>
        {input !== "" || input === "0" ? (
            <NumericFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumericFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <div className='btn light-gray' onClick={reset}>
          AC
        </div>
        <div className='btn light-gray' onClick={percent}>
          %
        </div>
        <div className='btn light-gray' onClick={minusPlus}>
          +/-
        </div>
        <div className='btn orange' onClick={operatorType}>
          /
        </div>
        <div className='btn' onClick={inputNum}>
          7
        </div>
        <div className='btn' onClick={inputNum}>
          8
        </div>
        <div className='btn' onClick={inputNum}>
          9
        </div>
        <div className='btn orange' onClick={operatorType}>
          X
        </div>
        <div className='btn' onClick={inputNum}>
          4
        </div>
        <div className='btn' onClick={inputNum}>
          5
        </div>
        <div className='btn' onClick={inputNum}>
          6
        </div>
        <div className='btn orange' onClick={operatorType}>
          +
        </div>
        <div className='btn' onClick={inputNum}>
          1
        </div>
        <div className='btn' onClick={inputNum}>
          2
        </div>
        <div className='btn' onClick={inputNum}>
          3
        </div>
        <div className='btn orange' onClick={operatorType}>
          -
        </div>
        <div className='btn zero' onClick={inputNum}>
          0
        </div>
        <div className='btn' onClick={inputNum}>
          .
        </div>
        <div className='btn' onClick={equals}>
          =
        </div>
      </div>
    </div>
    </>
  )
}

export default App
