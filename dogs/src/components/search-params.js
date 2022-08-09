import React, { useState, useEffect } from "react";
import RandomImage from "./random-image";

const SearchParams = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    requestDogs();
  }, []);

  async function requestDogs() {
    const res = await fetch("https://dog.ceo/api/breed/hound/images");
    console.log(res);

    const json = await res.json();
    setDogs(json.dogs);
    console.log(json.dogs);

    console.log(dogs);
  }

  return (
    <div className="search-params">
      <RandomImage />
      <p>List of dogs</p>
    </div>
  );
};

export default SearchParams;
