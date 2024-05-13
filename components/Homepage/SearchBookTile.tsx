"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBookDropdown from "./SearchBookDropdown";
import AnmButton from "../AnmButton";
import TlDatePicker from "../TlDatePicker";
import { useRouter } from 'next/navigation';

const verblijfsduur = [
  { option: "Weekend | vr t/m ma", value: "weekend"},
  { option: "Midweek | ma t/m vr", value: "midweek"},
  { option: "1 week", value: "7"},
  { option: "2 weken", value: "14"},
  { option: "3 weken", value: "21"},
  { option: "3 nachten | 4 dagen", value: "3"},
  { option: "4 nachten | 5 dagen", value: "4"},
  { option: "5 nachten | 6 dagen", value: "5"},
  { option: "6 nachten | 7 dagen", value: "6"},
  { option: "7 nachten | 8 dagen", value: "7"},
  { option: "8 nachten | 9 dagen", value: "8"},
  { option: "9 nachten | 10 dagen", value: "9"},
  { option: "10 nachten | 11 dagen", value: "10"},
  { option: "11 nachten | 12 dagen", value: "11"},
  { option: "12 nachten | 13 dagen", value: "12"},
  { option: "13 nachten | 14 dagen", value: "13"},
  { option: "14 nachten | 15 dagen", value: "14"},
  { option: "15 nachten | 16 dagen", value: "15"},
  { option: "16 nachten | 17 dagen", value: "16"},
  { option: "17 nachten | 18 dagen", value: "17"},
  { option: "18 nachten | 19 dagen", value: "18"},
  { option: "19 nachten | 20 dagen", value: "19"},
  { option: "20 nachten | 21 dagen", value: "20"},
  { option: "21 nachten | 22 dagen", value: "21"},
];

const personen = [
  { option: "1 persoon", value: "1"},
  { option: "2 personen", value: "2"},
  { option: "3 personen", value: "3"},
  { option: "4 personen", value: "4"},
  { option: "5 personen", value: "5"},
  { option: "6 personen", value: "6"},
  { option: "7 personen", value: "7"},
  { option: "8 personen", value: "8"},
  { option: "9 personen", value: "9"},
  { option: "10 personen", value: "10"},
  { option: "11 personen", value: "11"},
  { option: "12 personen", value: "12"},
  { option: "13 personen", value: "13"},
  { option: "14 personen", value: "14"},
  { option: "15 personen", value: "15"},
];

const slaapkamers = [
  { option: "minimaal 1", value: "1"},
  { option: "minimaal 2", value: "2"},
  { option: "minimaal 3", value: "3"},
  { option: "minimaal 4", value: "4"},
  { option: "minimaal 5", value: "5"},
];

export default function SearchBookTile(props: any) {

  const router = useRouter()

  const nextFriday = new Date();
  nextFriday.setDate(nextFriday.getDate() + ((5 - nextFriday.getDay() + 7) % 7));
  const formattedDate = `${nextFriday.getDate()}-${
    nextFriday.getMonth() + 1
  }-${nextFriday.getFullYear()}`;

  const [arrivalDate, setArrivalDate] = useState(props.arrivalDate ? props.arrivalDate : formattedDate);
  const [stayLength, setStayLength] = useState(props.stayLength ? props.stayLength : "weekend");
  const [amountOfPeople, setAmountOfPeople] = useState(props.amountOfPeople ? props.amountOfPeople : "1");
  const [bedrooms, setBedrooms] = useState(props.bedrooms ? props.bedrooms : "1");

  const handleSubmit = (e: any) => {
    
    e.preventDefault();

    // Use new app router
    router.push('/de-vakantiewoningen?arrival_date=' + arrivalDate + '&stay_length=' + stayLength + '&amount_of_people=' + amountOfPeople + '&bedrooms=' + bedrooms);
  }

  return (
    <div className="flex justify-center relative z-20">
      <div className="bg-[#fff] items-center w-full mt-3  px-5 lg:px-10 lg:mx-5 xl:mx-0 rounded-3xl lg:rounded-full gap-8  py-5 lg:flex  justify-between text-[#556A76]">
        <h2 className="text-xl md:text-3xl lg:text-2xl !leading-7 text-center lg:text-left">
          Zoek & boek je
          <br className="hidden lg:block" /> vakantiewoning
        </h2>
        <div className="grid grid-cols-2 max-w-sm lg:max-w-none mx-auto lg:grid-rows-1 lg:grid-cols-4 grid-rows-2 gap-3 mt-3 lg:mt-0">
          <div className="flex w-full">
            <TlDatePicker arrivalDate={props.arrivalDate ? props.arrivalDate : arrivalDate} setArrivalDate={props.setArrivalDate ? props.setArrivalDate : setArrivalDate} />
          </div>
          <div>
            <SearchBookDropdown
              label="Verblijfsduur"
              dropdown={verblijfsduur}
              setValue={props.setStayLength ? props.setStayLength : setStayLength}
            />
          </div>
          <div>
            <SearchBookDropdown
              label="personen"
              dropdown={personen}
              setValue={props.setAmountOfPeople ? props.setAmountOfPeople : setAmountOfPeople}
            />
          </div>
          <div>
            <SearchBookDropdown
              label="Slaapkamer(s)"
              dropdown={slaapkamers}
              setValue={props.setBedrooms ? props.setBedrooms : setBedrooms}
            />
          </div>
        </div>
        <Link href="#">
          <AnmButton
            extraClasses={"bg-lightGreen mx-auto w-fit p-5"}
            anmColor={"bg-darkGreen"}
            buttonText="Zoek & boek"
            scale={40}
            onClick={(e: any) => {

              if (props.fetchObjects)
                props.fetchObjects();
              else {

                handleSubmit(e);
              }
            }}
          />
        </Link>
      </div>
    </div>
  );
}
