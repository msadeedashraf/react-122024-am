import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <div>
      <p>Copy rights reserved {today.getFullYear()}</p>
    </div>
  )
}

export default Footer
