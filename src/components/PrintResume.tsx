import { For, Show } from "solid-js";
import { resume } from "../data/resume";
import type { JSX } from "solid-js";
import type { SkillItem, InterestSection } from "../data/resume";

function DetailTable(props: {
  label: string;
  rows: { label: string; content: JSX.Element }[];
}) {
  return (
    <table class="print-skills-table print-detail-table" aria-label={props.label}>
      <colgroup><col style={{ width: "23%" }} /><col style={{ width: "77%" }} /></colgroup>
      <tbody>
        <For each={props.rows}>
          {(row) => <tr><th scope="row">{row.label}</th><td>{row.content}</td></tr>}
        </For>
      </tbody>
    </table>
  );
}

function PrintList(props: { items: string[] }) {
  return <ul class="print-item-list"><For each={props.items}>{(item) => <li>{item}</li>}</For></ul>;
}

function PrintHeader() {
  return (
    <header class="print-profile mb-5">
      <h1 class="text-4xl font-bold tracking-tight">{resume.name}</h1>
      <p class="text-sm mt-1 mb-4">{resume.nameEn}</p>
      <DetailTable label="プロフィール" rows={[
        { label: "プログラマー歴", content: resume.experienceYears },
        { label: "フリーランス歴", content: resume.freelanceYears },
        { label: "経験ポジション", content: <PrintList items={resume.positions} /> },
        ...resume.links.map((link) => ({
          label: link.label,
          content: <a href={link.url}>{link.url}</a>,
        })),
      ]} />
    </header>
  );
}

function PrintSummary() {
  return (
    <>
      <section class="print-content-section mb-5">
        <h2>サマリ</h2>
        <div class="text-xs leading-relaxed mb-3 space-y-1">
          <For each={resume.summary}>{(paragraph) => <p>{paragraph}</p>}</For>
        </div>
        <DetailTable label="主な実績" rows={resume.achievements.map((achievement) => ({
          label: achievement.title,
          content: achievement.description,
        }))} />
      </section>
      <section class="print-content-section mb-5">
        <h2>稼働条件</h2>
        <DetailTable label="稼働条件" rows={resume.workConditions.map((condition) => ({
          label: condition.label,
          content: condition.value,
        }))} />
      </section>
    </>
  );
}

function formatRelatedSkill(item: SkillItem): string {
  const years = item.years ? `（${item.years}）` : "";
  const children = item.children?.length
    ? `［${item.children.map(formatRelatedSkill).join("、")}］`
    : "";
  return `${item.name}${years}${children}`;
}

function PrintSkills() {
  return (
    <section class="print-skills mb-5">
      <h2 class="text-base font-bold text-base-content border-b border-base-300 pb-1 mb-3">
        スキル
      </h2>
      <For each={resume.skills}>
        {(cat) => (
          <table class="print-skills-table">
            <caption>{cat.category}</caption>
            <colgroup>
              <col style={{ width: "25%" }} />
              <col style={{ width: "14%" }} />
              <col style={{ width: "61%" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">スキル</th>
                <th scope="col">経験年数</th>
                <th scope="col">関連技術・活用内容</th>
              </tr>
            </thead>
            <tbody>
              <For each={cat.items}>
                {(item) => (
                  <tr>
                    <th scope="row">{item.name}</th>
                    <td class="print-skills-years">{item.years ?? "—"}</td>
                    <td>{item.children?.map(formatRelatedSkill).join("、") || "—"}</td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        )}
      </For>
    </section>
  );
}

function PrintValues() {
  return (
    <section class="print-content-section mb-5">
      <h2>価値観・強み・今後の方向性</h2>
      <DetailTable label="価値観・強み・今後の方向性" rows={[
        { label: "コアバリュー", content: <PrintList items={resume.values} /> },
        { label: "強み", content: <PrintList items={resume.strengths} /> },
        { label: "伸ばしたい領域", content: <PrintList items={resume.growthAreas} /> },
        { label: "キャリアの方向性", content: <PrintList items={resume.careerDirection} /> },
      ]} />
    </section>
  );
}

function PrintCareer() {
  return (
    <section class="print-content-section mb-5">
      <h2>職務経歴</h2>
      <For each={resume.career}>
        {(entry) => (
          <article class="print-career-table-entry">
            <h3>{entry.title}</h3>
            <DetailTable label={entry.title} rows={[
              { label: "期間", content: entry.period },
              { label: "概要", content: entry.overview },
              { label: "ポジション", content: <PrintList items={entry.positions} /> },
              ...(entry.teamSize ? [{ label: "チーム規模", content: entry.teamSize }] : []),
              { label: "担当工程", content: entry.phases.join("、") },
              { label: "使用技術", content: entry.technologies.join("、") },
              { label: "担当業務", content: <PrintList items={entry.tasks} /> },
              ...(entry.notes?.length ? [{ label: "取り組み・補足", content: <PrintList items={entry.notes} /> }] : []),
            ]} />
          </article>
        )}
      </For>
    </section>
  );
}

function InterestTable(props: { title: string; sections: InterestSection[] }) {
  return (
    <section class="print-content-section mb-5">
      <h2>{props.title}</h2>
      <DetailTable label={props.title} rows={props.sections.map((section) => ({
        label: section.title,
        content: (
          <ul class="print-item-list">
            <For each={section.items}>
              {(item) => (
                <li>
                  <span class="font-semibold">{item.name}</span>
                  <Show when={item.description}>
                    <span class="block">{item.description}</span>
                  </Show>
                </li>
              )}
            </For>
          </ul>
        ),
      }))} />
    </section>
  );
}

function PrintInterests() {
  return (
    <>
      <InterestTable title="最近触って良かった技術" sections={resume.recentTech} />
      <InterestTable title="関心のある技術" sections={resume.interests} />
      <section class="print-content-section mb-5">
        <h2>好き・参考にしている技術書</h2>
        <table class="print-skills-table" aria-label="好き・参考にしている技術書">
          <thead><tr><th scope="col">書籍名</th></tr></thead>
          <tbody><For each={resume.books}>{(book) => <tr><td>{book}</td></tr>}</For></tbody>
        </table>
      </section>
    </>
  );
}

export default function PrintResume() {
  return (
    <div data-theme="light" class="max-w-[210mm] mx-auto bg-base-100 text-base-content px-8 py-6 min-h-screen print:px-0 print:py-0">
      <PrintHeader />
      <PrintSummary />
      <PrintSkills />
      <PrintValues />
      <PrintCareer />
      <PrintInterests />
    </div>
  );
}
