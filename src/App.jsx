import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const songResults = [
    { title: "Me Retiro", artist: "Santana, Grupo Frontera" },
    { title: "Como Duele El Amor", artist: "Herencia De Grandes" },
    {
      title: "Me Retiro (Feat. El Komander)",
      artist: "La Edicion de Culaican, El Komander",
    },
    { title: "Me Retiro", artist: "Romy Ram" },
  ];

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={handleSearchText}
      />
      <SearchResults songResults={songResults} />
    </>
  );
}

export default App;
