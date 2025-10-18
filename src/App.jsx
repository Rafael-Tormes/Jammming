import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from "./Components/Playlist";
import Tracklist from "./Components/Tracklist";
import Track from "./Components/Track";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handlePlaylistTitle = (e) => {
    setPlaylistTitle(e.target.value);
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

  const playlist = [
    { title: "Sorry 4 The Wait", artist: "Lil Wayne" },
    { title: "Red Lights", artist: "Wale the Sage" },
    { title: "NEVER GET USED TO THIS", artist: "Forrest Frank, JVKE" },
    { title: "Bound 2", artist: "Kanye West" },
  ];

  const tracklist = [
    {
      title: "All Night (feat. Knox Fortune)",
      artist: "Change the Rapper, Knox Fortune",
    },
    { title: "He Knows My Name", artist: "Francesca Battistelli" },
    { title: "Hustler Musik", artist: "Lil Wayne" },
    { title: "Im so Paid", artist: "Akon, Jeezy, Lil Wayne" },
  ];

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={handleSearchText}
      />
      <SearchResults songResults={songResults} />
      <Playlist playlistTitle={playlistTitle} playlist={playlist} />
      <Tracklist tracklist={tracklist} />
      <Track />
    </>
  );
}

export default App;
