"use client";

import SearchBookTile from "@/components/Homepage/SearchBookTile";
import Link from "next/link";
import { getHolidayHomesPage } from "@/lib/getHolidayHomes";
import HomeBlocks from "@/components/HolidayHomesPage/HomeBlocks";
import { fetchObjects } from "@/lib/rsv";
import React, { useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation'

export default function page(props: any) {
  const data = props.data;
  const router = useRouter();

  const nextFriday = new Date();
  nextFriday.setDate(nextFriday.getDate() + ((5 - nextFriday.getDay() + 7) % 7));
  const formattedDate = `${nextFriday.getDate()}-${
    nextFriday.getMonth() + 1
  }-${nextFriday.getFullYear()}`;

  // Get current searchParams
  const searchParams = useSearchParams();

  const [arrivalDate, setArrivalDate] = useState(searchParams.get('arrival_date') ? searchParams.get('arrival_date') : formattedDate);
  const [stayLength, setStayLength] = useState(searchParams.get('stay_length') ? searchParams.get('stay_length') : "weekend");
  const [amountOfPeople, setAmountOfPeople] = useState(searchParams.get('amount_of_people') ? searchParams.get('amount_of_people') : "1");
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') ? searchParams.get('bedrooms') : "1");
  const [objects, setObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fetch_objects = async () => {

    if (loaded)
      setIsLoading(true);

    const resource = await fetch("/ajax/fetch_objects", {
      method: "POST",
      body: JSON.stringify({
        arrival_date: arrivalDate,
        stay_length: stayLength,
        amount_of_people: amountOfPeople,
        bedrooms: bedrooms,
      }),
      headers: {
        accept: "application/json",
      },
      next: {
        revalidate: 0,
      },
    });

    const data = await resource.json();

    setObjects(data);

    if (loaded)
      router.push('/de-vakantiewoningen?arrival_date=' + arrivalDate + '&stay_length=' + stayLength + '&amount_of_people=' + amountOfPeople + '&bedrooms=' + bedrooms);

    if (loaded)
      setIsLoading(false);

    setLoaded(true);
  }

  if (!loaded) {
    fetch_objects();
  }

  return (
    <>
      <div className="text-center flex flex-col items-center mt-10">
        <h1 className="font-spartan uppercase text-3xl md:text-4xl lg:text-5xl">
          De vakantiewoningen
        </h1>
        <p className="md:text-lg max-w-sm mt-5 md:max-w-md">
          Recreatie Landgoed Terlingerhoeve is verdeeld in afzonderlijke
          vakantiewoningen voor 2 tot 10 personen, gelegen aan de pittoreske
          binnenplaats of aan de ruimtelijke buitenkant van de hoeve. Benieuwd
          naar de ligging? <br className="md:hidden" />
          <Link
            className="group ease-out duration-700"
            href="/de-vakantiewoningen/vakantiewoningen-op-de-kaart">
            <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown/50 to-brown/50 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer">
              Bekijk ze op de kaart →
            </span>
          </Link>
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="px-5 mt-10 mx-auto">
          <SearchBookTile
            arrivalDate={arrivalDate}
            setArrivalDate={setArrivalDate}
            stayLength={stayLength}
            setStayLength={setStayLength}
            amountOfPeople={amountOfPeople}
            setAmountOfPeople={setAmountOfPeople}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            fetchObjects={fetch_objects}
          />
        </div>

        <div className="w-full relative md:px-10 max-w-4xl mx-auto mt-10">
          {isLoading || !loaded ? (
            <div className="text-center">Loader kan hier</div>
          ) : (
            <>
              {objects && objects.length === 0 ? (
                <div className="text-center">Geen objecten melding</div>
              ) : (
                <HomeBlocks objects={objects} />
              )}
            </>
          )}
        </div>

        <div className="bg-beige relative">
          <div className="pt-10  px-5 lg:px-0 max-w-2xl pb-20 lg:pb-32 mx-auto text-blue">
            <h2 className="text-2xl !leading-7">
              {data.page.holiday_homes_page.title}
            </h2>
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
