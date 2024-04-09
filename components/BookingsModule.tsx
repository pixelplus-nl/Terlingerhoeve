"use client";
import { usePathname } from "next/navigation";
export default function BookingsModule() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/plan-uw-verblijf/reserveer-online" ? (
        <div>
          <h2>boekingsmodule</h2>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
