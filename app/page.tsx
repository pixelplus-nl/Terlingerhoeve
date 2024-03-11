import Hero from "@/components/Homepage/Hero";
import RentHouses from "@/components/Homepage/RentHouses";
import SearchBookTile from "@/components/Homepage/SearchBookTile";
import { getHomePage } from "@/lib/getHomePage";

export default async function Home() {
  const data = await getHomePage();
  const homepageData = data.pages.edges[0].node;

  return (
    <div>
      <div className="max-w-[90rem] m-auto">
        <Hero />
        <SearchBookTile />
        <RentHouses homepageData={homepageData} />
      </div>
    </div>
  );
}
