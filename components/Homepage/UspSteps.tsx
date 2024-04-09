import Image from "next/image";

export default function UspSteps(props: any) {
  return (
    <div className="text-md px-5 md:px-0 flex flex-col sm:flex-row gap-10 md:gap-14 max-w-4xl mx-auto">
      <div className="flex flex-col gap-5">
        <Image src="/Icons/HomepageIconS1.svg" alt="" width={100} height={100} className="w-16" />
        <p className="font-medium">{props.homepageData.home.uspstepone}</p>
      </div>
      <div className="flex flex-col gap-5 ml-5 sm:ml-0 sm:mt-10">
        <Image src="/Icons/HomepageIconS2.svg" alt="" width={100} height={100} className="w-16" />
        <p className="font-medium">{props.homepageData.home.uspsteptwo}</p>
      </div>
      <div className="flex flex-col gap-5 ml-10 sm:ml-0 sm:mt-20">
        <Image src="/Icons/HomepageIconS3.svg" alt="" width={100} height={100} className="w-16" />
        <p className="font-medium">{props.homepageData.home.uspstepthree}</p>
      </div>
    </div>
  );
}
