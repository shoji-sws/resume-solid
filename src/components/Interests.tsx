import { For } from "solid-js";
import type { InterestSection } from "../data/resume";
import Section from "./Section";

interface InterestsProps {
  recentTech: InterestSection[];
  interests: InterestSection[];
  books: string[];
}

export default function Interests(props: InterestsProps) {
  return (
    <>
      <Section title="最近触って良かった技術" id="recent-tech">
        <div class="grid gap-4 md:grid-cols-2">
          <For each={props.recentTech}>
            {(section) => (
              <div class="card bg-base-300">
                <div class="card-body p-5">
                  <h3 class="font-bold text-base-content mb-3">
                    {section.title}
                  </h3>
                  <ul class="space-y-3">
                    <For each={section.items}>
                      {(item) => (
                        <li>
                          <span class="font-medium text-primary text-sm">
                            {item.name}
                          </span>
                          {item.description && (
                            <p class="text-xs text-base-content/50 mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </div>
            )}
          </For>
        </div>
      </Section>

      <Section title="関心のある技術" id="interests">
        <div class="grid gap-4 md:grid-cols-3">
          <For each={props.interests}>
            {(section) => (
              <div class="card bg-base-300">
                <div class="card-body p-5">
                  <h3 class="font-bold text-base-content mb-3">
                    {section.title}
                  </h3>
                  <div class="flex flex-wrap gap-1.5">
                    <For each={section.items}>
                      {(item) => (
                        <span class="badge badge-neutral badge-sm">
                          {item.name}
                        </span>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </Section>

      <Section title="好き・参考にしている技術書" id="books">
        <ul class="space-y-3">
          <For each={props.books}>
            {(book) => (
              <li class="flex items-center gap-3 text-base-content/70">
                <svg
                  class="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                {book}
              </li>
            )}
          </For>
        </ul>
      </Section>
    </>
  );
}
