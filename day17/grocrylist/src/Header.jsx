/* eslint-disable react/prop-types */


const Header = ({title}) => {
    //const headingStyles = 
  return (
<header>
    <h1>{title}</h1>
    </header>  )
}

Header.defaultProps = {

  title:'My G List'
}


export default Header
