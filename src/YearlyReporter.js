import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { ReactComponent as Basketball } from "./icons/Vector.svg";
import { ReactComponent as Crossedarrows } from "./icons/🦆 icon _random_.svg";
import { FaArrowDown, FaPlus, FaTrashAlt } from "react-icons/fa";

function YearlyReporter1({ user1, password1 }) {
  const [pageindex, setpageindex] = useState(1);
  const [pages, setpages] = useState([
    {
      contents: [
        {
          Points: 263,
          Lineup: [
            { name: "Mikael Jantunen", points: 46 },
            { name: "Ike Iroegbu", points: 48 },
            { name: "Derek Cooke", points: 50 },
            { name: "Michal Sokolowski", points: 73 },
            { name: "Adrian Banks", points: 46 },
          ],
          time: 42,
          id: 56,
          EnemyPoints: 26,
        },
        {
          Points: 239,
          Lineup: [
            { name: "Ike Iroegbu", points: 36 },
            { name: "Derek Cooke", points: 53 },
            { name: "Paulius Sorokas", points: 43 },
            { name: "Michal Sokolowski", points: 61 },
            { name: "Adrian Banks", points: 46 },
          ],
          time: 30,
          id: 75,
          EnemyPoints: 18,
        },
        {
          Points: 140,
          Lineup: [
            { name: "Mikael Jantunen", points: 28 },
            { name: "Alessandro Zanelli", points: 30 },
            { name: "Paulius Sorokas", points: 35 },
            { name: "Michal Sokolowski", points: 20 },
            { name: "Adrian Banks", points: 27 },
          ],
          time: 24,
          id: 72,
          EnemyPoints: 17,
        },
        {
          Points: 129,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 25 },
            { name: "Mikael Jantunen", points: 28 },
            { name: "Derek Cooke", points: 26 },
            { name: "Ike Iroegbu", points: 24 },
            { name: "Michal Sokolowski", points: 26 },
          ],
          time: 26,
          id: 30,
          EnemyPoints: 12,
        },
        {
          Points: 129,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 10 },
            { name: "Derek Cooke", points: 62 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Paulius Sorokas", points: 23 },
            { name: "Michal Sokolowski", points: 31 },
          ],
          time: 4,
          id: 79,
          EnemyPoints: 6,
        },
        {
          Points: 109,
          Lineup: [
            { name: "Mikael Jantunen", points: 33 },
            { name: "Derek Cooke", points: 15 },
            { name: "Alessandro Zanelli", points: 18 },
            { name: "Michal Sokolowski", points: 29 },
            { name: "Adrian Banks", points: 14 },
          ],
          time: 15,
          id: 71,
          EnemyPoints: 13,
        },
        {
          Points: 99,
          Lineup: [
            { name: "Derek Cooke", points: 22 },
            { name: "Alessandro Zanelli", points: 19 },
            { name: "Paulius Sorokas", points: 17 },
            { name: "Michal Sokolowski", points: 20 },
            { name: "Adrian Banks", points: 21 },
          ],
          time: 19,
          id: 5,
          EnemyPoints: 13,
        },
        {
          Points: 96,
          Lineup: [
            { name: "Mikael Jantunen", points: 14 },
            { name: "Ike Iroegbu", points: 15 },
            { name: "Derek Cooke", points: 16 },
            { name: "Paulius Sorokas", points: 16 },
            { name: "Michal Sokolowski", points: 14 },
            { name: "Adrian Banks", points: 21 },
          ],
          time: 14,
          id: 21,
          EnemyPoints: 18,
        },
        {
          Points: 79,
          Lineup: [
            { name: "Mikael Jantunen", points: 18 },
            { name: "Ike Iroegbu", points: 18 },
            { name: "Paulius Sorokas", points: 7 },
            { name: "Michal Sokolowski", points: 21 },
            { name: "Adrian Banks", points: 15 },
          ],
          time: 10,
          id: 7,
          EnemyPoints: 9,
        },
        {
          Points: 69,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 11 },
            { name: "Ike Iroegbu", points: 19 },
            { name: "Derek Cooke", points: 16 },
            { name: "Paulius Sorokas", points: 9 },
            { name: "Michal Sokolowski", points: 14 },
          ],
          time: 8,
          id: 27,
          EnemyPoints: 11,
        },
      ],
      pageindex: 1,
    },
    {
      contents: [
        {
          Points: 68,
          Lineup: [
            { name: "Alvise Sarto", points: 9 },
            { name: "Alessandro Zanelli", points: 11 },
            { name: "Paulius Sorokas", points: 14 },
            { name: "Alessandro Simioni", points: 15 },
            { name: "Adrian Banks", points: 19 },
          ],
          time: 12,
          id: 73,
          EnemyPoints: 14,
        },
        {
          Points: 55,
          Lineup: [
            { name: "Alessandro Zanelli", points: 11 },
            { name: "Paulius Sorokas", points: 12 },
            { name: "Michal Sokolowski", points: 11 },
            { name: "Alessandro Simioni", points: 10 },
            { name: "Adrian Banks", points: 11 },
          ],
          time: 11,
          id: 55,
          EnemyPoints: 11,
        },
        {
          Points: 52,
          Lineup: [
            { name: "Mikael Jantunen", points: 12 },
            { name: "Ike Iroegbu", points: 7 },
            { name: "Alessandro Zanelli", points: 6 },
            { name: "Paulius Sorokas", points: 14 },
            { name: "Michal Sokolowski", points: 13 },
          ],
          time: 9,
          id: 61,
          EnemyPoints: 12,
        },
        {
          Points: 44,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 7 },
            { name: "Alessandro Zanelli", points: 8 },
            { name: "Paulius Sorokas", points: 16 },
            { name: "Michal Sokolowski", points: 6 },
            { name: "Alessandro Simioni", points: 7 },
          ],
          time: 8,
          id: 42,
          EnemyPoints: 9,
        },
        {
          Points: 42,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 5 },
            { name: "Derek Cooke", points: 15 },
            { name: "Alessandro Zanelli", points: 7 },
            { name: "Paulius Sorokas", points: 9 },
            { name: "Adrian Banks", points: 6 },
          ],
          time: 6,
          id: 33,
          EnemyPoints: 8,
        },
        {
          Points: 40,
          Lineup: [
            { name: "Mikael Jantunen", points: 22 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Paulius Sorokas", points: 10 },
            { name: "Leonardo Faggian", points: 2 },
            { name: "Michal Sokolowski", points: 3 },
          ],
          time: 2,
          id: 35,
          EnemyPoints: 2,
        },
        {
          Points: 39,
          Lineup: [
            { name: "Alvise Sarto", points: 5 },
            { name: "Derek Cooke", points: 3 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Michal Sokolowski", points: 26 },
          ],
          time: 3,
          id: 26,
          EnemyPoints: 7,
        },
        {
          Points: 38,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 8 },
            { name: "Mikael Jantunen", points: 6 },
            { name: "Derek Cooke", points: 5 },
            { name: "Alessandro Zanelli", points: 12 },
            { name: "Michal Sokolowski", points: 7 },
          ],
          time: 8,
          id: 76,
          EnemyPoints: 4,
        },
        {
          Points: 37,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 5 },
            { name: "Mikael Jantunen", points: 8 },
            { name: "Alessandro Zanelli", points: 10 },
            { name: "Paulius Sorokas", points: 7 },
            { name: "Adrian Banks", points: 7 },
          ],
          time: 8,
          id: 6,
          EnemyPoints: 11,
        },
        {
          Points: 29,
          Lineup: [
            { name: "Alessandro Zanelli", points: 8 },
            { name: "Paulius Sorokas", points: 3 },
            { name: "Leonardo Faggian", points: 4 },
            { name: "Alessandro Simioni", points: 8 },
            { name: "Adrian Banks", points: 6 },
          ],
          time: 4,
          id: 9,
          EnemyPoints: 4,
        },
      ],
      pageindex: 2,
    },
    {
      contents: [
        {
          Points: 28,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Ike Iroegbu", points: 8 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Michal Sokolowski", points: 15 },
            { name: "Adrian Banks", points: 3 },
          ],
          time: 3,
          id: 62,
          EnemyPoints: 3,
        },
        {
          Points: 27,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 3 },
            { name: "Mikael Jantunen", points: 6 },
            { name: "Derek Cooke", points: 5 },
            { name: "Ike Iroegbu", points: 4 },
            { name: "Adrian Banks", points: 9 },
          ],
          time: 5,
          id: 32,
          EnemyPoints: 12,
        },
        {
          Points: 27,
          Lineup: [
            { name: "Alvise Sarto", points: 2 },
            { name: "Mikael Jantunen", points: 4 },
            { name: "Alessandro Zanelli", points: 9 },
            { name: "Paulius Sorokas", points: 6 },
            { name: "Adrian Banks", points: 6 },
          ],
          time: 6,
          id: 34,
          EnemyPoints: 4,
        },
        {
          Points: 25,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 4 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Alessandro Zanelli", points: 11 },
            { name: "Paulius Sorokas", points: 6 },
            { name: "Alessandro Simioni", points: 4 },
          ],
          time: 4,
          id: 19,
          EnemyPoints: 4,
        },
        {
          Points: 24,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 4 },
            { name: "Mikael Jantunen", points: 3 },
            { name: "Derek Cooke", points: 4 },
            { name: "Alessandro Zanelli", points: 7 },
            { name: "Adrian Banks", points: 6 },
          ],
          time: 4,
          id: 24,
          EnemyPoints: 4,
        },
        {
          Points: 24,
          Lineup: [
            { name: "Alvise Sarto", points: 7 },
            { name: "Derek Cooke", points: 6 },
            { name: "Alessandro Zanelli", points: 4 },
            { name: "Paulius Sorokas", points: 4 },
            { name: "Adrian Banks", points: 3 },
          ],
          time: 3,
          id: 52,
          EnemyPoints: 5,
        },
        {
          Points: 23,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 6 },
            { name: "Alessandro Zanelli", points: 5 },
            { name: "Paulius Sorokas", points: 6 },
            { name: "Alessandro Simioni", points: 2 },
            { name: "Adrian Banks", points: 4 },
          ],
          time: 4,
          id: 48,
          EnemyPoints: 4,
        },
        {
          Points: 22,
          Lineup: [
            { name: "Mikael Jantunen", points: 5 },
            { name: "Derek Cooke", points: 2 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Paulius Sorokas", points: 3 },
            { name: "Leonardo Faggian", points: 4 },
            { name: "Adrian Banks", points: 5 },
          ],
          time: 3,
          id: 20,
          EnemyPoints: 2,
        },
        {
          Points: 22,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 3 },
            { name: "Mikael Jantunen", points: 4 },
            { name: "Ike Iroegbu", points: 6 },
            { name: "Paulius Sorokas", points: 5 },
            { name: "Adrian Banks", points: 4 },
          ],
          time: 4,
          id: 31,
          EnemyPoints: 8,
        },
        {
          Points: 21,
          Lineup: [
            { name: "Alvise Sarto", points: 2 },
            { name: "Alessandro Zanelli", points: 4 },
            { name: "Paulius Sorokas", points: 5 },
            { name: "Michal Sokolowski", points: 2 },
            { name: "Alessandro Simioni", points: 8 },
          ],
          time: 3,
          id: 12,
          EnemyPoints: 3,
        },
      ],
      pageindex: 3,
    },
    {
      contents: [
        {
          Points: 21,
          Lineup: [
            { name: "Derek Cooke", points: 4 },
            { name: "Ike Iroegbu", points: 5 },
            { name: "Alessandro Zanelli", points: 2 },
            { name: "Paulius Sorokas", points: 5 },
            { name: "Michal Sokolowski", points: 5 },
          ],
          time: 5,
          id: 28,
          EnemyPoints: 6,
        },
        {
          Points: 21,
          Lineup: [
            { name: "Alvise Sarto", points: 0 },
            { name: "Mikael Jantunen", points: 7 },
            { name: "Ike Iroegbu", points: 9 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Michal Sokolowski", points: 3 },
          ],
          time: 9,
          id: 57,
          EnemyPoints: 11,
        },
        {
          Points: 16,
          Lineup: [
            { name: "Mikael Jantunen", points: 5 },
            { name: "Ike Iroegbu", points: 3 },
            { name: "Derek Cooke", points: 3 },
            { name: "Alessandro Zanelli", points: 2 },
            { name: "Michal Sokolowski", points: 3 },
          ],
          time: 3,
          id: 59,
          EnemyPoints: 7,
        },
        {
          Points: 14,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 2 },
            { name: "Mikael Jantunen", points: 3 },
            { name: "Ike Iroegbu", points: 3 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Paulius Sorokas", points: 3 },
          ],
          time: 3,
          id: 54,
          EnemyPoints: 2,
        },
        {
          Points: 14,
          Lineup: [
            { name: "Mikael Jantunen", points: 3 },
            { name: "Ike Iroegbu", points: 2 },
            { name: "Derek Cooke", points: 3 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Adrian Banks", points: 3 },
          ],
          time: 3,
          id: 74,
          EnemyPoints: 2,
        },
        {
          Points: 12,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 1 },
            { name: "Mikael Jantunen", points: 2 },
            { name: "Alessandro Zanelli", points: 2 },
            { name: "Paulius Sorokas", points: 5 },
            { name: "Michal Sokolowski", points: 2 },
          ],
          time: 2,
          id: 25,
          EnemyPoints: 2,
        },
        {
          Points: 12,
          Lineup: [
            { name: "Derek Cooke", points: 2 },
            { name: "Ike Iroegbu", points: 5 },
            { name: "Alessandro Zanelli", points: 1 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Adrian Banks", points: 2 },
          ],
          time: 2,
          id: 64,
          EnemyPoints: 2,
        },
        {
          Points: 11,
          Lineup: [
            { name: "Ike Iroegbu", points: 1 },
            { name: "Alessandro Zanelli", points: 2 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Michal Sokolowski", points: 5 },
            { name: "Adrian Banks", points: 1 },
          ],
          time: 2,
          id: 63,
          EnemyPoints: 4,
        },
        {
          Points: 8,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Alvise Sarto", points: 0 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Paulius Sorokas", points: 3 },
            { name: "Alessandro Simioni", points: 2 },
          ],
          time: 1,
          id: 36,
          EnemyPoints: 0,
        },
        {
          Points: 8,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Mikael Jantunen", points: 2 },
            { name: "Alessandro Zanelli", points: 3 },
            { name: "Paulius Sorokas", points: 3 },
            { name: "Leonardo Faggian", points: 0 },
          ],
          time: 1,
          id: 66,
          EnemyPoints: 0,
        },
      ],
      pageindex: 4,
    },
    {
      contents: [
        {
          Points: 7,
          Lineup: [
            { name: "Derek Cooke", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Michal Sokolowski", points: 2 },
            { name: "Alessandro Simioni", points: 3 },
            { name: "Adrian Banks", points: 2 },
          ],
          time: 2,
          id: 50,
          EnemyPoints: 9,
        },
        {
          Points: 7,
          Lineup: [
            { name: "Mikael Jantunen", points: 1 },
            { name: "Alvise Sarto", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Adrian Banks", points: 6 },
          ],
          time: 3,
          id: 69,
          EnemyPoints: 4,
        },
        {
          Points: 6,
          Lineup: [
            { name: "Derek Cooke", points: 4 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 2 },
          ],
          time: 2,
          id: 4,
          EnemyPoints: 7,
        },
        {
          Points: 6,
          Lineup: [
            { name: "David Torresani", points: 0 },
            { name: "Derek Cooke", points: 2 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
            { name: "Adrian Banks", points: 4 },
          ],
          time: 2,
          id: 13,
          EnemyPoints: 2,
        },
        {
          Points: 6,
          Lineup: [
            { name: "David Torresani", points: 0 },
            { name: "Derek Cooke", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 3 },
            { name: "Michal Sokolowski", points: 3 },
          ],
          time: 2,
          id: 53,
          EnemyPoints: 2,
        },
        {
          Points: 6,
          Lineup: [
            { name: "Mikael Jantunen", points: 2 },
            { name: "Ike Iroegbu", points: 2 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Adrian Banks", points: 2 },
          ],
          time: 2,
          id: 60,
          EnemyPoints: 3,
        },
        {
          Points: 5,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Alvise Sarto", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Michal Sokolowski", points: 3 },
          ],
          time: 1,
          id: 15,
          EnemyPoints: 0,
        },
        {
          Points: 5,
          Lineup: [
            { name: "Ike Iroegbu", points: 2 },
            { name: "Derek Cooke", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Leonardo Faggian", points: 3 },
            { name: "Alessandro Simioni", points: 0 },
          ],
          time: 1,
          id: 18,
          EnemyPoints: 0,
        },
        {
          Points: 5,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Mikael Jantunen", points: 3 },
            { name: "Ike Iroegbu", points: 2 },
            { name: "Derek Cooke", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
          ],
          time: 1,
          id: 23,
          EnemyPoints: 3,
        },
        {
          Points: 5,
          Lineup: [
            { name: "David Torresani", points: 0 },
            { name: "Mikael Jantunen", points: 2 },
            { name: "Derek Cooke", points: 2 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Leonardo Faggian", points: 1 },
          ],
          time: 1,
          id: 45,
          EnemyPoints: 2,
        },
      ],
      pageindex: 5,
    },
    {
      contents: [
        {
          Points: 4,
          Lineup: [
            { name: "Ike Iroegbu", points: 0 },
            { name: "Alessandro Zanelli", points: 2 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 2 },
          ],
          time: 2,
          id: 2,
          EnemyPoints: 7,
        },
        {
          Points: 4,
          Lineup: [
            { name: "David Torresani", points: 0 },
            { name: "Mikael Jantunen", points: 2 },
            { name: "Alvise Sarto", points: 0 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 3,
          EnemyPoints: 0,
        },
        {
          Points: 4,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 2 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Alessandro Zanelli", points: 2 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
          ],
          time: 1,
          id: 43,
          EnemyPoints: 0,
        },
        {
          Points: 4,
          Lineup: [
            { name: "Ike Iroegbu", points: 0 },
            { name: "Derek Cooke", points: 2 },
            { name: "Leonardo Faggian", points: 0 },
            { name: "Paulius Sorokas", points: 2 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 58,
          EnemyPoints: 4,
        },
        {
          Points: 4,
          Lineup: [
            { name: "Alvise Sarto", points: 0 },
            { name: "Ike Iroegbu", points: 4 },
            { name: "Derek Cooke", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
          ],
          time: 1,
          id: 68,
          EnemyPoints: 0,
        },
        {
          Points: 3,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 3 },
          ],
          time: 1,
          id: 8,
          EnemyPoints: 0,
        },
        {
          Points: 3,
          Lineup: [
            { name: "Ike Iroegbu", points: 0 },
            { name: "Derek Cooke", points: 2 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Leonardo Faggian", points: 0 },
            { name: "Paulius Sorokas", points: 1 },
          ],
          time: 2,
          id: 14,
          EnemyPoints: 5,
        },
        {
          Points: 3,
          Lineup: [
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 3 },
            { name: "Derek Cooke", points: 0 },
            { name: "Leonardo Faggian", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 22,
          EnemyPoints: 2,
        },
        {
          Points: 3,
          Lineup: [
            { name: "Alvise Sarto", points: 3 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Derek Cooke", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 37,
          EnemyPoints: 0,
        },
        {
          Points: 3,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 3 },
          ],
          time: 1,
          id: 39,
          EnemyPoints: 8,
        },
      ],
      pageindex: 6,
    },
    {
      contents: [
        {
          Points: 3,
          Lineup: [
            { name: "Alvise Sarto", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Derek Cooke", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 3 },
            { name: "Alessandro Simioni", points: 0 },
          ],
          time: 1,
          id: 40,
          EnemyPoints: 0,
        },
        {
          Points: 3,
          Lineup: [
            { name: "Mikael Jantunen", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Michal Sokolowski", points: 3 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 41,
          EnemyPoints: 3,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Mikael Jantunen", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Leonardo Faggian", points: 2 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 10,
          EnemyPoints: 0,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
            { name: "Alessandro Simioni", points: 2 },
          ],
          time: 1,
          id: 16,
          EnemyPoints: 2,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 2 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 17,
          EnemyPoints: 1,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Ike Iroegbu", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 2 },
          ],
          time: 1,
          id: 38,
          EnemyPoints: 2,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Michal Sokolowski", points: 0 },
            { name: "Alessandro Simioni", points: 2 },
          ],
          time: 1,
          id: 44,
          EnemyPoints: 0,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Alvise Sarto", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Derek Cooke", points: 2 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 47,
          EnemyPoints: 2,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Alvise Sarto", points: 0 },
            { name: "Derek Cooke", points: 2 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 65,
          EnemyPoints: 2,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 2 },
            { name: "Michal Sokolowski", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 67,
          EnemyPoints: 0,
        },
      ],
      pageindex: 7,
    },
    {
      contents: [
        {
          Points: 2,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Alvise Sarto", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Derek Cooke", points: 0 },
            { name: "Paulius Sorokas", points: 2 },
          ],
          time: 1,
          id: 70,
          EnemyPoints: 0,
        },
        {
          Points: 2,
          Lineup: [
            { name: "Ike Iroegbu", points: 0 },
            { name: "Derek Cooke", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 2 },
          ],
          time: 1,
          id: 78,
          EnemyPoints: 0,
        },
        {
          Points: 1,
          Lineup: [
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Michal Sokolowski", points: 1 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 11,
          EnemyPoints: 2,
        },
        {
          Points: 1,
          Lineup: [
            { name: "David Torresani", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Michal Sokolowski", points: 1 },
          ],
          time: 1,
          id: 46,
          EnemyPoints: 0,
        },
        {
          Points: 0,
          Lineup: [
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 1,
          EnemyPoints: 0,
        },
        {
          Points: 0,
          Lineup: [
            { name: "David Torresani", points: 0 },
            { name: "Alvise Sarto", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 29,
          EnemyPoints: 3,
        },
        {
          Points: 0,
          Lineup: [
            { name: "Derek Cooke", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Leonardo Faggian", points: 0 },
            { name: "Alessandro Simioni", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 49,
          EnemyPoints: 2,
        },
        {
          Points: 0,
          Lineup: [
            { name: "Alvise Sarto", points: 0 },
            { name: "Mikael Jantunen", points: 0 },
            { name: "Ike Iroegbu", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
            { name: "Adrian Banks", points: 0 },
          ],
          time: 1,
          id: 51,
          EnemyPoints: 0,
        },
        {
          Points: 0,
          Lineup: [
            { name: "Mikk Jurkatamm", points: 0 },
            { name: "Alvise Sarto", points: 0 },
            { name: "Derek Cooke", points: 0 },
            { name: "Alessandro Zanelli", points: 0 },
            { name: "Paulius Sorokas", points: 0 },
          ],
          time: 1,
          id: 77,
          EnemyPoints: 6,
        },
      ],
      pageindex: 8,
    },
  ]);

  const [comparisonarray, setcomparisonarray] = useState({
    Points: 0,
    Lineup: [
      { name: "Alvise Sarto", points: 0 },
      { name: "Mikael Jantunen", points: 0 },
      { name: "Ike Iroegbu", points: 0 },
      { name: "Paulius Sorokas", points: 0 },
      { name: "Adrian Banks", points: 0 },
    ],
    time: 1,
    id: 51,
    EnemyPoints: 0,
  });

  const [report, setreport] = useState(pages.at(0).contents);

  function getyearlyreport() {
    const url = document.getElementById("url").value;
    const teamname = document.getElementById("teamname").value;
    const fetchpayload = "{" + "teamname:" + teamname + ",url:" + url + "}";

    //setreport(pages.at(page.pageindex - 1).contents);

    axios
      .post("http://104.238.158.102:8006", fetchpayload)
      .then((resp) => {
        const receivedinfo = resp.data;
        //  console.log(receivedinfo);

        setpages(receivedinfo);

        setreport(receivedinfo.at(0).contents);
      })
      .catch((error) => console.log(error));
  }

  const numDescending = [...report].sort((a, b) => b.Points - a.Points);

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
            <Pagination />
          </div>
        </div>{" "}
      </div>
    );
  }

  function LineupBox1() {
    const playergroups = numDescending.map((lineup) => (
      <div class="greybox greyboxpadding" key={lineup.id}>
        <div class="flex-container">
          {lineup.Lineup.map((player) => {
            return (
              <div
                class="roundtiny"
                style={{ backgroundColor: "#cccccc", height: 245, width: 125 }}
                key={player.name}
              >
                {" "}
                <div class="playerbox">
                  <div class="scaledbasketball">{<Basketball />}</div>
                  Name: {player.name}
                </div>
                <div class="floatleft"> | Score : {player.points} |</div>
                <div class="floatleft"></div>
                <div class="rightbutton">
                  {" "}
                  <button
                    style={{ backgroundColor: "#cccccc" }}
                    class="roundbutton orangebutton"
                    onClick={() => {
                      addplayer(player);
                    }}
                  >
                    {" "}
                    <FaPlus />{" "}
                  </button>{" "}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div class="bigtext"> | Team Performance | </div>{" "}
          <div class="bigtext topmargin20">| Based on 5 players |</div>{" "}
          <div
            style={{ backgroundColor: "#00FFFF", "text-align": "center" }}
            class="round"
          >
            <button
              style={{ "text-align": "right", backgroundColor: "#cccccc" }}
              class="roundbutton orangebutton"
              onClick={() => {
                setcomparisonarray(lineup);
              }}
            >
              {" "}
              <FaPlus />{" "}
            </button>{" "}
            <div>POINTS : {lineup.Points}</div>
            <div>TIME : {lineup.time} minutes</div>
            <div>ENEMY POINTS : {lineup.EnemyPoints}</div>{" "}
          </div>
        </div>
      </div>
    ));

    return <div>{playergroups}</div>;
  }

  function Pagination() {
    const pagebox = pages.map((page) => (
      <div key={page.id}>
        <button
          style={{
            backgroundColor: "#cccccc",
            height: "45px",
            width: "75px",
          }}
          onClick={() => {
            setreport(pages.at(page.pageindex - 1).contents);
            setpageindex(page.pageindex);
          }}
        >
          {" "}
          {page.pageindex}{" "}
        </button>
      </div>
    ));
    return (
      <div style={{ "text-align": "center" }} class="flex-container1">
        You are currently on page : {pageindex}
        {pagebox}
      </div>
    );
  }

  // const [comparisonarray, setcomparisonarray] = useState(
  //    {
  //   Points: 0,
  //   Lineup: [
  //     { name: "Alvise Sarto", points: 0 },
  //     { name: "Mikael Jantunen", points: 0 },
  //     { name: "Ike Iroegbu", points: 0 },
  //     { name: "Paulius Sorokas", points: 0 },
  //     { name: "Adrian Banks", points: 0 },
  //   ],
  //   time: 1,
  //   id: 51,
  //   EnemyPoints: 0,
  // });

  function getLineupPoints(props) {
    const props1 = props;
    var sum = props1.reduce(
      (total, currentvalue) => total + currentvalue.points,
      0
    );

    return sum;
  }

  function addplayer(player) {
    const newplayer1 = { name: player.name, points: player.points };

    const comparisonarray0 = comparisonarray;

    const newLineup = comparisonarray0.Lineup.slice();

    newLineup.push(newplayer1);

    const newcomparisonarray = {
      Points: comparisonarray0.Points,
      Lineup: newLineup,
      time: comparisonarray0.time,
      id: comparisonarray0.id,
      EnemyPoints: comparisonarray0.EnemyPoints,
    };

    setcomparisonarray(newcomparisonarray);
  }

  function removeplayer(player) {
    const comparisonarray0 = comparisonarray;
    var Lineup1 = comparisonarray0.Lineup;
    var Lineup2 = Lineup1.filter(function (player0) {
      return player0 !== player;
    });

    const newcomparisonarray1 = {
      Points: comparisonarray0.Points,
      Lineup: Lineup2,
      time: comparisonarray0.time,
      id: comparisonarray0.id,
      EnemyPoints: comparisonarray0.EnemyPoints,
    };
    setcomparisonarray(newcomparisonarray1);
  }

  function ComparisonSlice({ compslice }) {
    const comparisonbox = compslice.Lineup.map((player) => (
      <div
        class="roundtiny"
        style={{ backgroundColor: "#cccccc", height: 110, width: 150 }}
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
      <div class="greybox">
        {" "}
        <div class="flex-container">{comparisonbox}</div>
        <div
          style={{
            "text-align": "center",
            backgroundColor: "#9dd045",
            height: 50,
          }}
        >
          {" "}
          <div> | Based on 5 players | </div>
          <div>
            Lineup Score:
            {getLineupPoints(compslice.Lineup)} | Time: {compslice.time}
          </div>{" "}
        </div>
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

  function CentralPart() {
    return (
      <div style={{ backgroundColor: "#e6e6e6" }} class="flex-container ">
        {" "}
        <LineupBox1 />
        <ZIEARROWS /> <ComparisonSlice compslice={comparisonarray} />
      </div>
    );
  }
  //<ComparisonSlice compslice={comparisonarray} />
  //<LineupBox1 />{" "}
  return (
    <div
      style={{
        height: 2100,
        backgroundColor: "#e6e6e6",
      }}
      className="App"
    >
      {" "}
      <div>
        <SearchBox />
        <CentralPart />
      </div>
    </div>
  );
}
export default YearlyReporter1;
