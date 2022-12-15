import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { ReactComponent as Basketball } from "./icons/Vector.svg";

function AccountManager1({ user1, password1 }) {
  function uploadNewAccount() {
    const username0 = document.getElementById("username0").value;
    const password0 = document.getElementById("password0").value;

    const fetchpayload =
      "{ method:getslice" +
      ",username:" +
      user1 +
      ",password:" +
      password1 +
      ", username1:" +
      username0 +
      ", password1:" +
      password0 +
      "}";

    axios
      .post("http://144.202.69.49:8005", fetchpayload)
      .then((resp) => {
        const receivedinfo = resp.data;
        console.log(receivedinfo);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      {" "}
      <div>
        {" "}
        <input
          type="text"
          className="form-control"
          id="username0"
          placeholder="New Account Username"
        />
        <input
          type="text"
          className="form-control"
          id="password0"
          placeholder="New Account Password"
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
              uploadNewAccount();
            }}
          >
            Click To Create New User Account
          </button>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
export default AccountManager1;
