import Image from "next/image";
import { Corinthia } from "next/font/google";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className="bg-beige z-20 relative">
      <div className="flex justify-center gap-5 bg-beige overflow-hidden">
        <Image
          src="/Footer/FooterImgOne.png"
          width={500}
          height={500}
          alt="Footer afbeelding terlingerhoeve"
          title="Footer afbeelding terlingerhoeve"
          className="grow w-44 sm:w-80 lg:w-[27rem] xl:w-[35rem]"
        />
        <Image
          src="/Footer/FooterImgTwo.png"
          width={500}
          height={500}
          alt="Footer afbeelding terlingerhoeve"
          title="Footer afbeelding terlingerhoeve"
          className=" grow w-44 sm:w-80 lg:w-[27rem] xl:w-[35rem]"
        />
        <Image
          src="/Footer/FooterImgThree.png"
          width={500}
          height={500}
          alt="Footer afbeelding terlingerhoeve"
          title="Footer afbeelding terlingerhoeve"
          className="grow w-44 sm:w-80 lg:w-[27rem] xl:w-[35rem]"
        />
      </div>
      <div className="flex justify-center items-center gap-5 md:gap-16 max-w-[90rem] 2xl:px-0 mx-auto pt-20">
        <hr className="h-[1px] w-full bg-brown" />
        <Image
          src="/Footer/Footerlogo.svg"
          width={300}
          height={300}
          alt="Footer logo terlingerhoeve"
          title="Footer logo terlingerhoeve"
          className="w-44 sm:w-60"
        />
        <hr className="h-[1px] w-full bg-brown" />
      </div>
      <div className="py-10 sm:py-16 w-fit mx-auto">
        <div
          className={`${corinthia.className} text-7xl sm:text-[6rem] text-center`}>
          <p>Familie Wouters</p>
        </div>

        <div className="grid grid-cols-2 mt-3 text-sm gap-y-1 max-w-sm mx-auto grid-rows-2 px-5">
          <p>Gulperstraat 5</p>
          <a className="group" href="tel:0434571806">
            <span className="inline-block pr-2 h-5 bg-left-bottom bg-gradient-to-r from-brown/50 to-brown/50 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">
              +31 (0)43 457 18 06
            </span>
          </a>
          <p>6255 NX Noorbeek</p>
          <a className="group" href="mailto:info@terlingerhoeve.nl">
            <span className="inline-block pr-2 h-5 bg-left-bottom bg-gradient-to-r from-brown/50 to-brown/50 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">
              info@terlingerhoeve.nl
            </span>
          </a>
        </div>
        <div className="px-5 md:px-10 py-10 sm:py-16">
          <h3 className="text-3xl font-spartan uppercase text-center">
            Tot snel? Je bent van harte welkom!
          </h3>
          <div className="flex justify-center gap-3 mt-3">
            <SocialIcon
              className="border-2 socialIcon rounded-full"
              bgColor="#F2EEE7"
              fgColor="#B55A45"
              url="https://www.instagram.com/terlingerhoeve/"
            />
            <SocialIcon
              className="border-2 socialIcon rounded-full"
              bgColor="#F2EEE7"
              fgColor="#B55A45"
              url="https://www.facebook.com/terlingerhoeve"
            />
          </div>
        </div>
        <div className="lg:flex gap-10 px-5 md:px-10 2xl:px-0 max-w-[90rem]">
          <ul className="font-thin flex flex-wrap gap-3 md:gap-5 justify-center">
            <li className="group">
              <Link
                className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
                href="">
                Veelgestelde vragen
              </Link>
            </li>
            <li className="group">
              <Link
                className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
                href="">
                Huisregels
              </Link>
            </li>
            <li className="group">
              <Link
                className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
                href="">
                Voorwaarden
              </Link>
            </li>
            <li className="group">
              <Link
                className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
                href="">
                Privacyverklaring
              </Link>
            </li>
            <li className="group">
              <Link
                className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
                href="">
                Cookies
              </Link>
            </li>
            <li className="group">
              <Link
                className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
                href="">
                Colofon
              </Link>
            </li>
          </ul>
          <Link className="mt-10 group lg:mt-0 block text-center" href="">
            <span className="inline-block pr-2 h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">
              Alle contactgegevens
            </span>
            →
          </Link>
        </div>
      </div>
    </footer>
  );
}
