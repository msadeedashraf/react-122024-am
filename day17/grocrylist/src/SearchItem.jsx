

const SearchItem = ({search, setSearch}) => {
  return (
   <form className='searchForm' onSubmit={(e) => e.preventDefault() }   action="">
   <label htmlFor="search">Search</label>
   <input 
        type="text" 
        name="" 
        role='searchbox' 
        placeholder='search items' 
        id="search" 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
   />
   </form>
  )
}

export default SearchItem
