import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import featureMessages from "@/messages/en/feature.json";
import feedbackMessages from "@/messages/en/feedback.json";
import homeMessages from "@/messages/en/home.json";
import navMessages from "@/messages/en/nav.json";
import privacyMessages from "@/messages/en/privacy.json";
import featureMessagesZh from "@/messages/zh/feature.json";
import feedbackMessagesZh from "@/messages/zh/feedback.json";
import homeMessagesZh from "@/messages/zh/home.json";
import navMessagesZh from "@/messages/zh/nav.json";
import privacyMessagesZh from "@/messages/zh/privacy.json";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "en";
  const messagesByLocale = {
    en: {
      feature: featureMessages,
      feedback: feedbackMessages,
      home: homeMessages,
      nav: navMessages,
      privacy: privacyMessages,
    },
    zh: {
      feature: featureMessagesZh,
      feedback: feedbackMessagesZh,
      home: homeMessagesZh,
      nav: navMessagesZh,
      privacy: privacyMessagesZh,
    },
  } as const;

  return {
    locale,
    messages:
      messagesByLocale[locale as keyof typeof messagesByLocale] ??
      messagesByLocale.en,
  };
});
