/* eslint-disable react/prop-types */
//import React from 'react'

const Footer = ({length, year}) => {
  return (
   <footer>

    <p>{length} List {length === 1 ? "item" : "items"} , copyright &copy; {year}</p>
   </footer>
  )
}

export default Footer
