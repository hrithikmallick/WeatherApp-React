import React, { useState, useEffect } from "react";
import "./App.css";
export const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kolkata");
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=827788fcf1df41ec70e9c1d2faaf39cf`;
        const res = await fetch(url);
        const arrRes = await res.json();
        // console.log(arrRes);
        setCity(arrRes.main);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <form>
            <input
              type="text"
              name="Cityname"
              placeholder="Enter a City Name"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              autoComplete="off"
            />
          </form>
          {!city ? (
            <h1 className="errmsg">no city found</h1>
          ) : (
            <div className="box-city">
              <h1 className="ctname  "> {search}</h1>{" "}
              <div id="temp" className="temp">
                <span>Temp</span> {city.temp}&deg;C
              </div>
              <div className="tempm lead mt-2">
                <div id="tempmin">
                  <span>Min </span>
                  {city.temp_min}&deg;C
                </div>
                <div>||</div>
                <div id="tempmax">
                  <span>Max </span>
                  {city.temp_max}&deg;C
                </div>
              </div>
              <p className="para">@copywrite Hrithik Mallick</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default App;
