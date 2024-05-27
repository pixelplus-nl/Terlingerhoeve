import { getHolidayHomesPage } from "@/lib/getHolidayHomes";
import Base from "@/components/HolidayHomesPage/Base";

export default async function page() {
  const data = await getHolidayHomesPage();

  return (
    <>
      <Base data={data} />
    </>
  );
}
