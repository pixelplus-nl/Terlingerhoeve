import Image from "next/image";

export default function ImgMob(props: any) {
  return (
    <div className=" md:hidden relative z-40">
      <Image
        src={props.block.imgMob.sourceUrl}
        width={800}
        height={800}
        alt=""
        className="rounded-none"
      />
    </div>
  );
}
