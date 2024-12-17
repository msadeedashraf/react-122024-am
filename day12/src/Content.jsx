

const Content = () => {

    const namechange = () => {
        const myname = ["Sam", "Aimee", "Arash", "Kennedy"];
        const i = Math.floor(Math.random()*4);
        return myname[i];
      }
  return (
    <h1>Hello {namechange()}</h1>
  )
}

export default Content
