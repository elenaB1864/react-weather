import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className="mb-3">
              <input
                type="text"
                value="Enter a city..."
                className="form-control"
              />{" "}
            </form>{" "}
          </div>

          <div className="col-4">
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="col-4">
            <button className="btn btn-info">Current </button>
          </div>
        </div>
      </div>

      <h1 className="mb-3">London</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Last updated at: 9:33</li>
              <li>Clear skies</li>

              <li>Wind speed:30km/h</li>
              <li>Humidity:50%</li>
            </ul>
          </div>
          <div className="col-6">
            <h2>20°C</h2>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/
sunny.png"
              alt="Clear"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
