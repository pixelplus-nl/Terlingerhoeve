import { fetchAPI } from "./base";
import { cache } from "react";

export const getFaq = cache(async () => {
  const data = await fetchAPI(
    `query Faq {
  page(id: "81", idType: DATABASE_ID) {
    title
    faq {
      faq {
        question
        answer
      }
    }
  }
}`
  );
  return data;
});
