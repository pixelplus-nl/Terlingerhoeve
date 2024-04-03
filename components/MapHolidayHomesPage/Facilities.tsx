import Image from "next/image";

export default function Facilities(props: any) {
  return (
    <div>
      {props.data.page.map_holiday_homes_page.facilitie.map(
        (facilitie: any, index: any) => {
          return (
            <div key={index} className="text-blue flex mb-10 justify-between items-start">
              <div
                className={`${
                  facilitie.bgcolorIcon === "green"
                    ? "bg-[#BCD1A5]"
                    : "bg-[#75C0E2]"
                } h-10 w-10 p-2 rounded-full `}>
                <div className="relative w-full h-full">
                  <Image
                    src={facilitie.icon.sourceUrl}
                    fill
                    placeholder="blur"
                    blurDataURL="data:..."
                    priority
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                    }}
                    alt={""}
                  />
                </div>
              </div>
              <div className="max-w-[19rem] sm:max-w-xl">
                <p>{facilitie.titel}</p>
                <p>{facilitie.description}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
