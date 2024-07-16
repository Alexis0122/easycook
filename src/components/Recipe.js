import React from "react";
import { useEffect, useState } from "react";

function Recipe({ onSetItem }){
  const [menuItem, setMenuItem] = useState([])
  const [searchItem, setSearchItem] = useState('')

  useEffect(() =>{
    fetchMenuItems();
  }, []);

  const fetchMenuItems = (search = '') => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
    .then(data => {
      setMenuItem(data.meals[0]);
      onSetItem(data.meals[0]);
    })
    .catch(error => console.error('Error:', error))
  }

  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
  }

  const handleKeyPress = (event) =>{
    if (event.key === 'Enter'){
      fetchMenuItems(searchItem);
    }
  }

  return(
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search"
      />
  )
}

export default Recipe;