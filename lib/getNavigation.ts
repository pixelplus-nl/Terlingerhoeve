import { fetchAPI } from "./base";
import { cache } from "react";

export const getMenu = cache(async (id: string) => {
  const data = await fetchAPI(
    `query Menu {
        menu(id: "${id}") {
          menuItems(first: 100) {
            nodes {
              id
              label
              uri
              parentId
            }
          }
        }
      }`
  );

  return data;
});

export const getNavigation = async (id: any) => {
  const menuData = await getMenu(id);
  const menuItems = menuData.menu.menuItems.nodes;

  var items: any = {};

  // First loop through each parent menu to make sure all elements exist in the array
    for (const item of menuItems) {
        if (item.parentId === null) {
            items[item.id] = {
                id: item.id,
                label: item.label,
                uri: item.uri,
                items: [],
            };
        }
    }

    // Assign each chlid to its parent
    for (const item of menuItems) {
        if (item.parentId !== null) {
            items[item.parentId].items.push({
                id: item.id,
                label: item.label,
                uri: item.uri,
            });
        }
    }

    return Object.values(items);
};

