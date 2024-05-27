import { getHolidayHomesPage } from "@/lib/getHolidayHomes";
import Base from "@/components/HolidayHomesPage/Base";
import { Suspense } from 'react'

export default async function page() {
  const data = await getHolidayHomesPage();

  return (
    <>
      <Suspense>
        <Base data={data} />
      </Suspense>
    </>
  );
}
