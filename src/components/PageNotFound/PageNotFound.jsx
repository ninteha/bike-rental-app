import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>There is nothing to see...</h1>
      <h3>
        Go back to: <Link to="/">Main Page</Link>
      </h3>
    </div>
  );
};

export default PageNotFound;
