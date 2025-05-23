import React from "react";

const Searchjob = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search Job</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Searchjob;
