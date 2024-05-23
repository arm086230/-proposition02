"use client";
import React, { useState, useEffect } from "react";

interface DatePickerProps {
  selectedDate: Date | null;
  dateFormat?: "dd-mm-yyyy" | "yyyy-mm-dd" | "mm-dd-yyyy";
  onChange: (selectedDate: Date | null) => void;
  placeholderText?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

export default function DatePicker(props: DatePickerProps) {
  let size = "";
  if (props.size === "small") {
    size = "py-2 px-1";
  } else if (props.size === "medium") {
    size = "py-3 px-2";
  } else {
    size = "py-4 px-3";
  }

  const [inputDate, setInputDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (props.selectedDate) {
      setInputDate(formatDate(props.selectedDate));
    } else {
      setInputDate(undefined);
    }
  }, [props.selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
    let selectedDate: Date | null = null;
    if (e.target.value) {
      const dateParts = e.target.value.split("-");
      let year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1;
      const day = parseInt(dateParts[2], 10);

      if (props.dateFormat === "yyyy-mm-dd") {
        year -= 543;
      } else if (props.dateFormat === "dd-mm-yyyy") {
        year -= 543;
        selectedDate = new Date(year, month, day);
      } else if (props.dateFormat === "mm-dd-yyyy") {
        year -= 543;
        selectedDate = new Date(year, month, day);
      }

      selectedDate = new Date(year, month, day);
    }
    props.onChange(selectedDate);
  };

  const formatDate = (date: Date): string => {
    const year =
      props.dateFormat === "yyyy-mm-dd"
        ? date.getFullYear() + 543
        : date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    switch (props.dateFormat) {
      case "dd-mm-yyyy":
        return `${day}-${month}-${year}`;
      case "yyyy-mm-dd":
        return `${year}-${month}-${day}`;
      case "mm-dd-yyyy":
        return `${month}-${day}-${year}`;
      default:
        return date.toISOString().slice(0, 10);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <input
        type="date"
        onChange={handleDateChange}
        value={inputDate}
        disabled={props.disabled}
        placeholder={props.placeholderText}
        className={`${size}`}
      />
    </div>
  );
}
