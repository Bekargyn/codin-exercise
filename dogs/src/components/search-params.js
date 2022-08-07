import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    requestDogs();
  }, []);

  async function requestDogs() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(res);

    const json = await res.json();
    setDogs(json.dogs);

    console.log(dogs);
  }

  return (
    <div className="search-params">
      <p>List of dogs</p>
    </div>
  );
};

export default SearchParams;
