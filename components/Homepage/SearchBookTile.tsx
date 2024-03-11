import Link from "next/link";
import SearchBookDropdown from "./SearchBookDropdown";

export default function SearchBookTile() {
  return (
    <div className="bg-[#fff] mt-3 md:-mt-20 px-5 md:px-10 mx-5 rounded-3xl md:rounded-full max-w-7xl md:mx-auto py-5 md:flex items-center justify-between text-[#556A76]">
      <h2 className="text-xl md:text-2xl text-center">Zoek & boek je<br className="hidden md:block" /> vakantiewoning</h2>
      <div className="grid grid-cols-2 md:grid-rows-1 md:grid-cols-4 grid-rows-2 gap-5 mt-3 md:mt-0">
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
      <div>
        <Link
          className="bg-[#A0AE9C] flex items-center gap-2 w-fit m-auto mt-5 md:mt-0 rounded-3xl p-3  text-[#fff]"
          href="">
          Zoek & boek <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}
