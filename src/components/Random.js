/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

const Random = ({ onSetItem }) => {
  const [randomItem, setRandomItem] = useState([])

  useEffect(() =>{
    fetchMenuItems();
  }, []);

  const fetchMenuItems = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then(data => {
      setRandomItem(data.meals[0])
      onSetItem(data.meals[0]);
    })
    .catch(error => console.error('Error:', error))
  }


  const handleRandomClick = (term) => {
    fetchMenuItems();
  }

  return(
    <button title="random" onClick={handleRandomClick}>Random</button>
  );
}

export default Random;