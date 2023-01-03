import React from "react";
import { MixtapeProvider } from './MixtapeContext';
import { SongList } from './SongList';
import { Controls } from './Controls';

export const MixtapeApp = () => {
  return (
    <MixtapeProvider songs={songs}>
      <div className="app">
        <h1 className="heading">BUCHELI 🔥 HOT MIXTAPE</h1>
        <Controls />
        <SongList />
      </div>
    </MixtapeProvider>
  );
};

const songs = [
  {
    artist: "Sugar Ray",
    genre: "pop",
    name: "Every Morning",
    year: 1999
  },
  {
    artist: "Coldplay",
    genre: "pop",
    name: "Yellow",
    year: 2000
  },
  {
    artist: "Drake",
    genre: "rap",
    name: "Know Yourself",
    year: 2015
  },
  {
    artist: "Future",
    genre: "rap",
    name: "Low Life",
    year: 2016
  },
  {
    artist: "Post Malone",
    genre: "hip hop",
    name: "Wow",
    year: 2019
  },
  {
    artist: "Future",
    genre: "hip hop",
    name: "Life is Good",
    year: 2020
  },
  {
    artist: "Def Leppard",
    genre: "rock",
    name: "Animal",
    year: 1987
  },
  {
    artist: "Cheap Trick",
    genre: "rock",
    name: "The Flame",
    year: 1988
  },
  {
    artist: "Nirvana",
    genre: "rock",
    name: "Heart-Shaped Box",
    year: 1993
  },
  {
    artist: "Stone Temple Pilots",
    genre: "rock",
    name: "Interstate Love Song",
    year: 1994
  },
  {
    artist: "Harry Styles",
    genre: "pop",
    name: "As It Was",
    year: 2022
  },
  {
    artist: "Paramore",
    genre: "rock",
    name: "This is Why",
    year: 2023
  }
];