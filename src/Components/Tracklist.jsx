import React, { useState } from "react";

export default function Tracklist(prop) {
  return (
    <>
      <h3>Queue</h3>
      <ul>
        {prop.tracklist.map((song) => (
          <li key={song.title}>
            <strong>{song.title}</strong> - {song.artist}
          </li>
        ))}
      </ul>
    </>
  );
}
