"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function TlDatePicker(props: any) {

  const [startDate, setStartDate] = useState<Date | null>(
    props.arrivalDate ? 
      new Date(
        props.arrivalDate.split("-")[2] + "-" + 
        props.arrivalDate.split("-")[1] + "-" +
        props.arrivalDate.split("-")[0]
      )
    :
      new Date()
    );
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
        onChange={(date: Date) => {
          setStartDate(date)

          const formattedDate = `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`;

          props.setArrivalDate(formattedDate);
        }}
        popperPlacement="bottom-start"
        formatWeekDay={formatWeekDayToDutch}
      />
    </div>
  );
}
