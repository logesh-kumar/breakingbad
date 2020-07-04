import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Searchbox from "./Searchbox";
import { BASE_URL } from "../config";
import Masanry from "./Masanry";

const HomeStyled = styled.div``;

async function getCharacters(setCharacters, setLoading, searchString = "") {
  const res = await axios.get(`${BASE_URL}/characters?name=${searchString}`);
  setCharacters(res.data);
  setLoading(false);
}

export default function Home() {
  const [searchString, setSearchString] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters(setCharacters, setLoading, searchString);
    return () => {};
  }, [searchString]);

  return (
    <HomeStyled>
      <Searchbox
        onChange={(e) => setSearchString(e.target.value)}
        value={searchString}
        placeholder={"Search..."}
      />
      <Masanry characters={characters} loading={loading} />
    </HomeStyled>
  );
}
