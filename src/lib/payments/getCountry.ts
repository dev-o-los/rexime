import { CountryCode } from "dodopayments/resources/misc.mjs";
import { NextRequest } from "next/server";

export async function getCountryCode(req: NextRequest): Promise<CountryCode> {
  // Cloudflare sets cf-ipcountry header
  const cfCountry = req.headers.get("cf-ipcountry");
  if (cfCountry) {
    return cfCountry as CountryCode;
  }

  // fallback if header missing (e.g. local dev)
  return "IN";
}
