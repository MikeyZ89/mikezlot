import React from "react";
import "./App.css";
import P1 from "../src/assets/img/team/MZ.jpg";
import Header from "./components/Header";
import Publications from "./components/Publications";
import PhotoGallery from "./components/PhotoGallery";
import Contact from "./components/Contact";

function App() {
  const publicationLinks = [
    {
      image: P1,
      title: "Mikey Zlotkowski",
      caption: "Photographer / Web Developer",
      instagram: "https://www.instagram.com/thesh_mikey/",
      contact: "https://www.tappy.tech/mikez",
    },
  ];

  const photoSet = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
  ]

  return (
    <div className="App">
      <Header />
      <Publications publicationLinks={publicationLinks}></Publications>
      <PhotoGallery photoSet={photoSet}></PhotoGallery>
      <Contact />
    </div>
  );
}

export default App;