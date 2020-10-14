import React from "react";
import "./styles.css";
import Project from "./funccomp/project";
class App extends React.Component {
  render() {
    return (
      <>
        <h1> My Portfolio </h1>

        <h3> Project 1 </h3>
        <Project
          name="Umbono"
          git="https://github.com/iadjivon"
          live="https://umbono.vercel.app/"
          img="https://files.constantcontact.com/f2c04391601/33f56ebc-eccd-4013-862e-951e36c5da09.png"
        />

        <h3> Project 2 </h3>
        <Project
          name="L'Afrique en Luxe"
          git="https://github.com/iadjivon"
          live="https://idaproject2.herokuapp.com/"
          img="https://files.constantcontact.com/f2c04391601/f36c9ca0-e626-46b1-bb61-04c5fe411246.png"
        />
      </>
    );
  }
}

export default App;
