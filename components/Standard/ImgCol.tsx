import Image from "next/image";

export default function ImgCol(props: any) {
  return (
    <div className="hidden h-80 xl:h-96 gap-10  relative md:flex w-full">
      <div className="relative  w-full">
        <Image
          src={props.block.imgLeft.sourceUrl}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="image left col"
          title="image left col"
        />
      </div>
      <div className=" relative w-full">
        <Image
          src={props.block.imgRight.sourceUrl}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="image right col"
          title="image right col"
        />
      </div>
    </div>
  );
}
