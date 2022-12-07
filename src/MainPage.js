import React from "react";
import { useState } from "react";
import { ReactComponent as Basketball } from "./icons/Vector.svg";
import axios, { Axios } from "axios";

import ReactDOM from "react-dom/client";
import App from "./App1";
import AccountManager1 from "./AccountManager";
import YearlyReporter1 from "./YearlyReporter";
import "./App.css";

function MainPage() {
  const [page, setpage] = useState("loginpage");

  const [username, setusername] = useState("username");
  const [password, setpassword] = useState("password");

  const attemptlogin = async () => {
    const username1 = document.getElementById("username").value;
    const password1 = document.getElementById("password").value;
    setusername(username1);
    setpassword(password1);

    const parcela1 = "{username:" + username1 + ",password:" + password1 + "}";

    axios
      .post("http://80.240.21.17:8003", parcela1)
      .then((resp) => {
        const receivedinfo = resp.data;
        setpage(receivedinfo);
      })
      .catch((error) => console.log(error));

    console.log(page);
  };

  function LoginPage() {
    function LoginSquare() {
      return (
        <div class="logincredentials">
          {" "}
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username Goes Here"
          />{" "}
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password Goes Here"
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
              attemptlogin();
            }}
          >
            Click To Login
          </button>{" "}
        </div>
      );
    }
    return (
      <div>
        <div class="logintitle">
          {" "}
          <div> Welcome to the Basketball</div>
          <div> Sports Tracker App</div>{" "}
        </div>{" "}
        <LoginSquare />{" "}
      </div>
    );
  }

  function RightMenu() {
    if (page !== "loginpage")
      return (
        <div
          style={{
            backgroundColor: "#e6e6e6",
            //  height: 140,
          }}
          class="rightmenu "
        >
          {" "}
          <button
            onClick={() => {
              setpage("gamebreakdown");
            }}
          >
            Game BreakDown
          </button>
          <button
            onClick={() => {
              setpage("yearlyreport");
            }}
          >
            Yearly Reporter
          </button>
          <button
            onClick={() => {
              setpage("addaccounts");
            }}
          >
            Manage Accounts
          </button>
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

  function ConditionalPage() {
    if (page === "loginpage") {
      return (
        <div>
          <LoginPage />
        </div>
      );
    } else if (page == "gamebreakdown") {
      return (
        <div>
          {" "}
          <App user1={username} password1={password} />{" "}
        </div>
      );
    } else if (page == "yearlyreport") {
      return (
        <div>
          {" "}
          <YearlyReporter1 user1={username} password1={password} />{" "}
        </div>
      );
    } else if (page == "addaccounts") {
      return (
        <div>
          {" "}
          <AccountManager1 user1={username} password1={password} />{" "}
        </div>
      );
    }
  }

  return (
    <div>
      {" "}
      <div class="superlargetext0">Basketball Stats</div>{" "}
      <div style={{ height: 140 }}>
        {" "}
        <div class="scaledbasketball1">{<Basketball />}</div>{" "}
      </div>
      <RightMenu />
      <ConditionalPage />{" "}
    </div>
  );
}

export default MainPage;
