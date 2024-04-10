import Link from "next/link";
import SearchBookDropdown from "./SearchBookDropdown";
import AnmButton from "../AnmButton";

export default function SearchBookTile() {
  return (
    <div className="flex justify-center relative z-20">
      <div className="bg-[#fff] items-center w-full mt-3  px-5 lg:px-10 lg:mx-5 xl:mx-0 rounded-3xl lg:rounded-full gap-8  py-5 lg:flex  justify-between text-[#556A76]">
        <h2 className="text-xl md:text-3xl lg:text-2xl text-center lg:text-left">
          Zoek & boek je
          <br className="hidden lg:block" /> vakantiewoning
        </h2>
        <div className="grid grid-cols-2 max-w-sm lg:max-w-none mx-auto lg:grid-rows-1 lg:grid-cols-4 grid-rows-2 gap-3 mt-3 lg:mt-0">
          <div>
            <SearchBookDropdown label="Aankomst" />
          </div>
          <div>
            <SearchBookDropdown label="Verblijfsduur" />
          </div>
          <div>
            <SearchBookDropdown label="Personen" />
          </div>
          <div>
            <SearchBookDropdown label="Slaapkamers" />
          </div>
        </div>
        <Link href="#">
          <AnmButton
            extraClasses={"bg-lightGreen mx-auto p-5"}
            anmColor={"bg-brown"}
            buttonText="Zoek & boek"
            scale={40}
          />
        </Link>
      </div>
    </div>
  );
}
