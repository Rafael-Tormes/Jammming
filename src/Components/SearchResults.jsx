import React, { useState } from "react";

export default function SearchResults(prop) {
  return (
    <>
      <h2>Results</h2>
      <ul>
        {prop.songResults.map((song) => {
          <li key={song.title}>
            <strong>{song.title}</strong> - {song.artist}
          </li>;
        })}
      </ul>
    </>
  );
}
