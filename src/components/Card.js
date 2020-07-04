import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  cursor: pointer;
  background-color: transparent;
  height: 300px;
  perspective: 1000px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover {
    .card-inner {
      transform: rotateY(180deg);
    }
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card-back {
    background-color: #333;
    color: white;

    transform: rotateY(180deg);

    h1 {
      padding: 20px;
      font-size: 25px;
      border-bottom: 1px #fff solid;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    ul {
      padding: 20px;
    }

    li {
      list-style: none;
      padding-bottom: 10px;
    }
  }
`;

export default function Card({ data = {} }) {
  console.log(data);
  return (
    <CardStyled className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="card-back">
          <h1>{data.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {data.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {data.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {data.birthday}
            </li>
            <li>
              <strong>Status:</strong> {data.status}
            </li>
          </ul>
        </div>
      </div>
    </CardStyled>
  );
}
