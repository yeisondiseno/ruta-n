/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";

const url = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  console.log("characters", characters);

  return (
    <>
      <h1>Este es un título</h1>
      <h2>titulo</h2>
      <div className="characters">
        {characters?.map((cha) => (
          <Card key={cha.id} char={cha} />
        ))}
      </div>
    </>
  );
}

export default App;
