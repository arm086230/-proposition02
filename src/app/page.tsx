"use client";
import React, { useState } from "react";
import Input from "../components/input/inputtest";
import Autoserarch from "../components/input/autoserarch";
import Inputdropdow from "@/components/input/inputdropdow";
import DatePicker from "../components/input/datePicker"

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
  //     console.log('Mouse down event:', event);
  // };

  const handleC  = (date: Date | null) => {
    console.log("Select Date",date)
  }

  return (
    <div>

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
      />

      <DatePicker 
      dateFormat="mm-dd-yyyy"
      selectedDate ={null}
      placeholderText=""
      disabled={false}
      size="medium"
      onChange={handleC}
      />

    </div>
  );
}

export default App;
