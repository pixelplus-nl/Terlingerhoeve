import FullWidthBgSection from "@/components/Homepage/FullWidthBgSection";
import Hero from "@/components/Homepage/Hero";
import RentHouses from "@/components/Homepage/RentHouses";
import Reviews from "@/components/Homepage/Reviews";
import SearchBookTile from "@/components/Homepage/SearchBookTile";
import UspSteps from "@/components/Homepage/UspSteps";
import { getHomePage } from "@/lib/getHomePage";

export default async function Home() {
  const data = await getHomePage();
  const homepageData = data.pages.edges[0].node;
  return (
    <div>
      <div className="max-w-[90rem] m-auto px-5 md:px-10 2xl:px-0">
        <Hero />
        <SearchBookTile />
        <RentHouses homepageData={homepageData} />
      </div>
      <FullWidthBgSection />
      <div className="max-w-[90rem] m-auto px-5 md:px-10 2xl:px-0">
        <UspSteps homepageData={homepageData}  />
        <Reviews homepageData={homepageData} />
      </div>
    </div>
  );
}
