import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

function YearlyReporter1({ user1, password1 }) {
  const [lineups, setlineups] = useState([
    {
      Points: 2,
      Lineup: [
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Markel Brown",
        "Nicolò Virginio",
        "Tariq Owens",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 12,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Jaron Johnson",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 23,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Guglielmo Caruso",
        "Markel Brown",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Guglielmo Caruso",
        "Markel Brown",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 25,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
      ],
    },
    {
      Points: 14,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 8,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 8,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Matteo Librizzi",
        "Nicolò Virginio",
      ],
    },
    {
      Points: 9,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Nicolò Virginio",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
      ],
    },
    {
      Points: 1,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 4,
      Lineup: [
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
      ],
    },
    {
      Points: 12,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 7,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 87,
      Lineup: [
        "Colbey Ross",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 12,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 166,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Jaron Johnson",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 8,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Tariq Owens",
      ],
    },
    {
      Points: 15,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Giovanni De Nicolao",
        "Justin Reyes",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Nicolò Virginio",
        "Tariq Owens",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Nicolò Virginio",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 8,
      Lineup: [
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
      ],
    },
    {
      Points: 4,
      Lineup: [
        "Colbey Ross",
        "Justin Reyes",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 24,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 4,
      Lineup: [
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Tariq Owens",
      ],
    },
    {
      Points: 38,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
      ],
    },
    {
      Points: 40,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Markel Brown",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Markel Brown",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Justin Reyes",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Markel Brown",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Colbey Ross",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 1,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 20,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 22,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Justin Reyes",
      ],
    },
    {
      Points: 18,
      Lineup: [
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Jaron Johnson",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 15,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Matteo Librizzi",
        "Nicolò Virginio",
      ],
    },
    {
      Points: 4,
      Lineup: [
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Jaron Johnson",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 9,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Jaron Johnson",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 13,
      Lineup: [
        "Colbey Ross",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Guglielmo Caruso",
        "Jaron Johnson",
      ],
    },
    {
      Points: 18,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 7,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Jaron Johnson",
        "Markel Brown",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Colbey Ross",
        "Jaron Johnson",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
      ],
    },
    {
      Points: 11,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 2,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
        "Tariq Owens",
      ],
    },
    {
      Points: 9,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Giancarlo Ferrero",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 32,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Markel Brown",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Jaron Johnson",
        "Tariq Owens",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
      ],
    },
    {
      Points: 8,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 15,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Tariq Owens",
      ],
    },
    {
      Points: 4,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 4,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 7,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 5,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 7,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giancarlo Ferrero",
        "Guglielmo Caruso",
        "Justin Reyes",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Markel Brown",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 8,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Matteo Librizzi",
      ],
    },
    {
      Points: 3,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Markel Brown",
        "Nicolò Virginio",
      ],
    },
    {
      Points: 18,
      Lineup: [
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
    {
      Points: 0,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Markel Brown",
      ],
    },
    {
      Points: 44,
      Lineup: [
        "Colbey Ross",
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Giovanni De Nicolao",
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Tariq Owens",
      ],
    },
    {
      Points: 6,
      Lineup: [
        "Andriu Tomas Woldetensae",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Jaron Johnson",
        "Justin Reyes",
      ],
    },
    {
      Points: 10,
      Lineup: [
        "Jaron Johnson",
        "Justin Reyes",
        "Markel Brown",
        "Matteo Librizzi",
        "Tariq Owens",
      ],
    },
    {
      Points: 4,
      Lineup: [
        "Giancarlo Ferrero",
        "Giovanni De Nicolao",
        "Guglielmo Caruso",
        "Justin Reyes",
        "Markel Brown",
      ],
    },
  ]);
  function getyearlyreport() {
    const url = document.getElementById("url").value;
    const teamname = document.getElementById("teamname").value;
    const fetchpayload = "{" + "teamname:" + teamname + ",url:" + url + "}";

    axios
      .post("http://80.240.21.17:8006", fetchpayload)
      .then((resp) => {
        const receivedinfo = resp.data;
        console.log(receivedinfo);
        setlineups(receivedinfo);
      })
      .catch((error) => console.log(error));
  }

  const numDescending = [...lineups].sort((a, b) => b.Points - a.Points);

  function SearchBox() {
    return (
      <div>
        {" "}
        <div>
          {" "}
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="TeamID GOES HERE"
          />
          <input
            type="text"
            className="form-control"
            id="teamname"
            placeholder="TEAMNAME GOES HERE"
          />
          <div style={{ "text-align": "center" }}>
            {" "}
            <button
              class="roundbutton"
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "65px",
                width: "185px",
              }}
              onClick={() => {
                getyearlyreport();
              }}
            >
              Click To Fetch New Yearly Report
            </button>{" "}
          </div>
        </div>{" "}
      </div>
    );
  }

  function PlayerLineup(group) {
    const allplayers = group.map((player) => <div key={player}>{player}</div>);

    return allplayers;
  }

  function LineupBox() {
    const playergroups = numDescending.map((lineup) => (
      <div style={{ "text-align": "center" }} key={lineup.Lineup}>
        Line-up : {lineup.Lineup.join(" , ")} POINTS : {lineup.Points}
      </div>
    ));

    return <div>{playergroups}</div>;
  }

  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      {" "}
      <SearchBox />
      <LineupBox />{" "}
    </div>
  );
}
export default YearlyReporter1;
