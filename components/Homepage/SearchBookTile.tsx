import Link from "next/link";
import SearchBookDropdown from "./SearchBookDropdown";
import AnmButton from "../AnmButton";
import { useState } from "react";

const verblijfsduur = [
  { option: "Weekend | vr t/m ma" },
  { option: "Midweek | ma t/m vr" },
  { option: "1 week" },
  { option: "2 weken" },
  { option: "3 weken" },
  { option: "3 nachten | 4 dagen" },
  { option: "4 nachten | 5 dagen" },
  { option: "5 nachten | 6 dagen" },
  { option: "6 nachten | 7 dagen" },
  { option: "7 nachten | 8 dagen" },
  { option: "8 nachten | 9 dagen" },
  { option: "9 nachten | 10 dagen" },
  { option: "10 nachten | 11 dagen" },
  { option: "11 nachten | 12 dagen" },
  { option: "12 nachten | 13 dagen" },
  { option: "13 nachten | 14 dagen" },
  { option: "14 nachten | 15 dagen" },
  { option: "15 nachten | 16 dagen" },
  { option: "16 nachten | 17 dagen" },
  { option: "17 nachten | 18 dagen" },
  { option: "18 nachten | 19 dagen" },
  { option: "19 nachten | 20 dagen" },
  { option: "20 nachten | 21 dagen" },
  { option: "21 nachten | 22 dagen" },
];

const personen = [
  { option: "1 persoon" },
  { option: "2 personen" },
  { option: "3 personen" },
  { option: "4 personen" },
  { option: "5 personen" },
  { option: "6 personen" },
  { option: "7 personen" },
  { option: "8 personen" },
  { option: "9 personen" },
  { option: "10 personen" },
  { option: "11 personen" },
  { option: "12 personen" },
  { option: "13 personen" },
  { option: "14 personen" },
  { option: "15 personen" },
];

const slaapkamers = [
  { option: "minimaal 1 slaapkamer" },
  { option: "minimaal 2 slaapkamers" },
  { option: "minimaal 3 slaapkamers" },
  { option: "minimaal 4 slaapkamers" },
  { option: "minimaal 5 slaapkamers" },
];

export default function SearchBookTile() {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div className="flex justify-center relative z-20">
      <div className="bg-[#fff] items-center w-full mt-3  px-5 lg:px-10 lg:mx-5 xl:mx-0 rounded-3xl lg:rounded-full gap-8  py-5 lg:flex  justify-between text-[#556A76]">
        <h2 className="text-xl md:text-3xl lg:text-2xl text-center lg:text-left">
          Zoek & boek je
          <br className="hidden lg:block" /> vakantiewoning
        </h2>
        <div className="grid grid-cols-2 max-w-sm lg:max-w-none mx-auto lg:grid-rows-1 lg:grid-cols-4 grid-rows-2 gap-3 mt-3 lg:mt-0">
          <div></div>
          <div>
            <SearchBookDropdown
              label="Verblijfsduur"
              dropdown={verblijfsduur}
            />
          </div>
          <div>
            <SearchBookDropdown label="Personen" dropdown={personen} />
          </div>
          <div>
            {" "}
            <SearchBookDropdown
              label="Slaapkamers"
              dropdown={slaapkamers}
            />{" "}
          </div>
        </div>
        <Link href="#">
          <AnmButton
            extraClasses={"bg-lightGreen mx-auto w-fit p-5"}
            anmColor={"bg-brown"}
            buttonText="Zoek & boek"
            scale={40}
          />
        </Link>
      </div>
    </div>
  );
}
