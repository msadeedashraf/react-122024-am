import Monkey from "./Monkey"

const Monkeylist = ({monkeyList}) => {
  return (
    <>

{
      monkeyList.length ? 
      (
        <ul>
        {
        monkeyList.map((monkey)=>(
           <Monkey monkey={monkey}/>
              ))
        }
      </ul>
      ) 
      :
      ( <p style={{marginTop:'2rem',marginBottom:'2rem', color:'red'}} >Your list is empty</p> )
      
      }


    
  </>

  )
}

export default Monkeylist
