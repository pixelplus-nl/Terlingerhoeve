import Image from "next/image";

export default function RentHouses(props: any) {
  return (
    <div className="px-5 md:px-10 flex flex-col gap-5 md:gap-10 mt-20 lg:mt-24">
      <h2 className="font-spartan text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto uppercase text-center">
        Een ontspannen verblijf in een prachtige omgeving
      </h2>
      <div className="sm:flex flex-col md:flex-row md:gap-10 lg:gap-10 items-center md:items-end justify-center">
        <div className="mask1 relative sm:w-[70%] sm:pt-[66%] w-full pt-[94%] md:pt-[50%] lg:pt-[40%] max-w-[36rem]">
          <div className="absolute top-0 left-0 w-full h-full">
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
  );
}
