import { For, Show, createSignal } from "solid-js";
import { Collapsible } from "@kobalte/core/collapsible";
import type { CareerEntry } from "../data/resume";
import Section from "./Section";

interface CareerProps {
  career: CareerEntry[];
}

function CareerCard(props: { entry: CareerEntry; index: number }) {
  const [open, setOpen] = createSignal(props.index < 3);

  return (
    <div class="relative pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      <div class="absolute left-[11px] top-6 bottom-0 w-0.5 bg-surface-600" />
      {/* Timeline dot */}
      <div class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary-600 border-4 border-surface-800 shadow-sm" />

      <Collapsible open={open()} onOpenChange={setOpen}>
        <div class="bg-surface-700 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
          <Collapsible.Trigger class="w-full text-left">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 class="font-bold text-lg text-surface-50">
                {props.entry.title}
              </h3>
              <span class="text-sm text-primary-400 font-medium whitespace-nowrap">
                {props.entry.period}
              </span>
            </div>
            <p class="text-sm text-surface-400 mb-2">{props.entry.overview}</p>
            <div class="flex items-center gap-1 text-xs text-surface-400">
              <svg
                class="w-4 h-4 transition-transform"
                classList={{ "rotate-180": open() }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {open() ? "閉じる" : "詳細を見る"}
            </div>
          </Collapsible.Trigger>

          <Collapsible.Content class="collapsible-content">
            <div class="mt-4 space-y-4 border-t border-surface-600 pt-4">
              {/* Positions */}
              <div>
                <h4 class="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">
                  ポジション
                </h4>
                <div class="flex flex-wrap gap-1.5">
                  <For each={props.entry.positions}>
                    {(pos) => (
                      <span class="px-2.5 py-1 bg-primary-900/30 text-primary-300 rounded-md text-xs font-medium">
                        {pos}
                      </span>
                    )}
                  </For>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 class="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">
                  技術スタック
                </h4>
                <div class="flex flex-wrap gap-1.5">
                  <For each={props.entry.technologies}>
                    {(tech) => (
                      <span class="px-2.5 py-1 bg-surface-600 text-surface-300 rounded-md text-xs overflow-wrap-break-word">
                        {tech}
                      </span>
                    )}
                  </For>
                </div>
              </div>

              {/* Tasks */}
              <div>
                <h4 class="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">
                  業務内容
                </h4>
                <ul class="space-y-1.5">
                  <For each={props.entry.tasks}>
                    {(task) => (
                      <li class="flex items-start gap-2 text-sm text-surface-300">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0" aria-hidden="true" />
                        {task}
                      </li>
                    )}
                  </For>
                </ul>
              </div>

              {/* Notes */}
              <Show when={props.entry.notes}>
                <div>
                  <h4 class="text-xs font-bold text-surface-400 uppercase tracking-wider mb-2">
                    心がけたこと
                  </h4>
                  <ul class="space-y-1.5">
                    <For each={props.entry.notes}>
                      {(note) => (
                        <li class="flex items-start gap-2 text-sm text-surface-400 italic">
                          <span class="w-1.5 h-1.5 rounded-full bg-surface-400 mt-2 shrink-0" aria-hidden="true" />
                          {note}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </Show>
            </div>
          </Collapsible.Content>
        </div>
      </Collapsible>
    </div>
  );
}

export default function Career(props: CareerProps) {
  return (
    <Section title="職務経歴" id="career">
      <div>
        <For each={props.career}>
          {(entry, i) => <CareerCard entry={entry} index={i()} />}
        </For>
      </div>
    </Section>
  );
}
