import Image from "next/image";
import Link from "next/link";

export default function FullWidthBgSection() {
  return (
    <div className="relative my-20">
      <div className="mask2 relative w-full h-[40rem] md:h-[50rem] xl:h-[46rem] 2xl:h-[50rem]">
        <Image
          src="/fullWidthBgImage.jpg"
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
      <div className="absolute top-32 md:top-36 left-0 w-full  text-[#fff] flex justify-center">
        <div className="flex flex-col gap-3 lg:gap-5">
          <h2 className="font-spartan drop-shadow-lg text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto uppercase text-center">
            Welkom in de
            <br /> zuid-limburgse heuvels
          </h2>
          <p className="drop-shadow-md text-center text-lg md:text-xl lg:text-2xl">
            Een Nederlands stukje buitenland
          </p>
          <Link href="" className="bg-[#556A76] mx-auto p-3 lg:px-5 text-sm md:text-md lg:text-lg rounded-full">
            Wat is er te doen? →
          </Link>
        </div>
      </div>
    </div>
  );
}
