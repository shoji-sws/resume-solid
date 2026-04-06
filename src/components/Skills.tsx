import { For } from "solid-js";
import { Tabs } from "@kobalte/core/tabs";
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
  return (
    <Section title="スキル" id="skills">
      <Tabs defaultValue={props.skills[0]?.category}>
        <Tabs.List class="flex flex-wrap gap-2 mb-6" aria-label="スキルカテゴリ">
          <For each={props.skills}>
            {(cat) => (
              <Tabs.Trigger
                value={cat.category}
                class="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-surface-700 text-surface-400 hover:bg-surface-600 data-[selected]:bg-primary-600 data-[selected]:text-white data-[selected]:shadow-sm"
              >
                {cat.category}
              </Tabs.Trigger>
            )}
          </For>
        </Tabs.List>

        <For each={props.skills}>
          {(cat) => (
            <Tabs.Content value={cat.category} class="bg-surface-700 rounded-xl p-5">
              <SkillTree items={cat.items} />
            </Tabs.Content>
          )}
        </For>
      </Tabs>
    </Section>
  );
}
