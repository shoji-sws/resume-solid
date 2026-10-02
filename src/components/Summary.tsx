import { For } from "solid-js";
import type { Achievement, WorkCondition } from "../data/resume";
import Section from "./Section";

interface SummaryProps {
  summary: string[];
  achievements: Achievement[];
  workConditions: WorkCondition[];
}

export default function Summary(props: SummaryProps) {
  return (
    <>
      <Section title="サマリ" id="summary">
        <div class="space-y-3 mb-6">
          <For each={props.summary}>
            {(paragraph) => (
              <p class="text-base-content/85 leading-relaxed">{paragraph}</p>
            )}
          </For>
        </div>

        <div class="card bg-base-300 border border-base-content/10">
          <div class="card-body p-5">
            <h3 class="font-bold mb-3 text-primary">主な実績</h3>
            <ul class="space-y-3">
              <For each={props.achievements}>
                {(achievement) => (
                  <li class="flex items-start gap-2 text-sm leading-relaxed">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                    <div>
                      <span class="font-bold text-base-content">
                        {achievement.title}
                      </span>
                      <p class="text-base-content/85">{achievement.description}</p>
                    </div>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="稼働条件" id="conditions">
        <dl class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
          <For each={props.workConditions}>
            {(condition) => (
              <>
                <dt class="font-semibold text-base-content/60 whitespace-nowrap">
                  {condition.label}
                </dt>
                <dd class="text-base-content/90">{condition.value}</dd>
              </>
            )}
          </For>
        </dl>
      </Section>
    </>
  );
}
