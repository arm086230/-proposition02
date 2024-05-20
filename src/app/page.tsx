"use client";
import React, { useState } from "react";
import Input from "../components/input/inputtest";
import Autoserarch from "../components/input/autoserarch";
import Inputdropdow from "@/components/input/inputdropdow";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
  //     console.log('Mouse down event:', event);
  // };

  return (
    <div>
      {/* <Input
                disabled = {false}
                type="text"
                placeholder="Enter text"
                value={inputValue}
                size="large"
                label="My Input"
                onChange={handleChange}
            /> */}
      <Autoserarch
        disabled={false}
        type="text"
        placeholder="Enter text"
        value={inputValue}
        size="medium"
        onChange={handleChange}
      />

      <Inputdropdow
        disabled={false}
        type="text"
        value=""
        placeholder="Enter text"
        size="medium"
      />
    </div>
  );
}

export default App;
