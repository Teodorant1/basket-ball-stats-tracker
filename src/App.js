import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios";

function App() {
  const [teamindex, setteamindex] = useState(0);
  const [exampleAPIarray, setexampleAPIarray] = useState([
    {
      timeline: [
        {
          subtimeline: {
            score: 12,
            slice: [
              { name: "Mikk Jurkatamm", points: 3 },
              { name: "Mikael Jantunen", points: 2 },
              { name: "Derek Cooke", points: 2 },
              { name: "Ike Iroegbu", points: 3 },
              { name: "Michal Sokolowski", points: 2 },
            ],
            time: 5,
          },
          id: 0,
        },
        {
          subtimeline: {
            score: 19,
            slice: [
              { name: "Derek Cooke", points: 2 },
              { name: "Ike Iroegbu", points: 3 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 5,
          },
          id: 1,
        },
        {
          subtimeline: {
            score: 26,
            slice: [
              { name: "Derek Cooke", points: 2 },
              { name: "Ike Iroegbu", points: 3 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 5,
          },
          id: 2,
        },
        {
          subtimeline: {
            score: 30,
            slice: [
              { name: "Derek Cooke", points: 2 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 5,
          },
          id: 3,
        },
        {
          subtimeline: {
            score: 34,
            slice: [
              { name: "Derek Cooke", points: 2 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 5,
          },
          id: 4,
        },
        {
          subtimeline: {
            score: 36,
            slice: [
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Alessandro Simioni", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 5,
          },
          id: 5,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Alessandro Simioni", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 6,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Alvise Sarto", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Alessandro Simioni", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 7,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Alvise Sarto", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Alessandro Simioni", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 8,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Alvise Sarto", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 9,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Alvise Sarto", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 10,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Alvise Sarto", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 11,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Alvise Sarto", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 12,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 13,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 14,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 15,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 16,
        },
        {
          subtimeline: {
            score: 38,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 17,
        },
        {
          subtimeline: {
            score: 47,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 6 },
              { name: "Derek Cooke", points: 0 },
              { name: "Adrian Banks", points: 3 },
            ],
            time: 1,
          },
          id: 18,
        },
        {
          subtimeline: {
            score: 53,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 6 },
              { name: "Derek Cooke", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
            ],
            time: 1,
          },
          id: 19,
        },
        {
          subtimeline: {
            score: 60,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 3 },
              { name: "Ike Iroegbu", points: 4 },
              { name: "Derek Cooke", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
            ],
            time: 1,
          },
          id: 20,
        },
        {
          subtimeline: {
            score: 67,
            slice: [
              { name: "Mikael Jantunen", points: 3 },
              { name: "Ike Iroegbu", points: 4 },
              { name: "Derek Cooke", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 1,
          },
          id: 21,
        },
        {
          subtimeline: {
            score: 77,
            slice: [
              { name: "Mikael Jantunen", points: 2 },
              { name: "Ike Iroegbu", points: 4 },
              { name: "Derek Cooke", points: 2 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 22,
        },
        {
          subtimeline: {
            score: 85,
            slice: [
              { name: "Mikael Jantunen", points: 2 },
              { name: "Ike Iroegbu", points: 4 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 23,
        },
        {
          subtimeline: {
            score: 93,
            slice: [
              { name: "Mikael Jantunen", points: 2 },
              { name: "Ike Iroegbu", points: 4 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 24,
        },
        {
          subtimeline: {
            score: 97,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 2 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 25,
        },
        {
          subtimeline: {
            score: 101,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 2 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 26,
        },
        {
          subtimeline: {
            score: 105,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 2 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 27,
        },
        {
          subtimeline: {
            score: 111,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 2 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Adrian Banks", points: 4 },
            ],
            time: 3,
          },
          id: 28,
        },
        {
          subtimeline: {
            score: 117,
            slice: [
              { name: "Mikael Jantunen", points: 2 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 4 },
            ],
            time: 3,
          },
          id: 29,
        },
        {
          subtimeline: {
            score: 123,
            slice: [
              { name: "Mikael Jantunen", points: 2 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 4 },
            ],
            time: 3,
          },
          id: 30,
        },
        {
          subtimeline: {
            score: 129,
            slice: [
              { name: "Mikael Jantunen", points: 2 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 4 },
            ],
            time: 3,
          },
          id: 31,
        },
        {
          subtimeline: {
            score: 138,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 5 },
            ],
            time: 4,
          },
          id: 32,
        },
        {
          subtimeline: {
            score: 142,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
            ],
            time: 4,
          },
          id: 33,
        },
        {
          subtimeline: {
            score: 146,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
            ],
            time: 4,
          },
          id: 34,
        },
        {
          subtimeline: {
            score: 150,
            slice: [
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
            ],
            time: 4,
          },
          id: 35,
        },
        {
          subtimeline: {
            score: 154,
            slice: [
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
            ],
            time: 4,
          },
          id: 36,
        },
        {
          subtimeline: {
            score: 158,
            slice: [
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 4,
          },
          id: 37,
        },
        {
          subtimeline: {
            score: 162,
            slice: [
              { name: "Ike Iroegbu", points: 0 },
              { name: "Derek Cooke", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 4,
          },
          id: 38,
        },
        {
          subtimeline: {
            score: 166,
            slice: [
              { name: "Derek Cooke", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 4 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 0 },
            ],
            time: 4,
          },
          id: 39,
        },
        {
          subtimeline: {
            score: 172,
            slice: [
              { name: "Derek Cooke", points: 0 },
              { name: "Alessandro Zanelli", points: 2 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 3,
          },
          id: 40,
        },
        {
          subtimeline: {
            score: 176,
            slice: [
              { name: "Derek Cooke", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Paulius Sorokas", points: 0 },
              { name: "Michal Sokolowski", points: 2 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 3,
          },
          id: 41,
        },
        {
          subtimeline: {
            score: 184,
            slice: [
              { name: "Derek Cooke", points: 0 },
              { name: "Ike Iroegbu", points: 0 },
              { name: "Paulius Sorokas", points: 6 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 42,
        },
        {
          subtimeline: {
            score: 192,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 6 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 43,
        },
        {
          subtimeline: {
            score: 200,
            slice: [
              { name: "Mikk Jurkatamm", points: 0 },
              { name: "Mikael Jantunen", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 6 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 44,
        },
        {
          subtimeline: {
            score: 208,
            slice: [
              { name: "Mikael Jantunen", points: 0 },
              { name: "Alessandro Zanelli", points: 0 },
              { name: "Paulius Sorokas", points: 6 },
              { name: "Michal Sokolowski", points: 0 },
              { name: "Adrian Banks", points: 2 },
            ],
            time: 2,
          },
          id: 45,
        },
      ],
      teamname: "NutriBullet Treviso Basket",
    },
    {
      timeline: [
        {
          subtimeline: {
            score: 12,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Jaron Johnson", points: 5 },
              { name: "Markel Brown", points: 3 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Colbey Ross", points: 2 },
            ],
            time: 5,
          },
          id: 46,
        },
        {
          subtimeline: {
            score: 24,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Jaron Johnson", points: 5 },
              { name: "Markel Brown", points: 3 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 2 },
            ],
            time: 5,
          },
          id: 47,
        },
        {
          subtimeline: {
            score: 36,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Jaron Johnson", points: 5 },
              { name: "Markel Brown", points: 3 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 2 },
            ],
            time: 5,
          },
          id: 48,
        },
        {
          subtimeline: {
            score: 46,
            slice: [
              { name: "Jaron Johnson", points: 5 },
              { name: "Markel Brown", points: 3 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 2 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 5,
          },
          id: 49,
        },
        {
          subtimeline: {
            score: 51,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 3 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 0 },
              { name: "Guglielmo Caruso", points: 2 },
            ],
            time: 1,
          },
          id: 50,
        },
        {
          subtimeline: {
            score: 53,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 2 },
            ],
            time: 1,
          },
          id: 51,
        },
        {
          subtimeline: {
            score: 59,
            slice: [
              { name: "Jaron Johnson", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 4 },
            ],
            time: 2,
          },
          id: 52,
        },
        {
          subtimeline: {
            score: 63,
            slice: [
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 4 },
            ],
            time: 2,
          },
          id: 53,
        },
        {
          subtimeline: {
            score: 67,
            slice: [
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 4 },
            ],
            time: 2,
          },
          id: 54,
        },
        {
          subtimeline: {
            score: 67,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
            ],
            time: 2,
          },
          id: 55,
        },
        {
          subtimeline: {
            score: 69,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
            ],
            time: 1,
          },
          id: 56,
        },
        {
          subtimeline: {
            score: 71,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 0 },
            ],
            time: 1,
          },
          id: 57,
        },
        {
          subtimeline: {
            score: 73,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 0 },
            ],
            time: 1,
          },
          id: 58,
        },
        {
          subtimeline: {
            score: 75,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 0 },
            ],
            time: 1,
          },
          id: 59,
        },
        {
          subtimeline: {
            score: 81,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 4 },
            ],
            time: 1,
          },
          id: 60,
        },
        {
          subtimeline: {
            score: 87,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Colbey Ross", points: 4 },
            ],
            time: 1,
          },
          id: 61,
        },
        {
          subtimeline: {
            score: 90,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Jaron Johnson", points: 3 },
              { name: "Markel Brown", points: 0 },
              { name: "Colbey Ross", points: 0 },
            ],
            time: 1,
          },
          id: 62,
        },
        {
          subtimeline: {
            score: 93,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 3 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Matteo Librizzi", points: 0 },
            ],
            time: 1,
          },
          id: 63,
        },
        {
          subtimeline: {
            score: 96,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Matteo Librizzi", points: 3 },
            ],
            time: 1,
          },
          id: 64,
        },
        {
          subtimeline: {
            score: 99,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Matteo Librizzi", points: 3 },
            ],
            time: 1,
          },
          id: 65,
        },
        {
          subtimeline: {
            score: 102,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Matteo Librizzi", points: 3 },
            ],
            time: 1,
          },
          id: 66,
        },
        {
          subtimeline: {
            score: 102,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Colbey Ross", points: 0 },
            ],
            time: 1,
          },
          id: 67,
        },
        {
          subtimeline: {
            score: 107,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 2 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Colbey Ross", points: 3 },
            ],
            time: 1,
          },
          id: 68,
        },
        {
          subtimeline: {
            score: 109,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 2 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
            ],
            time: 1,
          },
          id: 69,
        },
        {
          subtimeline: {
            score: 113,
            slice: [
              { name: "Tariq Owens", points: 2 },
              { name: "Jaron Johnson", points: 2 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
            ],
            time: 2,
          },
          id: 70,
        },
        {
          subtimeline: {
            score: 115,
            slice: [
              { name: "Jaron Johnson", points: 2 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 2,
          },
          id: 71,
        },
        {
          subtimeline: {
            score: 117,
            slice: [
              { name: "Jaron Johnson", points: 2 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 2,
          },
          id: 72,
        },
        {
          subtimeline: {
            score: 119,
            slice: [
              { name: "Jaron Johnson", points: 2 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 2,
          },
          id: 73,
        },
        {
          subtimeline: {
            score: 127,
            slice: [
              { name: "Jaron Johnson", points: 4 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 2 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 2 },
            ],
            time: 4,
          },
          id: 74,
        },
        {
          subtimeline: {
            score: 133,
            slice: [
              { name: "Jaron Johnson", points: 4 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 2 },
              { name: "Matteo Librizzi", points: 0 },
            ],
            time: 4,
          },
          id: 75,
        },
        {
          subtimeline: {
            score: 139,
            slice: [
              { name: "Jaron Johnson", points: 4 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 2 },
              { name: "Matteo Librizzi", points: 0 },
            ],
            time: 4,
          },
          id: 76,
        },
        {
          subtimeline: {
            score: 139,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Colbey Ross", points: 0 },
            ],
            time: 4,
          },
          id: 77,
        },
        {
          subtimeline: {
            score: 148,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Giancarlo Ferrero", points: 0 },
              { name: "Markel Brown", points: 3 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Colbey Ross", points: 6 },
            ],
            time: 3,
          },
          id: 78,
        },
        {
          subtimeline: {
            score: 157,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 3 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Colbey Ross", points: 6 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 3,
          },
          id: 79,
        },
        {
          subtimeline: {
            score: 162,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 3 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Colbey Ross", points: 0 },
              { name: "Guglielmo Caruso", points: 2 },
            ],
            time: 1,
          },
          id: 80,
        },
        {
          subtimeline: {
            score: 167,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 3 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 0 },
              { name: "Guglielmo Caruso", points: 2 },
            ],
            time: 1,
          },
          id: 81,
        },
        {
          subtimeline: {
            score: 167,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Colbey Ross", points: 0 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 1,
          },
          id: 82,
        },
        {
          subtimeline: {
            score: 167,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 0 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 1,
          },
          id: 83,
        },
        {
          subtimeline: {
            score: 170,
            slice: [
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 3 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
              { name: "Guglielmo Caruso", points: 0 },
            ],
            time: 1,
          },
          id: 84,
        },
        {
          subtimeline: {
            score: 173,
            slice: [
              { name: "Tariq Owens", points: 0 },
              { name: "Jaron Johnson", points: 0 },
              { name: "Markel Brown", points: 3 },
              { name: "Andriu Tomas Woldetensae", points: 0 },
              { name: "Giovanni De Nicolao", points: 0 },
            ],
            time: 1,
          },
          id: 85,
        },
      ],
      teamname: "Openjobmetis Varese",
    },
  ]);
  const [exampleAPIarray1, setexampleAPIarray1] = useState(
    exampleAPIarray.at(0)
  );

  function Slice({ props }) {
    const slice = props;
    const slicebox = slice.map((player) => (
      <div key={player.name}>
        {player.name} {player.points}{" "}
      </div>
    ));

    return <div> This Slice contains {slicebox}</div>;
  }

  function SliceArray({ props1 }) {
    const slicearray = props1;
    const slicearraybox = slicearray.map((array) => (
      <div key={array.id}>
        {"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX "}
        id: {array.id} Time: {array.subtimeline.time} minutes
        {array.subtimeline.slice.map((player) => {
          return (
            <div key={player.name}>
              Name: {player.name} Score: {player.points} points
            </div>
          );
        })}
      </div>
    ));
    return <div> {slicearraybox} </div>;
  }

  const getMatchInfo = async () => {
    const messagetosend = document.getElementById("messagetext").value;
    const parcela1 = "{id:" + messagetosend + "}";

    axios
      .post("http://localhost:8001", parcela1)
      .then((resp) => {
        const receivedinfo = resp.data;
        setexampleAPIarray(receivedinfo);
        setexampleAPIarray1(receivedinfo.at(0));
        setteamindex(0);
      })
      .catch((error) => console.log(error));
  };

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
          style={{
            backgroundColor: "#9dd045",
            color: "white",
            height: "45px",
            width: "125px",
          }}
          onClick={() => {
            getMatchInfo();
          }}
        >
          Click To Display Target Match
        </button>{" "}
      </div>
    );
  }

  function ShowTeamsBreakdown() {
    return (
      <div>
        {" "}
        <SearchBar />
        {exampleAPIarray1.teamname}
        <button
          style={{
            backgroundColor: "#9dd045",
            color: "white",
            height: "45px",
            width: "125px",
          }}
          onClick={() => {
            if (teamindex === 0) {
              setteamindex(1);

              const paloki = exampleAPIarray.at(1);
              setexampleAPIarray1(paloki);
            } else {
              setteamindex(0);

              const paloki = exampleAPIarray.at(0);
              setexampleAPIarray1(paloki);
            }
          }}
        >
          Click To View other team
        </button>
        <SliceArray props1={exampleAPIarray1.timeline} />
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
  //
  //
  //
  //
  //

  return (
    <div className="App">
      <ShowTeamsBreakdown />
    </div>
  );
}

export default App;
