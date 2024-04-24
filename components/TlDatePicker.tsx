"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function TlDatePicker() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const formatWeekDayToDutch = (nameOfDay: string) => {
    const weekdaysInDutch: { [key: string]: string } = {
      Sunday: "Zo",
      Monday: "Ma",
      Tuesday: "Di",
      Wednesday: "Wo",
      Thursday: "Do",
      Friday: "Vr",
      Saturday: "Za",
    };
    return weekdaysInDutch[nameOfDay];
  };

  return (
    <div className="w-full flex justify-end flex-col text-sm relative">
      <label className="pl-3">Aankomstdatum</label>
      <DatePicker
        selected={startDate}
        showIcon
        dateFormat="d/MM/yyyy"
        minDate={new Date()}
        toggleCalendarOnIconClick
        icon={<span>↓</span>}
        onChange={(date) => setStartDate(date)}
        popperPlacement="bottom-start"
        formatWeekDay={formatWeekDayToDutch}
      />
    </div>
  );
}
