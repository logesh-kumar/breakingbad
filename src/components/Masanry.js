import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Spinner from "./Spinner";

const MasonryStyled = styled.div`
  display: grid;
  grid-template-columns: ${(prop) =>
    prop.loading ? "repeat(1, 1fr)" : "repeat(4, 1fr)"};
  gap: 1rem;

  @media (min-width: 992px) {
    &:hover {
      .card-inner {
        &:not(:hover) {
          opacity: 0.4;
        }
      }
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default function Masanry({ characters, loading }) {
  return (
    <MasonryStyled loading={loading}>
      {loading ? (
        <Spinner />
      ) : (
        characters.map((c) => <Card key={c.char_id} data={c} />)
      )}
    </MasonryStyled>
  );
}
