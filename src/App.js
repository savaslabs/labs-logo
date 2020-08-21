import React, { useState } from "react";
import "./App.css";
import { LabsLogo } from "./components/LabsLogo";
import { ColorPicker } from "./components/ColorPicker";

const App = () => {
  const [background, setBackground] = useState("#F35A69");
  const [textColor, setTextColor] = useState("#F9FAFB");
  const [ava, setAva] = useState("#221c35");
  const [goggles, setGoggles] = useState("#F9FAFB");
  const [avaOutline, setAvaOutline] = useState("none");

  return (
    <div className="main">
      <div className="row">
        <div className="column column-sm">
          <ColorPicker
            for="background"
            current={background}
            onChange={setBackground}
          />
          <br />
          <ColorPicker for="text" current={textColor} onChange={setTextColor} />
          <br />
          <ColorPicker for="ava" current={ava} onChange={setAva} />
          <br />
          <ColorPicker for="goggles" current={goggles} onChange={setGoggles} />
          <br />
          <ColorPicker
            for="ava-outline"
            current={avaOutline}
            onChange={setAvaOutline}
          />
        </div>
        <div className="column column-lg">
          <LabsLogo
            background={background}
            textColor={textColor}
            ava={ava}
            goggles={goggles}
            avaOutline={avaOutline}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
