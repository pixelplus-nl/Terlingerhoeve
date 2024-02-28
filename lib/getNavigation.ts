import { fetchAPI } from "./base";
import { cache } from "react";

export const getNavigation = cache(async () => {
  const data = await fetchAPI(
    `query Routing {
  menus {
    nodes {
      name
      menuItems {
        edges {
          node {
            id
            label
            uri
          }
        }
      }
    }
  }
}`
  );
  return data
});
