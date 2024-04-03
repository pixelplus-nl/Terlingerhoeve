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
          alt="Footer image"
          className="grow w-44 sm:w-80 lg:w-[27rem] xl:w-[35rem]"
        />
        <Image
          src="/Footer/FooterImgTwo.png"
          width={500}
          height={500}
          alt="Footer image"
          className=" grow w-44 sm:w-80 lg:w-[27rem] xl:w-[35rem]"
        />
        <Image
          src="/Footer/FooterImgThree.png"
          width={500}
          height={500}
          alt="Footer image"
          className="grow w-44 sm:w-80 lg:w-[27rem] xl:w-[35rem]"
        />
      </div>
      <div className="flex justify-center items-center gap-5 md:gap-16 max-w-[90rem] 2xl:px-0 mx-auto pt-20">
        <hr className="h-[1px] w-full bg-brown" />
        <Image
          src="/Footer/Footerlogo.svg"
          width={300}
          height={300}
          alt="Footer logo"
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
          <a href="tel:0434571806">+31 (0)43 457 18 06</a>
          <p>6255 NX Noorbeek</p>
          <a href="mailto:info@terlingerhoeve.nl">info@terlingerhoeve.nl</a>
        </div>
        <div className="px-5 md:px-10 py-10 sm:py-16">
          <h3 className="text-3xl font-spartan uppercase text-center">
            Tot snel? Je bent van harte welkom!
          </h3>
          <div className="flex justify-center gap-3 mt-3">
            <SocialIcon
              className="border-2 rounded-full"
              bgColor="#F2EEE7"
              fgColor="#B55A45"
              url="https://www.instagram.com/terlingerhoeve/"
            />
            <SocialIcon
              className="border-2 rounded-full"
              bgColor="#F2EEE7"
              fgColor="#B55A45"
              url="https://www.facebook.com/terlingerhoeve"
            />
          </div>
        </div>
        <div className="lg:flex gap-10 px-5 md:px-10 2xl:px-0 max-w-[90rem]">
          <ul className="font-thin flex flex-wrap gap-3 md:gap-5 justify-center">
            <li>
              <Link href="">Veelgestelde vragen</Link>
            </li>
            <li>
              <Link href="">Huisregels</Link>
            </li>
            <li>
              <Link href="">Voorwaarden</Link>
            </li>
            <li>
              <Link href="">Privacyverklaring</Link>
            </li>
            <li>
              <Link href="">Cookies</Link>
            </li>
            <li>
              <Link href="">Colofon</Link>
            </li>
          </ul>
          <Link className="mt-10 lg:mt-0 block text-center" href="">
            Alle contactgegevens →
          </Link>
        </div>
      </div>
    </footer>
  );
}
