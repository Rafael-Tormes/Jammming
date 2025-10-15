import React, { useState } from "react";

export default function SearchBar(prop) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searchBar">Search for a song</label>
        <input
          id="searchBar"
          type="text"
          value={prop.searchText}
          onChange={prop.onSearchTextChange}
          placeholder="Start typing..."
        ></input>
      </form>
      <button type="submit">Search for "{prop.searchText}"</button>
    </>
  );
}
