import React from 'react'

const Monkey = ({monkey}) => {
  return (

    <li>
    <div className='card'  style={{width: '24rem'}}>

<img src={monkey.Image} className="card-img-top" alt="..."/>
<div className="card-body">
<h3 className="card-title">{monkey.Name}</h3>
<h6 className="card-title">Location: </h6> <p className="card-text">{monkey.Location}</p>
<h6 className="card-title">Population: </h6> <p className="card-text">{monkey.Population}</p>
<h6 className="card-title">Latitude: </h6> <p className="card-text">{monkey.Latitude}</p>
<h6 className="card-title">Longitude: </h6> <p className="card-text">{monkey.Longitude}</p>


<h6 className="card-title">Details: </h6> 
<p className="card-text">{monkey.Details}</p>
<a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>  
   
   </li>
  )
}

export default Monkey
