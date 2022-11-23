import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { ReactComponent as Crossedarrows } from "./icons/🦆 icon _random_.svg";
import { ReactComponent as Basketball } from "./icons/Vector.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaArrowDown, FaPlus, FaTrashAlt } from "react-icons/fa";

function App() {
  const [quadrant, setquadrant] = useState({
    quadrantnumber: 1,
    timeline: [
      {
        subtimeline: {
          score: 10,
          slice: [
            { name: "Derek Willis", points: 0 },
            { name: "Allerik Freeman", points: 0 },
            { name: "Mitchell Watt", points: 6 },
            { name: "Jayson Granger", points: 0 },
            { name: "Jordan Parks", points: 4 },
          ],
          time: 5,
        },
        id: 1,
      },
      {
        subtimeline: {
          score: 2,
          slice: [
            { name: "Michael Bramos", points: 0 },
            { name: "Allerik Freeman", points: 2 },
            { name: "Mitchell Watt", points: 0 },
            { name: "Jayson Granger", points: 0 },
            { name: "Jeff Brooks", points: 0 },
          ],
          time: 1,
        },
        id: 2,
      },
      {
        subtimeline: {
          score: 0,
          slice: [
            { name: "Michael Bramos", points: 0 },
            { name: "Marco Spissu", points: 0 },
            { name: "Allerik Freeman", points: 0 },
            { name: "Amedeo Tessitori", points: 0 },
            { name: "Jeff Brooks", points: 0 },
          ],
          time: 1,
        },
        id: 3,
      },
      {
        subtimeline: {
          score: 2,
          slice: [
            { name: "Michael Bramos", points: 0 },
            { name: "Marco Spissu", points: 0 },
            { name: "Riccardo Moraschini", points: 2 },
            { name: "Amedeo Tessitori", points: 0 },
            { name: "Jeff Brooks", points: 0 },
          ],
          time: 2,
        },
        id: 4,
      },
      {
        subtimeline: {
          score: 1,
          slice: [
            { name: "Marco Spissu", points: 0 },
            { name: "Riccardo Moraschini", points: 1 },
            { name: "Matteo Chillo", points: 0 },
            { name: "Jeff Brooks", points: 0 },
            { name: "Jordan Parks", points: 0 },
          ],
          time: 1,
        },
        id: 5,
      },
    ],
    teamname: "Umana Reyer Venezia",
  });
  const [stage, setstage] = useState(0);

  const [show, setshow] = useState(-10);
  const [xaxis, setxaxis] = useState(0);
  const [yaxis, setyaxis] = useState(0);
  const [gameID, setgameID] = useState("00000");

  function getRefactoredQuadrants(QuarterNumber, teamID) {
    const fetchpayload =
      "{ gameID:" +
      gameID +
      ", teamID:" +
      teamID +
      ", QuarterNumber:" +
      QuarterNumber +
      "}";

    axios
      .post("http://localhost:8002", fetchpayload)
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
              class="roundbutton1"
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "45px",
                width: "125px",
              }}
              onClick={() => {
                getRefactoredQuadrants(1, 1);
              }}
            >
              Q1
            </button>
            <button
              class="roundbutton1"
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "45px",
                width: "125px",
              }}
              onClick={() => {
                getRefactoredQuadrants(2, 1);
              }}
            >
              Q2
            </button>
            <button
              class="roundbutton1"
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "45px",
                width: "125px",
              }}
              onClick={() => {
                getRefactoredQuadrants(3, 1);
              }}
            >
              Q3
            </button>
            <button
              class="roundbutton1"
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "45px",
                width: "125px",
              }}
              onClick={() => {
                getRefactoredQuadrants(4, 1);
              }}
            >
              Q4
            </button>
          </div>
        </div>

        <div>
          {" "}
          <button
            class="roundbutton1"
            style={{
              backgroundColor: "#cccc",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onClick={() => {
              getRefactoredQuadrants(1, 2);
            }}
          >
            Q1
          </button>
          <button
            class="roundbutton1"
            style={{
              backgroundColor: "#cccc",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onClick={() => {
              getRefactoredQuadrants(2, 2);
            }}
          >
            Q2
          </button>
          <button
            class="roundbutton1"
            style={{
              backgroundColor: "#cccc",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onClick={() => {
              getRefactoredQuadrants(3, 2);
            }}
          >
            Q3
          </button>
          <button
            class="roundbutton1"
            style={{
              backgroundColor: "#cccc",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onClick={() => {
              getRefactoredQuadrants(4, 2);
            }}
          >
            Q4
          </button>
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
            setyaxis(event.pageY - 160);
            setxaxis(event.pageX - 35);
          }}
          style={{
            backgroundColor: "#9dd045",
            color: "white",
            height: "65px",
            width: "155px",
          }}
          class="roundbutton "
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

  function getaverageratio(props) {
    const props1 = props;
    var sumratios = props1.reduce(
      (total, currentvalue) => total + currentvalue.points,
      0
    );

    var avgratio = sumratios / 5;

    return avgratio;
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

  function RightMenu() {
    return (
      <div class="rightmenu ">
        {" "}
        <button>Blog Posts</button>
        <button>Game BreakDown</button>
        <button>About us</button>
        <button>Contact us</button>
        <button>News</button>
        <button>Subscriptions</button>
        <button>Options</button>
        <button>FAQ</button>
        <button>My account</button>
        <button>Log out</button>
      </div>
    );
  }

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
        <div class="floatleft ">
          {" "}
          | PPM : {player.points / props.subtimeline.time} |
        </div>
      </div>
    ));

    return (
      <div class="greybox rightdiv" style={{ height: window.outerHeight }}>
        <div class="bigtext"> Your Combination </div>
        <div>
          <div class="flex-container">{slicebox}</div>
          <div
            class="p-30 mb-20 bg-warning text-dark"
            style={{ width: 800, height: 4 }}
          >
            {" "}
            <div class="bigtext"> | Based on 5 players | </div>
            <div class="round" style={{ backgroundColor: "#00ff99" }}>
              {" "}
              Average PPM: {getaverageratio(slice)} | Teamscore:
              {props.subtimeline.score} | Time: {props.subtimeline.time} | PPM:{" "}
              {props.subtimeline.score / props.subtimeline.time} |
              <div>
                {" "}
                | Period:
                {props.id} | Projected Points:
                {getaverageratio(slice) * props.subtimeline.time} |{" "}
              </div>
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
                <div class="floatleft">
                  | PPM : {player.points / array.subtimeline.time}|
                </div>
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
            <div> | Period: {array.id} | </div> Time: {array.subtimeline.time}{" "}
            minutes | points: {array.subtimeline.score} | Ratio:{"   "}
            {array.subtimeline.score / array.subtimeline.time} PPM
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
        <div></div>
        <ConditionalElement />
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

  function SearchBar() {
    return (
      <div>
        {" "}
        <input
          type="text"
          className="form-control"
          id="messagetext"
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
            //  const temp_gameID = document.getElementById("messagetext").value;
            setgameID(document.getElementById("messagetext").value);
            console.log(document.getElementById("messagetext").value);
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
        <SliceArray props1={quadrant.timeline} />
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
      {" "}
      <div class="p-3 mb-2 bg-warning text-dark rightmenu">
        {" "}
        <RightMenu />{" "}
      </div>{" "}
      <div class="superlargetext0">Basketball Stats</div>{" "}
      <div style={{ height: 140 }}>
        {" "}
        <div class="scaledbasketball1">{<Basketball />}</div>{" "}
      </div>
      <div style={{ backgroundColor: "#e6e6e6" }} class="flex-container ">
        {" "}
        <ShowTeamsBreakdown />
        <ZIEARROWS /> <ComparisonSlice props={comparisonarray} />
      </div>
    </div>
  );
}

export default App;
