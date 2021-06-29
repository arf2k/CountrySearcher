import React, {useState} from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  
  
  const [dark, setDark] = useState(false)
   
  const darken = () => {
    setDark(true)
    console.log("DARK")
  }
  
  return (
    
    
    <> 
    {dark? <BackgroundDark>
      <Header darken={darken}/>
    <Homepage/>
    </BackgroundDark> : <BackgroundLight> <Header darken={darken}/>
    <Homepage/></BackgroundLight> }
    </>
  );
}

export default App;

export const BackgroundDark = styled.div`
background-color: black;
`
export const BackgroundLight = styled.div`
background-color: white; 
`
