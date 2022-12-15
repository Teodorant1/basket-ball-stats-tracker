import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { ReactComponent as Crossedarrows } from "./icons/🦆 icon _random_.svg";
import { ReactComponent as Basketball } from "./icons/Vector.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaArrowDown, FaPlus, FaTrashAlt } from "react-icons/fa";

function App({ user1, password1 }) {
  const [username, setuser] = useState(user1);
  const [password, setpassword] = useState(password1);
  const [quadrant, setquadrant] = useState({
    quadrantnumber: 2,
    timeline: [
      {
        subtimeline: {
          score: 5,
          slice: [
            { name: "David Michineau", points: 0 },
            { name: "Jordan Howard", points: 0 },
            { name: "JaCorey Williams", points: 0 },
            { name: "Elijah Stewart", points: 0 },
            { name: "Emmitt Williams", points: 0 },
          ],
          enemyscore: 5,
          time: 2,
        },
        id: 1,
      },
      {
        subtimeline: {
          score: 4,
          slice: [
            { name: "Simone Zanotti", points: 0 },
            { name: "David Michineau", points: 0 },
            { name: "Jordan Howard", points: 0 },
            { name: "JaCorey Williams", points: 0 },
            { name: "Elijah Stewart", points: 0 },
          ],
          enemyscore: 4,
          time: 1,
        },
        id: 2,
      },
      {
        subtimeline: {
          score: 4,
          slice: [
            { name: "Simone Zanotti", points: 0 },
            { name: "David Michineau", points: 0 },
            { name: "JaCorey Williams", points: 1 },
            { name: "Elijah Stewart", points: 3 },
            { name: "Robert Johnson", points: 0 },
          ],
          enemyscore: 0,
          time: 1,
        },
        id: 3,
      },
      {
        subtimeline: {
          score: 4,
          slice: [
            { name: "Simone Zanotti", points: 0 },
            { name: "David Michineau", points: 0 },
            { name: "Elijah Stewart", points: 0 },
            { name: "Emmitt Williams", points: 0 },
            { name: "Robert Johnson", points: 0 },
          ],
          enemyscore: 4,
          time: 1,
        },
        id: 4,
      },
      {
        subtimeline: {
          score: 10,
          slice: [
            { name: "Simone Zanotti", points: 1 },
            { name: "Nicolò Dellosto", points: 0 },
            { name: "David Michineau", points: 4 },
            { name: "Elijah Stewart", points: 0 },
            { name: "Robert Johnson", points: 0 },
          ],
          enemyscore: 5,
          time: 1,
        },
        id: 5,
      },
      {
        subtimeline: {
          score: 3,
          slice: [
            { name: "Simone Zanotti", points: 1 },
            { name: "Lorenzo Uglietti", points: 0 },
            { name: "David Michineau", points: 0 },
            { name: "Jordan Howard", points: 2 },
            { name: "Elijah Stewart", points: 0 },
          ],
          enemyscore: 0,
          time: 1,
        },
        id: 6,
      },
      {
        subtimeline: {
          score: 4,
          slice: [
            { name: "Lorenzo Uglietti", points: 0 },
            { name: "David Michineau", points: 0 },
            { name: "Andrea Zerini", points: 0 },
            { name: "Jordan Howard", points: 0 },
            { name: "Elijah Stewart", points: 4 },
          ],
          enemyscore: 0,
          time: 1,
        },
        id: 7,
      },
    ],
    teamname: "GeVi Napoli Basket",
  });
  const [stage, setstage] = useState(0);

  const [show, setshow] = useState(-10);
  const [xaxis, setxaxis] = useState(window.innerHeight);
  const [yaxis, setyaxis] = useState(window.innerWidth);
  const [gameID, setgameID] = useState("00000");

  function getRefactoredQuadrants(QuarterNumber, teamID) {
    const fetchpayload =
      "{ method:getslice,username:" +
      username +
      ",password:" +
      password +
      ",teamID:" +
      teamID +
      ",QuarterNumber:" +
      QuarterNumber +
      "}";

    axios
      .post("http://144.202.69.49:8002", fetchpayload)
      .then((resp) => {
        const receivedinfo = resp.data;
        setquadrant(receivedinfo);
      })
      .catch((error) => console.log(error));
  }

  function LeftClickDropdown() {
    return (
      <div
        class={show}
        style={{
          borderColor: "black",
          borderRadius: 20,
          backgroundColor: "#e79e30",
          position: "absolute",
          top: yaxis,
          left: xaxis,
          zIndex: show,
        }}
      >
        <div class="flex-container">
          {" "}
          <div>
            {" "}
            <button
              style={{
                backgroundColor: "#cccccc",
                height: "45px",
                width: "125px",
              }}
              onContextMenu={(event) => {
                event.preventDefault();
                getRefactoredQuadrants(1, 2);
              }}
              onClick={() => {
                getRefactoredQuadrants(1, 1);
              }}
            >
              1
            </button>
            <button
              style={{
                backgroundColor: "#cccccc",
                height: "45px",
                width: "125px",
              }}
              onContextMenu={(event) => {
                event.preventDefault();
                getRefactoredQuadrants(2, 2);
              }}
              onClick={() => {
                getRefactoredQuadrants(2, 1);
              }}
            >
              2
            </button>
            <button
              style={{
                backgroundColor: "#cccccc",
                height: "45px",
                width: "125px",
              }}
              onContextMenu={(event) => {
                event.preventDefault();
                getRefactoredQuadrants(3, 2);
              }}
              onClick={() => {
                getRefactoredQuadrants(3, 1);
              }}
            >
              3
            </button>
            <button
              style={{
                backgroundColor: "#cccccc",
                height: "45px",
                width: "125px",
              }}
              onContextMenu={(event) => {
                event.preventDefault();
                getRefactoredQuadrants(4, 2);
              }}
              onClick={() => {
                getRefactoredQuadrants(4, 1);
              }}
            >
              4
            </button>
          </div>
        </div>
      </div>
    );
  }

  function toggleQuadrants() {
    if (show === -10) {
      setshow(10);
    } else {
      setshow(-10);
    }
  }

  function ImprovizedDropDown() {
    return (
      <div class="floatleft">
        {" "}
        <button
          onClick={(event) => {
            event.preventDefault();
            toggleQuadrants();
            setyaxis(event.pageY + 30);
            setxaxis(event.pageX - 35);
          }}
          style={{
            backgroundColor: "#cccc",
            height: "65px",
            width: "155px",
          }}
          class="roundbutton"
        >
          {" "}
          Pick Quadrant <FaArrowDown />{" "}
        </button>{" "}
      </div>
    );
  }

  function addplayer(player, time) {
    const newplayer1 = { name: player.name, points: player.points, time: time };

    const comparisonarray0 = comparisonarray;

    const slice0 = comparisonarray0.subtimeline.slice.slice();

    slice0.push(newplayer1);

    const newcomparisonarray = {
      subtimeline: {
        score: comparisonarray0.subtimeline.score,
        slice: slice0,
        time: comparisonarray0.subtimeline.time,
      },
      id: comparisonarray0.id,
    };

    setcomparisonarray(newcomparisonarray);
  }
  function removeplayer(player) {
    const comparisonarray0 = comparisonarray;
    var slice1 = comparisonarray0.subtimeline.slice;
    var slice2 = slice1.filter(function (player0) {
      return player0 !== player;
    });

    const newcomparisonarray = {
      subtimeline: {
        score: comparisonarray0.subtimeline.score,
        slice: slice2,
        time: comparisonarray0.subtimeline.time,
      },
      id: comparisonarray0.id,
    };
    setcomparisonarray(newcomparisonarray);
  }

  function getLineupPoints(props) {
    const props1 = props;
    var sum = props1.reduce(
      (total, currentvalue) => total + currentvalue.points,
      0
    );

    return sum;
  }

  const [comparisonarray, setcomparisonarray] = useState({
    subtimeline: {
      score: 3,
      slice: [
        { name: "Tariq Owens", points: 0, time: 1 },
        { name: "Jaron Johnson", points: 0, time: 1 },
        { name: "Markel Brown", points: 3, time: 1 },
        { name: "Andriu Tomas Woldetensae", points: 0, time: 1 },
        { name: "Giovanni De Nicolao", points: 0, time: 1 },
      ],
      time: 1,
    },
    id: 85,
  });

  // Slice
  // Player1 Player2 Player3 Player4 Player5
  // player exchange button
  //
  // step 1 = select slice
  // step 2 = remove/exchange player
  // step 3 = calculate points
  function ComparisonSlice({ props }) {
    const slice = props.subtimeline.slice;
    const slicebox = slice.map((player) => (
      <div
        class="roundtiny"
        style={{ backgroundColor: "#cccccc", height: 150, width: 150 }}
        key={player.name}
      >
        <button
          class="roundbutton rightbutton orangebutton"
          onClick={() => {
            removeplayer(player);
          }}
        >
          {" "}
          <FaTrashAlt />{" "}
        </button>
        <div class="playerbox floatleft ">
          <div class="scaledbasketball floatleft ">{<Basketball />}</div>
          {player.name}
        </div>
        <div class="floatleft "> | Points {player.points} |</div>
      </div>
    ));

    return (
      <div class="greybox rightdiv" style={{ height: window.outerHeight }}>
        <SearchBar />
        <div class="bigtext"> Your Combination </div>
        <div>
          <div class="flex-container">{slicebox}</div>
          <div
            class="p-30 mb-20 bg-warning text-dark"
            style={{ width: 800, height: 5 }}
          >
            {" "}
            <div class="bigtext"> | Based on 5 players | </div>
            <div class="round" style={{ backgroundColor: "#00ff99" }}>
              Lineup Score:
              {getLineupPoints(comparisonarray.subtimeline.slice)}| Time:{" "}
              {props.subtimeline.time}
              <div> | Lineup: {props.id} |</div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
  // this expects a timeline
  function SliceArray({ props1 }) {
    const slicearray = props1;
    const slicearraybox = slicearray.map((array) => (
      <div style={{ width: 1040 }} key={array.id}>
        {""}

        <div class="flex-container">
          {" "}
          {array.subtimeline.slice.map((player) => {
            return (
              <div
                class="roundsmall "
                style={{ backgroundColor: "#cccccc", width: 400 }}
                key={player.name}
              >
                {" "}
                <div class="rightbutton">
                  {" "}
                  <button
                    style={{ backgroundColor: "#cccccc" }}
                    class="roundbutton orangebutton"
                    onClick={() => {
                      addplayer(player, array.subtimeline.time);
                    }}
                  >
                    {" "}
                    <FaPlus />{" "}
                  </button>{" "}
                </div>
                <div class="playerbox">
                  <div class="scaledbasketball">{<Basketball />}</div>
                  Name: {player.name}
                </div>
                <div class="floatleft"> | Score : {player.points} |</div>
                <div class="floatleft"></div>
              </div>
            );
          })}
        </div>
        <div class="flex-container">
          {" "}
          <div>
            <div class="bigtext"> | Team Performance | </div>{" "}
            <div class="bigtext topmargin20">| Based on 5 players |</div>{" "}
          </div>
          <div style={{ backgroundColor: "#00FFFF" }} class="round">
            <div> | Lineup: {array.id} | </div> Time: {array.subtimeline.time}{" "}
            minutes | points: {array.subtimeline.score} | Enemy Points:{" "}
            {array.subtimeline.enemyscore}
            <button
              style={{ backgroundColor: "#cccccc" }}
              class="roundbutton orangebutton"
              onClick={() => {
                setcomparisonarray(array);
              }}
            >
              {" "}
              <FaPlus />{" "}
            </button>
          </div>{" "}
        </div>

        <div
          class="p-30 mb-20 bg-warning text-dark"
          style={{ width: 1040, height: 4 }}
        >
          {" "}
        </div>
      </div>
    ));
    return (
      <div class="slicedarray">
        <div
          class="greybox"
          id="slicearray"
          style={{ height: window.outerHeight }}
        >
          <div class="superlargetext1"> Player Combination </div>{" "}
          {slicearraybox}{" "}
        </div>{" "}
      </div>
    );
  }

  function ConditionalElement() {
    if (stage === 0) {
      return <SearchBar />;
    }
    if (stage === 1) {
      return <QuadrantPicker />;
    }
  }

  function QuadrantPicker() {
    return (
      <div>
        <div class="superlargetext1"> Team Name: {quadrant.teamname} </div>
        <div class="flex-container">
          <div>
            {" "}
            <ImprovizedDropDown />
            <LeftClickDropdown />
          </div>
        </div>{" "}
      </div>
    );
  }

  function changegameID() {
    const temp_gameID = document.getElementById("gameidnumber").value;
    const parcela1 =
      "{username:" +
      username +
      ",password:" +
      password +
      ",gameID:" +
      temp_gameID +
      "}";

    axios
      .post("http://144.202.69.49:8004", parcela1)
      .then((resp) => {
        const receivedinfo = resp.data;
        console.log(receivedinfo);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getRefactoredQuadrants(1, 1);
  }, []);

  function SearchBar() {
    return (
      <div>
        {" "}
        <input
          type="text"
          className="form-control"
          id="gameidnumber"
          placeholder="Your Search Target Goes Here"
        />
        <button
          class="roundbutton"
          style={{
            backgroundColor: "#9dd045",
            color: "white",
            height: "65px",
            width: "185px",
          }}
          onClick={() => {
            changegameID();

            setstage(1);
          }}
        >
          Click To Set GAME_ID
        </button>{" "}
      </div>
    );
  }

  function ShowTeamsBreakdown() {
    return (
      <div style={{ backgroundColor: "#e6e6e6" }}>
        {" "}
        <div></div>
        <QuadrantPicker /> <SliceArray props1={quadrant.timeline} />
      </div>
    );
  }

  function ZIEARROWS() {
    return (
      <div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>{" "}
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        <div style={{ visibility: "hidden" }}> Paloki </div>
        {<Crossedarrows />}{" "}
      </div>
    );
  }

  return (
    <div
      style={{
        height: 2100,
        width: window.innerWidth,
        backgroundColor: "#e6e6e6",
      }}
      className="App"
    >
      <div style={{ backgroundColor: "#e6e6e6" }} class="flex-container ">
        {" "}
        <ShowTeamsBreakdown />
        <ZIEARROWS /> <ComparisonSlice props={comparisonarray} />
      </div>
    </div>
  );
}

export default App;
