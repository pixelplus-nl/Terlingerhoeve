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

export const getMapHolidayHomesPage = cache(async () => {
  const data = await fetchAPI(
    `query Page {
  page(id: "33", idType: DATABASE_ID) {
    map_holiday_homes_page {
      apartments {
        ... on Page_MapHolidayHomesPage_Apartments_Apartment {
          __typename
          apartment
          mapNumber
        }
      }
      facilitie {
        ... on Page_MapHolidayHomesPage_Facilitie_Facilitie {
          __typename
          bgcolorIcon
          description
          icon {
            sourceUrl
          }
          titel
        }
      }
    }
  }
}`
  );
  return data;
});
