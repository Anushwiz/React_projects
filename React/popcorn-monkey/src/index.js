import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
/* import StarRating from "./StarRating"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*  <StarRating />
    <StarRating maxRating={10} color="blue" size="20px" />
    <StarRating
      maxRating={5}
      color="#f1c"
      size="20px"
      messages={["Terrible", "Bad", "Okay", "Good", "Awesome"]}
    /> */}
  </React.StrictMode>
);
