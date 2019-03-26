import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import styled from "styled-components";
import backgroundImage from "./img/bg.jpg";

const AppEl = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Merriweather:100,200,300,300i,400,400i,700");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400,700");
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400");

  body {
    font-family: "Open Sans", serif;
  }

  .wrapper {
    background: linear-gradient(to right, #e67e22, #e74c3c);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    height: 90vh;
    background: #283e51;
    box-shadow: 0px 13px 40px -13px rgba(0, 0, 0, 0.75);
    /* width: 80%; */
    margin: 0 auto;
  }

  .title-container {
    height: 90vh;
    background: url(${backgroundImage}) center center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
  }

  .form-container {
    background-color: #2c3e50;
    height: 90vh;
    padding-top: 100px;
    padding-left: 50px;
  }

  .weather__info {
    width: 60%;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 2px;
  }

  .weather__key {
    color: #f16051;
    border-bottom: solid 2px rgba(255, 255, 255, 0.06);
    padding: 20px 0 20px 0;
    font-weight: 400;
  }

  .weather__key:last-child {
    border: 0;
  }

  .weather__value {
    color: #fff;
    font-weight: 200;
  }

  .weather__error {
    color: #f16051;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 200;
  }

  @media only screen and (max-width: 776px) {
    .title-container {
      width: 100%;
    }
    .form-container {
      width: 100%;
    }

    .wrapper {
      height: auto;
      padding: 30px 0;

      .main {
        margin: 0 20px;
        height: auto;
      }
    }
  }
`;

const API_KEY = "f1749f4749ee185e386e38a9ed161165";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  };
  render() {
    return (
      <AppEl>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppEl>
    );
  }
}

export default App;
