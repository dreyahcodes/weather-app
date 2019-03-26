import React from "react";
import styled from "styled-components";

const FormEl = styled.div`
  input[type="text"] {
    background-color: transparent;
    border: 0;
    border-bottom: solid 1px #f16051;
    width: 30%;
    padding-bottom: 4px;
    color: #fff !important;
    font-weight: lighter;
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-right: 20px;
    font-size: 20px;
  }

  input[type="text"] {
    outline: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #2c3e50 inset;
    -webkit-text-fill-color: #fff !important;
  }

  button {
    border: 0;
    padding: 8px 20px;
    margin: 0 2px;
    border-radius: 2px;
    font-weight: lighter;
    letter-spacing: 1px;
    font-size: 15px;
    cursor: pointer;
    background-color: #f16051;
    color: #fff;
    font-weight: 400;
  }

  button:active {
    outline: none;
  }

  @media only screen and (max-width: 990px) {
    input[type="text"] {
      width: 37%;
    }
  }
  @media only screen and (max-width: 880px) {
    input[type="text"] {
      width: 60%;
    }
  }
`;

const Form = props => (
  <FormEl>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city..." />
      <input type="text" name="country" placeholder="country..." />
      <button>Get Weather</button>
    </form>
  </FormEl>
);

export default Form;
