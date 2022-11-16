import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { FaArrowDown, FaPlus, FaTrashAlt } from "react-icons/fa";

function App() {
  const [teamindex, setteamindex] = useState(0);
  const [quadrantindex, setquadrantindex] = useState(1);

  const [derp, herpderp] = useState([
    {
      subtimeline: {
        score: 8,
        slice: [
          { name: "Simone Zanotti", points: 0 },
          { name: "David Michineau", points: 4 },
          { name: "JaCorey Williams", points: 4 },
          { name: "Elijah Stewart", points: 0 },
          { name: "Robert Johnson", points: 0 },
        ],
        time: 5,
      },
      id: 1,
    },
    {
      subtimeline: {
        score: 0,
        slice: [
          { name: "David Michineau", points: 0 },
          { name: "Andrea Zerini", points: 0 },
          { name: "Jordan Howard", points: 0 },
          { name: "JaCorey Williams", points: 0 },
          { name: "Robert Johnson", points: 0 },
        ],
        time: 1,
      },
      id: 2,
    },
    {
      subtimeline: {
        score: 4,
        slice: [
          { name: "Lorenzo Uglietti", points: 0 },
          { name: "Andrea Zerini", points: 0 },
          { name: "Jordan Howard", points: 4 },
          { name: "JaCorey Williams", points: 0 },
          { name: "Robert Johnson", points: 0 },
        ],
        time: 1,
      },
      id: 3,
    },
    {
      subtimeline: {
        score: 4,
        slice: [
          { name: "Lorenzo Uglietti", points: 0 },
          { name: "Andrea Zerini", points: 0 },
          { name: "Jordan Howard", points: 4 },
          { name: "JaCorey Williams", points: 0 },
          { name: "Elijah Stewart", points: 0 },
        ],
        time: 1,
      },
      id: 4,
    },
    {
      subtimeline: {
        score: 5,
        slice: [
          { name: "Lorenzo Uglietti", points: 2 },
          { name: "Andrea Zerini", points: 0 },
          { name: "Jordan Howard", points: 3 },
          { name: "Elijah Stewart", points: 0 },
          { name: "Emmitt Williams", points: 0 },
        ],
        time: 1,
      },
      id: 5,
    },
    {
      subtimeline: {
        score: 1,
        slice: [
          { name: "Lorenzo Uglietti", points: 1 },
          { name: "Andrea Zerini", points: 0 },
          { name: "David Michineau", points: 0 },
          { name: "Elijah Stewart", points: 0 },
          { name: "Emmitt Williams", points: 0 },
        ],
        time: 1,
      },
      id: 6,
    },
  ]);

  const [bothteams, setbothteams] = useState([
    {
      quadrant3: {
        timeline: [
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 2 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 0,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 2 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Adrian Banks", points: 4 },
              ],
              time: 3,
            },
            id: 1,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Mikael Jantunen", points: 2 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 4 },
              ],
              time: 3,
            },
            id: 2,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Mikael Jantunen", points: 2 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 4 },
              ],
              time: 3,
            },
            id: 3,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Mikael Jantunen", points: 2 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 4 },
              ],
              time: 3,
            },
            id: 4,
          },
          {
            subtimeline: {
              score: 9,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 4 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 5 },
              ],
              time: 4,
            },
            id: 5,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 4 },
                { name: "Michal Sokolowski", points: 0 },
              ],
              time: 4,
            },
            id: 6,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 4 },
                { name: "Michal Sokolowski", points: 0 },
              ],
              time: 4,
            },
            id: 7,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 4 },
                { name: "Michal Sokolowski", points: 0 },
              ],
              time: 4,
            },
            id: 8,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 4 },
                { name: "Michal Sokolowski", points: 0 },
              ],
              time: 4,
            },
            id: 9,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Paulius Sorokas", points: 4 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 4,
            },
            id: 10,
          },
        ],
      },
      quadrant2: {
        timeline: [
          {
            subtimeline: {
              score: 2,
              slice: [
                { name: "Alvise Sarto", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Alessandro Simioni", points: 2 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 0,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Alvise Sarto", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 1,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Alvise Sarto", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 2,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Alvise Sarto", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 3,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Alvise Sarto", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 4,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 5,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 6,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 7,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 8,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Derek Cooke", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 9,
          },
          {
            subtimeline: {
              score: 9,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 6 },
                { name: "Derek Cooke", points: 0 },
                { name: "Adrian Banks", points: 3 },
              ],
              time: 1,
            },
            id: 10,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Ike Iroegbu", points: 6 },
                { name: "Derek Cooke", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
              ],
              time: 1,
            },
            id: 11,
          },
          {
            subtimeline: {
              score: 7,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 3 },
                { name: "Ike Iroegbu", points: 4 },
                { name: "Derek Cooke", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
              ],
              time: 1,
            },
            id: 12,
          },
          {
            subtimeline: {
              score: 7,
              slice: [
                { name: "Mikael Jantunen", points: 3 },
                { name: "Ike Iroegbu", points: 4 },
                { name: "Derek Cooke", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 1,
            },
            id: 13,
          },
          {
            subtimeline: {
              score: 10,
              slice: [
                { name: "Mikael Jantunen", points: 2 },
                { name: "Ike Iroegbu", points: 4 },
                { name: "Derek Cooke", points: 2 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 14,
          },
          {
            subtimeline: {
              score: 8,
              slice: [
                { name: "Mikael Jantunen", points: 2 },
                { name: "Ike Iroegbu", points: 4 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 15,
          },
          {
            subtimeline: {
              score: 8,
              slice: [
                { name: "Mikael Jantunen", points: 2 },
                { name: "Ike Iroegbu", points: 4 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 16,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 2 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 17,
          },
        ],
      },
      quadrant1: {
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
              score: 7,
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
              score: 7,
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
              score: 4,
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
              score: 4,
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
              score: 2,
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
              score: 2,
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
              score: 0,
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
        ],
      },
      quadrant4: {
        timeline: [
          {
            subtimeline: {
              score: 11,
              slice: [
                { name: "Ike Iroegbu", points: 5 },
                { name: "Derek Cooke", points: 4 },
                { name: "Paulius Sorokas", points: 2 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 3,
            },
            id: 0,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Derek Cooke", points: 4 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 2 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 0 },
              ],
              time: 3,
            },
            id: 1,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Derek Cooke", points: 0 },
                { name: "Alessandro Zanelli", points: 2 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Michal Sokolowski", points: 2 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 3,
            },
            id: 2,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Derek Cooke", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Paulius Sorokas", points: 0 },
                { name: "Michal Sokolowski", points: 2 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 3,
            },
            id: 3,
          },
          {
            subtimeline: {
              score: 8,
              slice: [
                { name: "Derek Cooke", points: 0 },
                { name: "Ike Iroegbu", points: 0 },
                { name: "Paulius Sorokas", points: 6 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 4,
          },
          {
            subtimeline: {
              score: 8,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 6 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 5,
          },
          {
            subtimeline: {
              score: 8,
              slice: [
                { name: "Mikk Jurkatamm", points: 0 },
                { name: "Mikael Jantunen", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 6 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 6,
          },
          {
            subtimeline: {
              score: 8,
              slice: [
                { name: "Mikael Jantunen", points: 0 },
                { name: "Alessandro Zanelli", points: 0 },
                { name: "Paulius Sorokas", points: 6 },
                { name: "Michal Sokolowski", points: 0 },
                { name: "Adrian Banks", points: 2 },
              ],
              time: 2,
            },
            id: 7,
          },
        ],
      },
      teamname: "NutriBullet Treviso Basket",
    },
    {
      quadrant3: {
        timeline: [
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Colbey Ross", points: 0 },
              ],
              time: 1,
            },
            id: 0,
          },
          {
            subtimeline: {
              score: 5,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Jaron Johnson", points: 2 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Colbey Ross", points: 3 },
              ],
              time: 1,
            },
            id: 1,
          },
          {
            subtimeline: {
              score: 2,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Jaron Johnson", points: 2 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
              ],
              time: 1,
            },
            id: 2,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Jaron Johnson", points: 2 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
              ],
              time: 2,
            },
            id: 3,
          },
          {
            subtimeline: {
              score: 2,
              slice: [
                { name: "Jaron Johnson", points: 2 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 2,
            },
            id: 4,
          },
          {
            subtimeline: {
              score: 2,
              slice: [
                { name: "Jaron Johnson", points: 2 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 2,
            },
            id: 5,
          },
          {
            subtimeline: {
              score: 2,
              slice: [
                { name: "Jaron Johnson", points: 2 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 2,
            },
            id: 6,
          },
          {
            subtimeline: {
              score: 8,
              slice: [
                { name: "Jaron Johnson", points: 4 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 2 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 2 },
              ],
              time: 4,
            },
            id: 7,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Jaron Johnson", points: 4 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 2 },
                { name: "Matteo Librizzi", points: 0 },
              ],
              time: 4,
            },
            id: 8,
          },
        ],
      },
      quadrant2: {
        timeline: [
          {
            subtimeline: {
              score: 9,
              slice: [
                { name: "Giancarlo Ferrero", points: 3 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 2 },
                { name: "Guglielmo Caruso", points: 4 },
              ],
              time: 2,
            },
            id: 0,
          },
          {
            subtimeline: {
              score: 5,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Giancarlo Ferrero", points: 3 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 2 },
              ],
              time: 2,
            },
            id: 1,
          },
          {
            subtimeline: {
              score: 7,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Giancarlo Ferrero", points: 3 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 2 },
              ],
              time: 1,
            },
            id: 2,
          },
          {
            subtimeline: {
              score: 7,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Giancarlo Ferrero", points: 3 },
                { name: "Markel Brown", points: 0 },
                { name: "Giovanni De Nicolao", points: 2 },
                { name: "Colbey Ross", points: 0 },
              ],
              time: 1,
            },
            id: 3,
          },
          {
            subtimeline: {
              score: 7,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Giancarlo Ferrero", points: 3 },
                { name: "Markel Brown", points: 0 },
                { name: "Giovanni De Nicolao", points: 2 },
                { name: "Colbey Ross", points: 0 },
              ],
              time: 1,
            },
            id: 4,
          },
          {
            subtimeline: {
              score: 7,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Giancarlo Ferrero", points: 3 },
                { name: "Jaron Johnson", points: 0 },
                { name: "Giovanni De Nicolao", points: 2 },
                { name: "Colbey Ross", points: 0 },
              ],
              time: 1,
            },
            id: 5,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Jaron Johnson", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Colbey Ross", points: 4 },
              ],
              time: 1,
            },
            id: 6,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Colbey Ross", points: 4 },
              ],
              time: 1,
            },
            id: 7,
          },
          {
            subtimeline: {
              score: 3,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Jaron Johnson", points: 3 },
                { name: "Markel Brown", points: 0 },
                { name: "Colbey Ross", points: 0 },
              ],
              time: 1,
            },
            id: 8,
          },
          {
            subtimeline: {
              score: 3,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Jaron Johnson", points: 3 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Matteo Librizzi", points: 0 },
              ],
              time: 1,
            },
            id: 9,
          },
          {
            subtimeline: {
              score: 3,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Matteo Librizzi", points: 3 },
              ],
              time: 1,
            },
            id: 10,
          },
          {
            subtimeline: {
              score: 3,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Matteo Librizzi", points: 3 },
              ],
              time: 1,
            },
            id: 11,
          },
        ],
      },
      quadrant1: {
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
            id: 0,
          },
          {
            subtimeline: {
              score: 12,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Jaron Johnson", points: 5 },
                { name: "Markel Brown", points: 3 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Colbey Ross", points: 2 },
              ],
              time: 5,
            },
            id: 1,
          },
          {
            subtimeline: {
              score: 12,
              slice: [
                { name: "Tariq Owens", points: 2 },
                { name: "Jaron Johnson", points: 5 },
                { name: "Markel Brown", points: 3 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Colbey Ross", points: 2 },
              ],
              time: 5,
            },
            id: 2,
          },
          {
            subtimeline: {
              score: 10,
              slice: [
                { name: "Jaron Johnson", points: 5 },
                { name: "Markel Brown", points: 3 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Colbey Ross", points: 2 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 5,
            },
            id: 3,
          },
          {
            subtimeline: {
              score: 5,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 3 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Colbey Ross", points: 0 },
                { name: "Guglielmo Caruso", points: 2 },
              ],
              time: 1,
            },
            id: 4,
          },
          {
            subtimeline: {
              score: 2,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 2 },
              ],
              time: 1,
            },
            id: 5,
          },
          {
            subtimeline: {
              score: 6,
              slice: [
                { name: "Jaron Johnson", points: 2 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 4 },
              ],
              time: 2,
            },
            id: 6,
          },
          {
            subtimeline: {
              score: 4,
              slice: [
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 4 },
              ],
              time: 2,
            },
            id: 7,
          },
        ],
      },
      quadrant4: {
        timeline: [
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Colbey Ross", points: 0 },
              ],
              time: 4,
            },
            id: 0,
          },
          {
            subtimeline: {
              score: 9,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Giancarlo Ferrero", points: 0 },
                { name: "Markel Brown", points: 3 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Colbey Ross", points: 6 },
              ],
              time: 3,
            },
            id: 1,
          },
          {
            subtimeline: {
              score: 9,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 3 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Colbey Ross", points: 6 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 3,
            },
            id: 2,
          },
          {
            subtimeline: {
              score: 5,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 3 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Colbey Ross", points: 0 },
                { name: "Guglielmo Caruso", points: 2 },
              ],
              time: 1,
            },
            id: 3,
          },
          {
            subtimeline: {
              score: 5,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 3 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Colbey Ross", points: 0 },
                { name: "Guglielmo Caruso", points: 2 },
              ],
              time: 1,
            },
            id: 4,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Colbey Ross", points: 0 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 1,
            },
            id: 5,
          },
          {
            subtimeline: {
              score: 0,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 0 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 1,
            },
            id: 6,
          },
          {
            subtimeline: {
              score: 3,
              slice: [
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 3 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
                { name: "Guglielmo Caruso", points: 0 },
              ],
              time: 1,
            },
            id: 7,
          },
          {
            subtimeline: {
              score: 3,
              slice: [
                { name: "Tariq Owens", points: 0 },
                { name: "Jaron Johnson", points: 0 },
                { name: "Markel Brown", points: 3 },
                { name: "Andriu Tomas Woldetensae", points: 0 },
                { name: "Giovanni De Nicolao", points: 0 },
              ],
              time: 1,
            },
            id: 8,
          },
        ],
      },
      teamname: "Openjobmetis Varese",
    },
  ]);
  const [team, setteam] = useState(bothteams.at(0));
  const [quadrant, setquadrant] = useState(team.quadrant1);

  const [show, setshow] = useState(-10);
  const [xaxis, setxaxis] = useState(0);
  const [yaxis, setyaxis] = useState(0);

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
              changeQuadrant(1);
              setquadrantindex(1);
              setshow(-10);
            }}
          >
            Q1
          </button>
        </div>
        <div>
          <button
            class="roundbutton1"
            style={{
              backgroundColor: "#9dd045",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onClick={() => {
              changeQuadrant(2);
              setquadrantindex(2);
              setshow(-10);
            }}
          >
            Q2
          </button>
        </div>
        <div>
          <button
            class="roundbutton1"
            style={{
              backgroundColor: "#9dd045",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onClick={() => {
              changeQuadrant(3);
              setquadrantindex(3);
              setshow(-10);
            }}
          >
            Q3
          </button>
        </div>
        <div>
          <button
            class="roundbutton1"
            style={{
              backgroundColor: "#9dd045",
              color: "white",
              height: "45px",
              width: "125px",
            }}
            onClick={() => {
              changeQuadrant(4);
              setquadrantindex(4);
              setshow(-10);
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
      <div>
        {" "}
        <button
          onClick={(event) => {
            event.preventDefault();
            toggleQuadrants();
            setyaxis(event.pageY + 20);
            setxaxis(event.pageX - 40);
          }}
          style={{
            backgroundColor: "#9dd045",
            color: "white",
            height: "45px",
            width: "125px",
          }}
          class="roundbutton"
        >
          {" "}
          {quadrantindex}. Quarter <FaArrowDown />{" "}
        </button>{" "}
      </div>
    );
  }

  function addplayer(player, time) {
    const newplayer1 = { name: player.name, points: player.points, time: time };

    const comparisonarray0 = comparisonarray;
    const slice0 = comparisonarray0.subtimeline.slice;
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
        style={{ backgroundColor: "#cccccc", height: 100, width: 150 }}
        key={player.name}
      >
        <div>{player.name}</div>
        <div> Points {player.points}</div>
        PPM : {player.points / props.subtimeline.time}
        <button
          class="roundbutton"
          onClick={() => {
            removeplayer(player);
          }}
        >
          {" "}
          <FaTrashAlt />{" "}
        </button>
      </div>
    ));

    return (
      <div>
        <SearchBar /> <div class="bigtext"> Your Combination </div>
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
        </div>
        <div class="flex-container">{slicebox}</div>
      </div>
    );
  }
  // this expects a timeline
  function SliceArray({ props1 }) {
    const slicearray = props1;
    const slicearraybox = slicearray.map((array) => (
      <div style={{ width: 1000 }} key={array.id}>
        {""}
        <div class="bigtext"> Player Combination </div>

        <div class="flex-container">
          {" "}
          {array.subtimeline.slice.map((player) => {
            return (
              <div
                class="roundsmall "
                style={{ backgroundColor: "#cccccc" }}
                key={player.name}
              >
                Name: {player.name} Score: {player.points} | PPM :{" "}
                {player.points / array.subtimeline.time}
                <button
                  style={{ backgroundColor: "#cccccc" }}
                  class="roundbutton orangebutton"
                  onClick={() => {
                    addplayer(player, array.subtimeline.time);
                  }}
                >
                  {" "}
                  <FaPlus />{" "}
                </button>
              </div>
            );
          })}
        </div>
        <div class="flex-container">
          {" "}
          <div>
            <div class="bigtext topmargin20">| Based on 5 players |</div>{" "}
          </div>
          <div style={{ backgroundColor: "#00FFFF" }} class="round">
            <div class="bigtext"> | Team Performance: | </div>
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
      </div>
    ));
    return (
      <div>
        <div class="bigtext"> Teamname: {team.teamname} </div>
        <div class="flex-container">
          <div>
            {" "}
            <button
              class="roundbutton"
              style={{
                backgroundColor: "#9dd045",
                color: "white",
                height: "45px",
                width: "125px",
              }}
              onClick={() => {
                if (teamindex === 0) {
                  setteamindex(1);

                  const paloki = bothteams.at(1);
                  setteam(paloki);
                  changeQuadrant(quadrantindex);
                } else {
                  setteamindex(0);

                  const paloki = bothteams.at(0);
                  setteam(paloki);
                  changeQuadrant(quadrantindex);
                }
              }}
            >
              Click To View other team
            </button>{" "}
          </div>

          <div>
            {" "}
            <ImprovizedDropDown />
            <LeftClickDropdown />
          </div>
        </div>{" "}
        <div id="slicearray" style={{ height: window.innerHeight }}>
          {" "}
          {slicearraybox}{" "}
        </div>{" "}
      </div>
    );
  }

  const getMatchInfo = async () => {
    const messagetosend = document.getElementById("messagetext").value;
    const parcela1 = "{id:" + messagetosend + "}";

    axios
      .post("http://80.240.28.176:8001", parcela1)
      .then((resp) => {
        const receivedinfo = resp.data;
        setbothteams(receivedinfo);
        setteam(receivedinfo.at(0));
        setquadrant(team.quadrant1);
        setteamindex(0);
        changeQuadrant(1);
        setquadrantindex(1);
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
          class="roundbutton"
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

  function changeQuadrant(index) {
    if (index === 1) {
      setquadrant(team.quadrant1);
    }
    if (index === 2) {
      setquadrant(team.quadrant2);
    }
    if (index === 3) {
      setquadrant(team.quadrant3);
    }
    if (index === 4) {
      setquadrant(team.quadrant4);
    }
  }

  function ShowTeamsBreakdown() {
    return (
      <div style={{ backgroundColor: "#e6e6e6" }}>
        {" "}
        <SliceArray props1={quadrant.timeline} />
      </div>
    );
  }

  return (
    <div
      style={{
        height: window.outerHeight,
        width: window.outerWidth,
        backgroundColor: "#e6e6e6",
      }}
      className="App"
    >
      <div style={{ backgroundColor: "#e6e6e6" }} class="flex-container">
        {" "}
        <ShowTeamsBreakdown />
        <ComparisonSlice props={comparisonarray} />
      </div>
    </div>
  );
}

export default App;
