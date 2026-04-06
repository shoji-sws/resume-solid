import { For, createSignal } from "solid-js";
import type { SkillCategory, SkillItem } from "../data/resume";
import Section from "./Section";

interface SkillsProps {
  skills: SkillCategory[];
}

function SkillTree(props: { items: SkillItem[]; depth?: number }) {
  const depth = () => props.depth ?? 0;
  return (
    <ul class={`space-y-1 ${depth() > 0 ? "ml-4 mt-1" : ""}`}>
      <For each={props.items}>
        {(item) => (
          <li>
            <div class="flex items-center gap-2">
              {depth() > 0 && (
                <span class="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" aria-hidden="true" />
              )}
              <span
                class={
                  depth() === 0
                    ? "font-semibold text-surface-100"
                    : "text-surface-400"
                }
              >
                {item.name}
              </span>
              {item.years && (
                <span class="text-xs px-2 py-0.5 bg-primary-900/30 text-primary-300 rounded-full hover:bg-primary-900/50 transition-colors">
                  {item.years}
                </span>
              )}
            </div>
            {item.children && (
              <SkillTree items={item.children} depth={depth() + 1} />
            )}
          </li>
        )}
      </For>
    </ul>
  );
}

export default function Skills(props: SkillsProps) {
  const [activeTab, setActiveTab] = createSignal(0);

  const handleTabKeyDown = (e: KeyboardEvent) => {
    const count = props.skills.length;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (activeTab() + 1) % count;
      setActiveTab(next);
      (e.currentTarget as HTMLElement)
        .parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
        [next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (activeTab() - 1 + count) % count;
      setActiveTab(prev);
      (e.currentTarget as HTMLElement)
        .parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
        [prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveTab(0);
      (e.currentTarget as HTMLElement)
        .parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
        [0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveTab(count - 1);
      (e.currentTarget as HTMLElement)
        .parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
        [count - 1]?.focus();
    }
  };

  return (
    <Section title="スキル" id="skills">
      {/* Tab buttons */}
      <div class="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="スキルカテゴリ">
        <For each={props.skills}>
          {(cat, i) => (
            <button
              role="tab"
              aria-selected={activeTab() === i()}
              aria-controls={`skill-panel-${i()}`}
              id={`skill-tab-${i()}`}
              tabIndex={activeTab() === i() ? 0 : -1}
              class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab() === i()
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-surface-700 text-surface-400 hover:bg-surface-600"
              }`}
              onClick={() => setActiveTab(i())}
              onKeyDown={handleTabKeyDown}
            >
              {cat.category}
            </button>
          )}
        </For>
      </div>

      {/* Tab content */}
      <div
        id={`skill-panel-${activeTab()}`}
        role="tabpanel"
        aria-labelledby={`skill-tab-${activeTab()}`}
        class="bg-surface-700 rounded-xl p-5"
      >
        <SkillTree items={props.skills[activeTab()]?.items ?? []} />
      </div>
    </Section>
  );
}
