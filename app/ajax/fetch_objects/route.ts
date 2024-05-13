import { NextResponse } from "next/server";
import { fetchObjects } from "@/lib/rsv";

export async function POST(request: Request) {
  
  let api_data;

  const res = await request.json();

  api_data = await fetchObjects(res.arrival_date, res.stay_length, res.amount_of_people, res.bedrooms);

  return NextResponse.json(api_data);
}
