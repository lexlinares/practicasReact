import React from "react";
import ReactDom from "react-dom";

const customStyle = {
  color: "white",
  fontfamily: "cursive",
  padding: "14px",
  background: "black"
};

customStyle.color = "red";

const fname = "Alex";

const Lname = "Linares";
const titulo = "My favorite movies are";

ReactDom.render(
  <div>
    <h1 style={customStyle}>Hi {`${fname} ${Lname}`}!</h1>

    <h1 className="titulo">{titulo}</h1>

    <ul>
      <li>Joker</li>

      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOtThNMnodcIXFPLBut_BJbhmUJcT6mK1mSxlhiTd1R7Gnm2-2&usqp=CAU"
      />

      <li>Batman the dark night</li>
      <img
        className="image"
        src="https://www.tierragamer.com/wp-content/uploads/2018/07/the_dark_knight_mejor_pelicula_comics.jpg"
      />

      <li>Batman Begins</li>

      <li>The good Father</li>
    </ul>
  </div>,

  document.getElementById("root")
);

/*
const name = "Alex Linares";

const currentDay = new Date();

const year = currentDay.getFullYear();

ReactDom.render(
  <div>
    <h1>Mi name is: {name}</h1>

    <p>copyright {year} </p>
  </div>,

  document.getElementById("root")
);


*/
