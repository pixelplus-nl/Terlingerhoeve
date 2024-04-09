import { fetchAPI } from "./base";
import { cache } from "react";

export const getDetailPageContent = cache(async (uri: string) => {
  const data = await fetchAPI(
    `query Page {
  page(id: "${uri}", idType: URI) {
    title
    standard_page {
      heroImage{
        sourceUrl
      }
      standardPageContent {
        ... on Page_StandardPage_StandardPageContent_SubTitle {
          __typename
          subTitle
        }
        ... on Page_StandardPage_StandardPageContent_ImgCol {
          __typename
          imgLeft {
            sourceUrl
          }
          imgRight {
            sourceUrl
          }
        }
        ... on Page_StandardPage_StandardPageContent_ImgMob {
          __typename
          imgMob {
            sourceUrl
          }
        }
        ... on Page_StandardPage_StandardPageContent_Paragraph {
          __typename
          fontSize
          paragraph
        }
        ... on Page_StandardPage_StandardPageContent_Cta {
          __typename
          ctaText
          buttonText
          link {
            url
          }
        }
      }
    }
    seo {
      title
      metaDesc
    }
  }
}`
  );
  return data;
});

export const getDetailPageNav = cache(async (navId: string) => {
  const data = await fetchAPI(
    `query Menu {
  menu(id: "dGVybToz") {
    menuItems(first: 100, where: {parentId: "${navId}"}) {
      nodes {
        uri
        label
      }
    }
  }
}`
  );
  return data;
});
