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
                <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
              )}
              <span
                class={
                  depth() === 0
                    ? "font-semibold text-base-content"
                    : "text-base-content/80"
                }
              >
                {item.name}
              </span>
              {item.years && (
                <span class="badge badge-primary badge-sm badge-outline">
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
                class="tab data-[selected]:tab-active"
              >
                {cat.category}
              </Tabs.Trigger>
            )}
          </For>
        </Tabs.List>

        <For each={props.skills}>
          {(cat) => (
            <Tabs.Content value={cat.category} class="bg-base-300 rounded-xl p-6 border border-base-content/10">
              <SkillTree items={cat.items} />
            </Tabs.Content>
          )}
        </For>
      </Tabs>
    </Section>
  );
}
