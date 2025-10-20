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
  const [selectedSong, setSelectedSong] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handlePlaylistTitle = (e) => {
    setPlaylistTitle(e.target.value);
  };

  const handleSelectedSong = (e) => {
    setSelectedSong(e.target.value);
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

  const playlist = [
    { title: "Sorry 4 The Wait", artist: "Lil Wayne", album: "Test" },
    { title: "Red Lights", artist: "Wale the Sage", album: "Test" },
    {
      title: "NEVER GET USED TO THIS",
      artist: "Forrest Frank, JVKE",
      album: "Test",
    },
    { title: "Bound 2", artist: "Kanye West", album: "Test" },
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
      <SearchResults songResults={songResults} />
      <Playlist
        playlistTitle={playlistTitle}
        playlist={playlist}
        selectedSong={handleSelectedSong}
      />
      <Tracklist tracklist={tracklist} />
      <Track />
    </>
  );
}

export default App;
