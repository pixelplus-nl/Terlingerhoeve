import ImgCol from "@/components/Standard/ImgCol";
import ImgMob from "@/components/Standard/ImgMob";
import { getDetailPageContent } from "@/lib/getDetailPage";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getDetailPageNav } from "@/lib/getDetailPage";
import PageNav from "@/components/Standard/PageNav";
import { redirect } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const getData = await getDetailPageContent(params.slug);
  getData.page === null ? redirect("/404") : "";
  const post = getData.page.seo;
  return {
    title: post.title,
    description: post.metaDesc,
  };
}

export default async function page({ params }: PageProps) {
  const nav = await getDetailPageNav("cG9zdDoxMDk");
  const data = await getDetailPageContent(params.slug);

  return (
    <>
      <div>
        <PageNav nav={nav} />
        <div className="px-5 md:px-10 xl:px-0">
          {data.page.standard_page.heroImage === null ? (
            <></>
          ) : (
            <div className="mask1 relative mx-auto mt-10 sm:pt-[66%] w-full pt-[94%] md:pt-[30%] lg:pt-[33%] max-w-[36rem]">
              <Image
                src={`${data.page.standard_page.heroImage.sourceUrl}`}
                fill
                placeholder="blur"
                blurDataURL="data:..."
                priority
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  zIndex: -1,
                }}
                alt={""}
              />
            </div>
          )}
        </div>
        <h1 className="font-spartan text-center my-10 uppercase text-3xl md:text-4xl lg:text-5xl">
          {data.page.title}
        </h1>
        {data.page.standard_page.standardPageContent.map(
          (block: any, index: number) => {
            if (
              block.__typename ===
              `Page_StandardPage_StandardPageContent_ImgCol`
            ) {
              return (
                <div className="md:py-10 max-w-7xl mx-auto" key={index}>
                  <ImgCol block={block} />
                </div>
              );
            } else if (
              block.__typename ===
              `Page_StandardPage_StandardPageContent_ImgMob`
            ) {
              return (
                <React.Fragment key={index}>
                  <ImgMob block={block} />
                </React.Fragment>
              );
            } else if (
              block.__typename ===
              `Page_StandardPage_StandardPageContent_Paragraph`
            ) {
              return (
                <React.Fragment key={index}>
                  {block.fontSize === "big" ? (
                    <div className="py-5 text-2xl md:px-0 px-3 max-w-2xl mx-auto font-thin flex justify-center w-full">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: block.paragraph,
                        }}></div>
                    </div>
                  ) : (
                    <div className="py-5 md:px-0 px-3 max-w-2xl mx-auto flex justify-center w-full">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: block.paragraph,
                        }}></div>
                    </div>
                  )}
                </React.Fragment>
              );
            } else if (
              block.__typename ===
              `Page_StandardPage_StandardPageContent_SubTitle`
            ) {
              return (
                <div key={index} className="flex justify-center  ">
                  <h2 className="font-spartan uppercase text-2xl md:text-3xl">
                    {block.subTitle}
                  </h2>
                </div>
              );
            } else if (
              block.__typename === `Page_StandardPage_StandardPageContent_Cta`
            ) {
              return (
                <div
                  key={index}
                  className="flex flex-col px-5 md:px-10 gap-3 mx-auto max-w-4xl items-center  py-10">
                  <p className="font-spartan max-w-xs text-center text-xl uppercase">
                    {block.ctaText}
                  </p>
                  <Link
                    href={block.link.url}
                    className="px-3 py-2 bg-brown rounded-full text-[#fff]">
                    <span>{block.buttonText} →</span>
                  </Link>
                </div>
              );
            }
          }
        )}
      </div>
    </>
  );
}
