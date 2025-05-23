import Joblist from "./Joblist";

import React from "react";

const Joncontent = ({ items }) => {
  return (
    <>
      {items.length ? (
        <Joblist items={items} />
      ) : (
        <p style={{ color: "orange", marginTop: "2rem" }}>No job data found.</p>
      )}
    </>
  );
};

export default Joncontent;
