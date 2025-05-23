import React from "react";

const Jobitem = ({ item }) => {
  return (
    <div class="job-listing">
      <h3>{item.title}</h3>
      <p>{item.company}</p>
      <p>{item.location}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Jobitem;
