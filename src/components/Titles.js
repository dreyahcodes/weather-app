import React from "react";
import styled from "styled-components";

const TitleEl = styled.div`
  .title-container__title {
    font-size: 50px;
    letter-spacing: 2px;
    line-height: 1.3;
    font-family: "Roboto Slab", serif;
  }

  .title-container__subtitle {
    font-style: italic;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 1.5;
    font-family: "Merriweather", serif;
  }
`;

const Titles = () => (
  <TitleEl>
    <h1 className="title-container__title">Weather Finder</h1>
    <h3 className="title-container__subtitle">
      Find out temperature, conditions and more...
    </h3>
  </TitleEl>
);

export default Titles;
