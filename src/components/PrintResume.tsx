import { For, Show } from "solid-js";
import { resume } from "../data/resume";
import type { SkillItem } from "../data/resume";

function PrintHeader() {
  return (
    <header class="mb-8 pb-6 border-b-2 border-surface-900 pt-8">
      <h1 class="text-4xl font-bold text-surface-900 tracking-tight">
        {resume.name}
      </h1>
      <p class="text-surface-500 text-base mt-1">{resume.nameEn}</p>

      <div class="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
        <span class="font-semibold text-surface-600">プログラマー歴</span>
        <span class="text-surface-800">{resume.experienceYears}</span>
        <span class="font-semibold text-surface-600">フリーランス歴</span>
        <span class="text-surface-800">{resume.freelanceYears}</span>
      </div>

      <div class="mt-8 space-y-2 text-sm text-surface-600">
        <For each={resume.links}>
          {(link) => (
            <div>
              <span class="font-semibold">{link.label}:</span>{" "}
              <span class="text-surface-800">{link.url}</span>
            </div>
          )}
        </For>
      </div>

      <div class="mt-8 space-y-2">
        <For each={resume.positions}>
          {(pos) => (
            <div>
              <span class="inline-block px-3 py-1 text-sm font-medium border border-surface-900 text-surface-900 rounded">
                {pos}
              </span>
            </div>
          )}
        </For>
      </div>
    </header>
  );
}

function SkillTreeFlat(props: { items: SkillItem[]; depth?: number }) {
  const depth = () => props.depth ?? 0;
  return (
    <ul class={depth() > 0 ? "ml-3" : ""}>
      <For each={props.items}>
        {(item) => (
          <li class="leading-relaxed">
            <span
              class={
                depth() === 0
                  ? "font-semibold text-surface-900 text-sm"
                  : "text-surface-700 text-xs"
              }
            >
              {depth() > 0 && "- "}
              {item.name}
            </span>
            {item.years && (
              <span class="text-xs text-surface-400 ml-1">({item.years})</span>
            )}
            {item.children && (
              <SkillTreeFlat items={item.children} depth={depth() + 1} />
            )}
          </li>
        )}
      </For>
    </ul>
  );
}

function PrintSkills() {
  return (
    <section class="print-section mb-5">
      <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
        スキル
      </h2>
      <div class="grid grid-cols-2 gap-4">
        <For each={resume.skills}>
          {(cat) => (
            <div>
              <h3 class="text-sm font-bold text-surface-800 mb-1">
                {cat.category}
              </h3>
              <SkillTreeFlat items={cat.items} />
            </div>
          )}
        </For>
      </div>
    </section>
  );
}

function BulletList(props: { title: string; items: string[] }) {
  return (
    <div>
      <Show when={props.title}>
        <h3 class="text-sm font-bold text-surface-800 mb-1">{props.title}</h3>
      </Show>
      <ul class="space-y-0.5">
        <For each={props.items}>
          {(item) => (
            <li class="text-xs text-surface-700 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-surface-400">
              {item}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

function PrintValues() {
  return (
    <>
      <section class="print-section mb-5">
        <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
          価値観
        </h2>
        <BulletList title="コアバリュー" items={resume.values} />
      </section>

      <section class="print-section mb-5">
        <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
          強み
        </h2>
        <BulletList title="" items={resume.strengths} />
      </section>

      <section class="print-section mb-5">
        <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
          今後の方向性
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <BulletList title="伸ばしたい領域" items={resume.growthAreas} />
          <BulletList title="キャリアの方向性" items={resume.careerDirection} />
        </div>
      </section>
    </>
  );
}

function PrintCareer() {
  return (
    <section class="mb-5">
      <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
        職務経歴
      </h2>
      <div class="space-y-4">
        <For each={resume.career}>
          {(entry) => (
            <div class="print-career-entry border-l-2 border-surface-300 pl-4 pb-1">
              <div class="flex items-baseline justify-between gap-2">
                <h3 class="text-sm font-bold text-surface-900">
                  {entry.title}
                </h3>
                <span class="text-xs text-surface-900 font-medium whitespace-nowrap">
                  {entry.period}
                </span>
              </div>
              <p class="text-xs text-surface-600 mt-0.5">{entry.overview}</p>

              <div class="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
                <span class="font-semibold text-surface-500">ポジション</span>
                <span class="text-surface-700">
                  {entry.positions.join(", ")}
                </span>

                <span class="font-semibold text-surface-500">技術</span>
                <span class="text-surface-700">
                  {entry.technologies.join(", ")}
                </span>
              </div>

              <div class="mt-1.5">
                <ul class="space-y-0.5">
                  <For each={entry.tasks}>
                    {(task) => (
                      <li class="text-xs text-surface-700 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-surface-400">
                        {task}
                      </li>
                    )}
                  </For>
                </ul>
              </div>

              <Show when={entry.notes && entry.notes.length > 0}>
                <div class="mt-1">
                  <ul class="space-y-0.5">
                    <For each={entry.notes}>
                      {(note) => (
                        <li class="text-xs text-surface-500 italic leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-surface-300">
                          {note}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </Show>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}

function PrintInterests() {
  return (
    <>
      <section class="print-section mb-5">
        <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
          最近触って良かった技術
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <For each={resume.recentTech}>
            {(section) => (
              <div>
                <h3 class="text-sm font-bold text-surface-800 mb-1">
                  {section.title}
                </h3>
                <ul class="space-y-1">
                  <For each={section.items}>
                    {(item) => (
                      <li class="text-xs">
                        <span class="font-medium text-surface-800">
                          {item.name}
                        </span>
                        <Show when={item.description}>
                          <span class="text-surface-500">
                            {" "}
                            - {item.description}
                          </span>
                        </Show>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </div>
      </section>

      <section class="print-section mb-5">
        <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
          関心のある技術
        </h2>
        <div class="grid grid-cols-3 gap-4">
          <For each={resume.interests}>
            {(section) => (
              <div>
                <h3 class="text-sm font-bold text-surface-800 mb-1">
                  {section.title}
                </h3>
                <span class="text-xs text-surface-700">
                  {section.items.map((i) => i.name).join(", ")}
                </span>
              </div>
            )}
          </For>
        </div>
      </section>

      <section class="print-section mb-5">
        <h2 class="text-base font-bold text-surface-900 border-b border-surface-300 pb-1 mb-3">
          好き・参考にしている技術書
        </h2>
        <ul class="space-y-0.5">
          <For each={resume.books}>
            {(book) => (
              <li class="text-xs text-surface-700 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-surface-400">
                {book}
              </li>
            )}
          </For>
        </ul>
      </section>
    </>
  );
}

export default function PrintResume() {
  return (
    <div class="max-w-[210mm] mx-auto bg-white text-surface-900 px-8 py-6 min-h-screen print:px-0 print:py-0">
      <PrintHeader />
      <PrintSkills />
      <PrintValues />
      <PrintCareer />
      <PrintInterests />
    </div>
  );
}
