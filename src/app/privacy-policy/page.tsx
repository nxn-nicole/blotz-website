import SiteNav from "../../components/site-nav";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");
  const definitions = t.raw("interpretation.definitions") as { term: string; text: string }[];
  const personalDataList = t.raw("collecting.personalDataList") as string[];
  const applicationInfoList = t.raw("collecting.applicationInfoList") as string[];
  const useList = t.raw("collecting.useList") as { term: string; text: string }[];
  const shareList = t.raw("collecting.shareList") as { term: string; text: string }[];
  const retentionCategories = t.raw("retention.categories") as { title: string; items: string[] }[];
  const retentionReasons = t.raw("retention.reasons") as string[];
  const retentionProcedures = t.raw("retention.procedures") as string[];
  const disclosureOtherList = t.raw("disclosure.otherList") as string[];
  const contactMethods = t.raw("contact.methods") as string[];

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-10 text-foreground">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
            <p className="text-sm text-muted-foreground">{t("lastUpdated")}</p>
          </header>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t("intro.p1")}</p>
            <p>
              {t.rich("intro.p2", {
                link: (chunks) => (
                  <a
                    href="https://www.termsfeed.com/privacy-policy-generator/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-foreground/80 underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("interpretation.title")}</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("interpretation.interpretationTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("interpretation.interpretationText")}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("interpretation.definitionsTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("interpretation.definitionsIntro")}</p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                {definitions.map((item) => (
                  <li key={item.term}>
                    <strong className="text-foreground">{item.term}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("collecting.title")}</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("collecting.typesTitle")}</h3>
              <h4 className="text-lg font-semibold">{t("collecting.personalDataTitle")}</h4>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.personalDataText")}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {personalDataList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold">{t("collecting.usageDataTitle")}</h4>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.usageDataP1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.usageDataP2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.usageDataP3")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.usageDataP4")}</p>
              <h4 className="text-lg font-semibold">{t("collecting.applicationInfoTitle")}</h4>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.applicationInfoP1")}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {applicationInfoList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.applicationInfoP2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.applicationInfoP3")}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("collecting.useTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.useIntro")}</p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                {useList.map((item) => (
                  <li key={item.term}>
                    <strong className="text-foreground">{item.term}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">{t("collecting.shareIntro")}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {shareList.map((item) => (
                  <li key={item.term}>
                    <strong className="text-foreground">{item.term}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("retention.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("retention.p1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("retention.p2")}</p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                {retentionCategories.map((category) => (
                  <li key={category.title}>
                    <p className="text-foreground font-medium">{category.title}</p>
                    <ul className="list-disc pl-6 space-y-2">
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">{t("retention.p3")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("retention.p4")}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {retentionReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">{t("retention.p5")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("retention.p6")}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {retentionProcedures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("transfer.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("transfer.p1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("transfer.p2")}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("delete.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("delete.p1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("delete.p2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("delete.p3")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("delete.p4")}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("disclosure.title")}</h3>
              <h4 className="text-lg font-semibold">{t("disclosure.businessTitle")}</h4>
              <p className="text-muted-foreground leading-relaxed">{t("disclosure.businessText")}</p>
              <h4 className="text-lg font-semibold">{t("disclosure.lawTitle")}</h4>
              <p className="text-muted-foreground leading-relaxed">{t("disclosure.lawText")}</p>
              <h4 className="text-lg font-semibold">{t("disclosure.otherTitle")}</h4>
              <p className="text-muted-foreground leading-relaxed">{t("disclosure.otherIntro")}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {disclosureOtherList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("security.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("security.text")}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("children.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("children.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("children.p2")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("links.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("links.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("links.p2")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("changes.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("changes.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("changes.p2")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("changes.p3")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("contact.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("contact.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {contactMethods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
