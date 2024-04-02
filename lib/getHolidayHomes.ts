import { fetchAPI } from "./base";
import { cache } from "react";

export const getHolidayHomesPage = cache(async () => {
  const data = await fetchAPI(
    `query Page {
  page(id: "15", idType: DATABASE_ID) {
    holiday_homes_page {
      title
      paragraph
    }
  }
}`
  );
  return data;
});
