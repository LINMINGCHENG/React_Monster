import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Cardlist } from "./components/card-list/Cardlist";

function App() {
   const [monsters,setMonsters] = useState(['']);
   const [searchField,setSearchField] = useState('');
   const []


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setMonsters(result.data);
    };
    fetchData();
  }, []);

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };


   
  return (
        <div className="app">
          <h1>Monsters Rolododex</h1>
          <input type = "search"
          placeholder = "Search master"
          onChange = {onSearchChange}
          />
          <Cardlist monsters={monsters}/>
      </div>
  );
}

export default App;
