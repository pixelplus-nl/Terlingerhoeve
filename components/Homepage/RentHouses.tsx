import Image from "next/image";
import { HiMiniCheck } from "react-icons/hi2";
import Link from "next/link";
import UspSlider from "./UspSlider";

export default function RentHouses(props: any) {
  return (
    <>
      <div className="md:px-10 flex flex-col gap-5 md:gap-10 mt-20 lg:mt-32">
        <h2 className="font-spartan text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto uppercase text-center">
          Een ontspannen verblijf in een prachtige omgeving
        </h2>
        <div className="sm:flex flex-col md:flex-row md:gap-10 lg:gap-10 items-center md:items-end justify-center">
          <div className="mask1 relative sm:w-[70%] sm:pt-[66%] w-full pt-[94%] md:pt-[50%] lg:pt-[40%] max-w-[36rem]">
            <Image
              src={`${props.homepageData.home.image.sourceUrl}`}
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

          <div className="mt-10 md:mt-0 max-w-xs  flex flex-col justify-end">
            <div
              className="text-lg font-medium innerHtmlStyle"
              dangerouslySetInnerHTML={{
                __html: props.homepageData.home.paragraph,
              }}
            />
            <button className="bg-[#B55A45] mt-5 text-[#fff] p-3 rounded-3xl w-fit">
              De vakantiewoningen →
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:hidden">
        <UspSlider />
      </div>
      <div className="hidden lg:block mt-20 max-w-5xl mx-auto">
        <div className="flex justify-between text-sm">
          <div className="flex gap-2 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-7 h-7  flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={15} color="#6B7969" />
            </div>
            <Link className="underline hover:no-underline" href="">
              Boek hier
            </Link>{" "}
            voor de laagste prijs
          </div>
          <div className="flex gap-2 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-7 h-7  flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={15} color="#6B7969" />
            </div>
            Gehele jaar door geopend
          </div>
          <div className="flex gap-2 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-7 h-7  flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={15} color="#6B7969" />
            </div>
            Kleinschalig en authentiek
          </div>
          <div className="flex gap-2 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-7 h-7  flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={15} color="#6B7969" />
            </div>
            Zo in België (2,5 km) of Duitsland (10 km)
          </div>
        </div>
      </div>
    </>
  );
}
