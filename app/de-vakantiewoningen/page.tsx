import SearchBookTile from "@/components/Homepage/SearchBookTile";
import Link from "next/link";
import { getHolidayHomesPage } from "@/lib/getHolidayHomes";
import HomeBlocks from "@/components/HolidayHomesPage/HomeBlocks";
import { fetchObjects } from "@/lib/rsv";

export default async function page() {
  const data = await getHolidayHomesPage();

  // Grabs the objects from the RSV "API"
  const objects = await fetchObjects("7-6-2024", "14", "4", "1");

  console.log(objects);

  return (
    <>
      <div className="text-center flex flex-col items-center mt-10">
        <h1 className="font-spartan uppercase text-3xl md:text-4xl lg:text-5xl">
          De vakantiewoningen
        </h1>
        <p className="text-sm md:text-base max-w-xs mt-5 md:max-w-md">
          Recreatie Landgoed Terlingerhoeve is verdeeld in afzonderlijke
          vakantiewoningen voor 2 tot 10 personen, gelegen aan de pittoreske
          binnenplaats of aan de ruimtelijke buitenkant van de hoeve. Benieuwd
          naar de ligging? <br className="md:hidden" />
          <Link
            className="group ease-out duration-700"
            href="/de-vakantiewoningen/vakantiewoningen-op-de-kaart">
            <span className="inline-block h-5 bg-left-bottom bg-gradient-to-r from-brown/50 to-brown/50 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer">
              Bekijk ze op de kaart →
            </span>
          </Link>
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="px-5 mt-10 mx-auto">
          <SearchBookTile />
        </div>

        <div className="w-full px-5 lg:px-0 relative md:px-10 max-w-4xl mx-auto mt-10">
          <HomeBlocks />
        </div>

        <div className="bg-beige relative">
          <div className="pt-16  px-5 lg:px-0 max-w-2xl pb-20 lg:pb-32 mx-auto text-blue">
            <h2 className="text-2xl">{data.page.holiday_homes_page.title}</h2>
            <div
              className="mt-5 font-thin"
              dangerouslySetInnerHTML={{
                __html: data.page.holiday_homes_page.paragraph,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
