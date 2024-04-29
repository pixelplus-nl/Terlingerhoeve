import Link from "next/link";

export default function PageNav(props: any) {
  return (
    <div className="flex flex-row-reverse justify-center items-center px-5 md:px-10 2xl:px-0 gap-x-5 gap-y-2 mt-3 flex-wrap-reverse max-w-3xl mx-auto">
      {props.nav.menu.menuItems.nodes.map((item: any, index: any) => {
        return (
          <Link href={item.uri} key={index}>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
