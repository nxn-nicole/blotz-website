import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import featureMessages from "@/messages/en/feature.json";
import feedbackMessages from "@/messages/en/feedback.json";
import homeMessages from "@/messages/en/home.json";
import navMessages from "@/messages/en/nav.json";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "en";
  const messagesByLocale = {
    en: {
      feature: featureMessages,
      feedback: feedbackMessages,
      home: homeMessages,
      nav: navMessages,
    },
  } as const;

  return {
    locale,
    messages:
      messagesByLocale[locale as keyof typeof messagesByLocale] ??
      messagesByLocale.en,
  };
});
