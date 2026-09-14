import { Page, PageHeader, SectionHead } from "../components/ui/Primitives";
import { Footer } from "../components/layout/Footer";
import { timeline, credentials } from "../data/journey";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Journey() {
  usePageMeta(
    "Journey — Mohammed Muneeb PT",
    "Experience, leadership, certifications, achievements and education — Mohammed Muneeb PT.",
  );

  return (
    <>
      <Page>
        <PageHeader
          eyebrow="/journey"
          title="Experience & credentials"
          lede="Leadership roles, certifications, awards, and the education that's tying it all together."
        />

        <section className="mb-16">
          <SectionHead eyebrow="log" title="Experience & leadership" />
          <div className="relative pl-7">
            <span aria-hidden className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-border" />
            <div className="flex flex-col gap-9">
              {timeline.map((entry, i) => (
                <div key={entry.hash} className="relative">
                  <span
                    aria-hidden
                    className={
                      "absolute -left-7 top-1 h-3 w-3 rounded-full border-2 bg-bg " +
                      (i === 0 ? "border-accent" : "border-border")
                    }
                  />
                  <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[16.5px] font-sans font-semibold text-text">{entry.title}</h3>
                    <span className="font-mono text-[12px] text-text-dim">{entry.date}</span>
                    <span className="font-mono text-[12px] text-accent">#{entry.hash}</span>
                  </div>
                  <div className="mb-2.5 text-[13px] text-text-dim">{entry.org}</div>
                  <ul className="flex flex-col gap-1.5">
                    {entry.points.map((point) => (
                      <li key={point} className="relative pl-4 text-[13.5px] text-text-muted">
                        <span className="absolute left-0 text-text-dim">–</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHead eyebrow="credentials" title="Credentials" />
          <div className="grid gap-8 sm:grid-cols-3">
            <CredentialColumn title="certifications" items={credentials.certifications} />
            <CredentialColumn title="achievements" items={credentials.achievements} />
            <CredentialColumn title="education" items={credentials.education} />
          </div>
        </section>
      </Page>
      <Footer />
    </>
  );
}

function CredentialColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; year: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 font-mono text-[12.5px] text-text-dim">{title}</h3>
      <ul className="flex flex-col">
        {items.map((item, i) => (
          <li
            key={item.label}
            className={
              "flex items-baseline justify-between gap-3 py-2.5 text-[13px] text-text-muted " +
              (i !== 0 ? "border-t border-border-soft" : "")
            }
          >
            <span>{item.label}</span>
            <span className="whitespace-nowrap font-mono text-[11px] text-text-dim">{item.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
