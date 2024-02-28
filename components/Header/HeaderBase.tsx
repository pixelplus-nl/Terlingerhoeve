import { getNavigation } from "@/lib/getNavigation";
import Header from "./Header";

export default async function HeaderBase() {
  const data = await getNavigation();

  console.log(data.menus.nodes[0].menuItems.edges);

  return (
    <>
      <Header />
    </>
  );
}
