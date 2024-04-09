import Faq from "@/components/Faq/Faq";
import { getFaq } from "@/lib/getFaqPage";

export default async function page() {
  const data = await getFaq();

  return (
    <div>
      <h1 className="font-spartan text-center my-10 uppercase text-3xl md:text-4xl lg:text-5xl">
        {data.page.title}
      </h1>

      <div className="px-5 gap-x-20 md:px-10 2xl:px-0 md:flex mb-10 max-w-6xl mx-auto">
        <p className=" text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          convallis felis vel lorem convallis finibus. Sed enim odio, vehicula
          non sem ac, euismod consectetur orci.
          <span className="hidden md:block mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            convallis felis vel lorem convallis finibus. Sed enim odio, vehicula
            non sem ac, euismod consectetur orci. Finibus. Sed enim odio,
            vehicula non sem ac, euismod consectetur orci.
          </span>
        </p>

        <Faq data={data.page.faq.faq} />
      </div>
    </div>
  );
}
