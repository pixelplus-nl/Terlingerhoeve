import AnmButton from "@/components/AnmButton";
import { getSightsPage } from "@/lib/getSightsPage";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  const fetchData = await getSightsPage();
  const metaData = fetchData.page.seo;

  return {
    title: metaData.title,
    description: metaData.metaDesc,
  };
}

export default async function page() {
  const sightsData = await getSightsPage();
  const sights = sightsData.page.sightsGraph.sights;

  return (
    <>
      <div className="flex flex-col max-w-xl mx-auto px-5 md:px-10 mb-10 items-center mt-10">
        <h1 className="font-spartan uppercase mb-5 text-3xl md:text-4xl lg:text-5xl">
          {sightsData.page.title}
        </h1>
        <div
          className="md:text-lg max-w-sm md:max-w-md text-center"
          dangerouslySetInnerHTML={{
            __html: sightsData.page.sightsGraph.description,
          }}
        />
      </div>

      <div className="grid mx-auto my-20 gap-16 max-w-[90rem] 2xl:px-0 md:grid-cols-2 px-5 md:px-10">
        {sights.map((sight: any, index: number) => {
          return (
            <div
              key={index}
              className="text-center  md:even:mt-40 flex items-center flex-col gap-5 md:gap-10 justify-start">
              <Link
                href={sight.link.uri}
                className="w-full flex justify-center">
                <div className="mask1 group relative cursor-pointer  sm:pt-[66%] w-full pt-[94%] md:pt-[90%] lg:pt-[80%] max-w-[36rem]">
                  <Image
                    src={`${sight.featuredImage.sourceUrl}`}
                    fill
                    placeholder="blur"
                    blurDataURL="data:..."
                    priority
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      zIndex: -1,
                    }}
                    alt={sightsData.page.title}
                    title={sightsData.page.title}
                    className="group-hover:scale-110 transition-all"
                  />
                </div>
              </Link>

              <div>
                <h2 className="text-2xl !leading-7 md:text-3xl font-spartan uppercase lg:text-4xl">
                  {sight.title}
                </h2>
                <p className="max-w-xs text-lg mt-3 mb-5 mx-auto">
                  {sight.description}
                </p>

                <Link
                  className="mx-auto max-w-56 block w-full"
                  href={sight.link.uri}>
                  <AnmButton
                    extraClasses={"bg-brown px-5 py-2"}
                    anmColor={"bg-lightGreen"}
                    buttonText={sight.title}
                    scale={60}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
