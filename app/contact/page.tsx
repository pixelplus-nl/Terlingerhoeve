import { Corinthia } from "next/font/google";
import Image from "next/image";

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function page() {
  return (
    <>
      <div className="w-fit mx-auto mt-5 sm:mt-10">
        <h1
          className={`${corinthia.className} text-7xl lg:text-[7rem] hidden sm:block text-center`}>
          Familie Wouters
        </h1>
        <div className="flex sm:mt-5  flex-col sm:flex-row text-center sm:text-left gap-5">
          <ul>
            <li>Terlingerhoeve</li>
            <li>Gulperstraat 5</li>
            <li>6255 NX Noorbeek</li>
          </ul>
          <ul>
            <li>+31 (0)43 457 18 06</li>
            <li>+31(0)6 455 26 928</li>
            <li>info@terlingerhoeve.nl</li>
          </ul>
          <ul>
            <li>KVK: 00000000000</li>
            <li>IBAN: 00000000000</li>
            <li>BTW: 00000000000</li>
          </ul>
        </div>
      </div>

      <div className="shadow-[0px_0px_20px_5px_#00000015] max-w-2xl md:mx-auto mx-5 rounded-3xl py-10 px-5 mt-16">
        <h2 className="uppercase font-spartan text-3xl text-center mb-5">
          Stel je vraag
        </h2>
        <form>
          <div className="flex justify-center">
            <textarea
              className="rounded-lg max-w-lg w-full h-40 p-3 focus:outline-none"
              placeholder="Wat kunnen we voor je doen?"
            />
          </div>
          <div className="max-w-sm mx-auto text-darkGreen">
            <div className="flex flex-col mt-5 gap-5">
              <div className="flex w-full text-sm items-center justify-between">
                <label htmlFor="name">Je naam</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Voor en achternaam"
                  className="rounded-full px-3 py-2 sm:w-60"
                />
              </div>
              <div className="flex w-full text-sm items-center justify-between">
                <label htmlFor="name">E-mailadres</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="voorbeeld@email.com"
                  className="rounded-full px-3 py-2 sm:w-60"
                />
              </div>
              <div className="flex w-full text-sm items-center justify-between">
                <label htmlFor="name">Telefoonnummer</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="06 00 00 00 00"
                  className="rounded-full px-3 py-2 sm:w-60"
                />
              </div>
            </div>
            <div className="flex w-full justify-center mt-8">
              <button className="px-14 py-2 bg-darkGreen text-[#fff] rounded-full font-thin">
                Verstuur nu →
              </button>
            </div>
          </div>
        </form>
        <div></div>
      </div>
      <div className="w-4/6 mx-auto my-20 lg:my-32">
        <Image
          src="/Shapes/NetherlandsMap.svg"
          width={500}
          height={500}
          alt="Netherlands map"
          className="mx-auto"
        />
        <div className="flex justify-center mt-5 md:mt-10">
          <button className="bg-brown text-[#fff] rounded-full px-4 text-sm md:text-base py-2">
            Bekijk je route via Google Maps →{" "}
          </button>
        </div>
      </div>
    </>
  );
}
