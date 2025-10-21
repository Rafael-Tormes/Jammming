import React, { useState } from "react";

export default function Playlist(prop) {
  return (
    <>
      <h3>{prop.playlist.length > 0 && "Raf's Playlist"}</h3>
      <ul>
        {prop.playlist.map((song) => (
          <li key={song.title}>
            <strong>{song.title}</strong> - {song.artist}
          </li>
        ))}
      </ul>
    </>
  );
}
