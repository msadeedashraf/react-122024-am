import React from "react";
import Jobitem from "./Jobitem";
const Joblist = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Jobitem key={item.id} item={item} />
      ))}
    </>
  );
};

export default Joblist;
