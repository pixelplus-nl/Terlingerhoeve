import { getNavigation } from "@/lib/getNavigation";
import Header from "./Header";

export default async function HeaderBase() {
  const menuItems = await getNavigation("dGVybToz");

  return (
    <>
      <Header menuItems={menuItems} />
    </>
  );
}
