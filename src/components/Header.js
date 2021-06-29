import React from "react";

const Header = ({darken}) => {
  return (
    <>
      <h1>Where in the World?</h1>
      <button style={{ position: "absolute", top: "0", right: "0" }} onClick={() => darken()}> Darkmode/Lightmode </button> 
    </>
  );
};

export default Header;
