import { fetchAPI } from "./base";
import { cache } from "react";

export const getSightsPage = cache(async () => {
  const data = await fetchAPI(
    `query Page {
  page(id: "17", idType: DATABASE_ID) {
    sightsGraph {
      description
      sights {
        ... on Page_Sightsgraph_Sights_Sight {
          title
          buttonText
          description
          featuredImage {
            sourceUrl
          }
          link {
            ... on Page {
              uri
            }
          }
        }
      }
    }
    title
    seo{
      title
      metaDesc
    }
  }
}`
  );
  return data;
});


