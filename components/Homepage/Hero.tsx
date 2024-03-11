import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <div className="w-full relative h-72 md:h-[30rem] lg:h-[40rem] xl:h-[45rem]  mt-3">
        <Image
          src="/Hero.png"
          fill
          placeholder="blur"
          blurDataURL="data:..."
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
            backgroundPosition: "bottom",
          }}
          alt="Hero img"
          title="Hero img"
        />
        <div className="hidden relative md:flex h-full justify-center ml-[35rem] items-center">
          <Image
            src="/Shapes/HeroShape.svg"
            width={500}
            height={500}
            alt="Hero shape"
            className="w-80"
          />
          <div className="text-[#fff] absolute text-center">
            <div className="max-w-[15rem]">
              <h1 className="text-4xl font-spartan">LEKKER SAMEN EVEN WEG?</h1>
              <h2 className="text-lg mt-3">
                Op ons landgoed in Zuid-Limburg ben je er écht even tussenuit
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden relative -mt-20 flex justify-center items-center">
        <Image
          src="/Shapes/HeroShape.svg"
          width={500}
          height={500}
          alt="Hero shape"
          className="w-80 m-auto"
        />
        <div className="text-[#fff] absolute text-center">
          <div className="max-w-[15rem]">
            <h1 className="text-4xl font-spartan">LEKKER SAMEN EVEN WEG?</h1>
            <h2 className="text-lg mt-3">
              Op ons landgoed in Zuid-Limburg ben je er écht even tussenuit
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
