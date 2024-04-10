import HomeBlocks from "@/components/MapHolidayHomesPage/HomeBlocks";
import Image from "next/image";
import { getMapHolidayHomesPage } from "@/lib/getHolidayHomes";
import Facilities from "@/components/MapHolidayHomesPage/Facilities";


export default async function page() {
  const data = await getMapHolidayHomesPage();

  return (
    <>
      <div className="px-5 md:px-10">
        <div className="max-w-[90rem] mx-auto">
          <div className=" relative w-full h-96 lg:h-[40rem]">
            <Image
              src="/img/map.png"
              fill
              placeholder="blur"
              blurDataURL="data:..."
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
              alt={""}
            />
          </div>
        </div>

        <div className="max-w-2xl  mx-auto">
          <div className="mt-10">
            <HomeBlocks data={data} />
          </div>

          <div className="bg-beige pt-10  md:pt-20 relative">
            <Facilities data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
