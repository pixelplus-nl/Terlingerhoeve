import { fetchAPI } from "./base";
import { cache } from "react";

export const getHomePage = cache(async () => {
  const data = await fetchAPI(
    `query Home {
  pages(where: {id: 9}) {
    edges {
      node {
        home {
          title
          paragraph
          image {
            sourceUrl
          }
          uspstepone
          uspsteptwo
          uspstepthree
					reviews{
            review
          }
        }
      }
    }
  }
}`
  );
  return data;
});
