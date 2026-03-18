import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import SiteNav from "../../components/site-nav";

type PolicyListItem =
  | string
  | {
      label?: string;
      text?: string;
    };

type PolicyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: PolicyListItem[];
    }
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "subsection";
      title: string;
      blocks: PolicyBlock[];
    };

type PolicySection = {
  id: string;
  title: string;
  blocks: PolicyBlock[];
};

function renderListItem(item: PolicyListItem) {
  if (typeof item === "string") {
    return item;
  }

  if (item.label && item.text) {
    return (
      <>
        <strong className="text-foreground">{item.label}</strong>
        {": "}
        {item.text}
      </>
    );
  }

  if (item.label) {
    return <strong className="text-foreground">{item.label}</strong>;
  }

  return item.text;
}

function renderBlocks(blocks: PolicyBlock[], depth = 0): ReactNode {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}-${depth}`;

    if (block.type === "paragraph") {
      return (
        <p key={key} className="text-muted-foreground leading-8">
          {block.text}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={key} className="list-disc space-y-3 pl-6 text-muted-foreground leading-8">
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-item-${itemIndex}`}>{renderListItem(item)}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "link") {
      return (
        <p key={key}>
          <a
            href={block.href}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-foreground/70"
          >
            {block.label}
          </a>
        </p>
      );
    }

    return (
      <div key={key} className="space-y-4">
        <h3 className={depth === 0 ? "text-xl font-semibold" : "text-lg font-semibold"}>
          {block.title}
        </h3>
        <div className="space-y-4">{renderBlocks(block.blocks, depth + 1)}</div>
      </div>
    );
  });
}

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");
  const intro = t.raw("intro") as string[];
  const sections = t.raw("sections") as PolicySection[];

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="space-y-12 text-foreground">
          <header className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
            <p className="text-sm text-muted-foreground">{t("lastUpdated")}</p>
            <p className="text-sm text-muted-foreground">{t("effectiveDate")}</p>
          </header>

          <section className="space-y-4">
            <p className="text-muted-foreground leading-8">{t("scope")}</p>
            {intro.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground leading-8">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="rounded-3xl border border-border/60 bg-muted/30 p-6">
            <h2 className="text-lg font-semibold">{t("tocTitle")}</h2>
            <ol className="mt-4 space-y-2 text-muted-foreground">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="space-y-5 scroll-mt-24">
              <h2 className="text-2xl font-bold">
                {index + 1}. {section.title}
              </h2>
              <div className="space-y-4">{renderBlocks(section.blocks)}</div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
