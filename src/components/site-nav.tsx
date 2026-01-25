import { cookies } from "next/headers";
import SiteNavClient from "./site-nav-client";

export default async function SiteNav() {
  const store = await cookies();
  const locale = store.get("locale")?.value;
  const initialLocale: "en" | "zh" = locale === "zh" ? "zh" : "en";

  return <SiteNavClient initialLocale={initialLocale} />;
}
