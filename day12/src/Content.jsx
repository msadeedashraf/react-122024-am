

const Content = () => {

    const namechange = () => {
        const myname = ["Sam", "Aimee", "Arash", "Kennedy"];
        const i = Math.floor(Math.random()*4);
        return myname[i];
      }

      const handleClick = () => {

        console.log("Clicked it")
      }

      const handleClick2 = (name) => {

        console.log(`${name} Clicked it`)
      }
      
      const handleClick3 = (e) => {
        console.log(e);
        console.log(e.target.innerText);
      }




  return (
    <main>
        <p>

        <h1>Hello {namechange()}</h1>
        </p>
<button  onClick={handleClick}>Click it</button>
<button  onClick={() => handleClick2('Alan')}>Click it</button>
<button  onClick={(e) => handleClick3(e)}>Click 3</button>



    </main>
  )
}

export default Content
