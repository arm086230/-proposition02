import React, { useEffect, useState } from "react";

interface Country {
  name: string;
}

interface PropsDropdow {
  type: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Dropdow(props: PropsDropdow) {
  let size = "";
  if (props.size === "small") {
    size = "px-2 py-1";
  } else if (props.size === "medium") {
    size = "px-5 py-4";
  } else {
    size = "px-4 py-5";
  }

  const [countries, setCountries] = useState<Country[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data: Country[]) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-gray-400 w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"} ${size}`}
      >
        {selected
          ? selected.length > 25
            ? selected.substring(0, 25) + "..."
            : selected
          : "Select Country"}
      </div>
      <ul
        className={`bg-slate-500 mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <input
            type="text"
            value={inputValue}
            disabled={props.disabled}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country.name.toLowerCase() === selected.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country.name.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country.name.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
