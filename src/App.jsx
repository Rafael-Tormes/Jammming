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
  const [selectedSong, setSelectedSong] = useState({});
  const [playlist, setPlaylist] = useState([]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSelectedSong = (e) => {
    setSelectedSong(e.target.value);
  };

  const addToPlaylist = (selectedSong) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, selectedSong]);
  };

  const songResults = [
    { title: "Me Retiro", artist: "Santana, Grupo Frontera", album: "Test" },
    {
      title: "Como Duele El Amor",
      artist: "Herencia De Grandes",
      album: "Test",
    },
    {
      title: "Me Retiro (Feat. El Komander)",
      artist: "La Edicion de Culaican, El Komander",
      album: "Test",
    },
    { title: "Me Retiro", artist: "Romy Ram", album: "Test" },
  ];

  const tracklist = [
    {
      title: "All Night (feat. Knox Fortune)",
      artist: "Change the Rapper, Knox Fortune",
      album: "Test",
    },
    {
      title: "He Knows My Name",
      artist: "Francesca Battistelli",
      album: "Test",
    },
    { title: "Hustler Musik", artist: "Lil Wayne", album: "Test" },
    { title: "Im so Paid", artist: "Akon, Jeezy, Lil Wayne", album: "Test" },
  ];

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={handleSearchText}
      />
      <SearchResults
        songResults={songResults}
        selectedSong={selectedSong}
        addToPlaylist={addToPlaylist}
      />
      <Playlist playlistTitle={playlist.title} playlist={playlist} />
      <Tracklist tracklist={tracklist} />
      <Track />
    </>
  );
}

export default App;
