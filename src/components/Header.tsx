import { For } from "solid-js";
import type { ResumeData } from "../data/resume";

interface HeaderProps {
  data: ResumeData;
}

export default function Header(props: HeaderProps) {
  return (
    <header class="bg-gradient-to-br from-surface-800 via-primary-900 to-surface-800 text-white rounded-2xl p-8 md:p-12 shadow-lg">
      <div class="text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-2 tracking-tight">
          {props.data.name}
        </h1>
        <p class="text-surface-300 text-lg md:text-xl mb-6">
          {props.data.nameEn}
        </p>

        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <For each={props.data.links}>
            {(link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 hover:scale-105 rounded-lg text-sm font-medium transition-all backdrop-blur-sm"
              >
                {link.label}
                <svg
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </For>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-6 text-sm">
          <span class="px-3 py-1 bg-primary-500/20 rounded-full">
            プログラマー歴: {props.data.experienceYears}
          </span>
          <span class="px-3 py-1 bg-primary-500/20 rounded-full">
            フリーランス歴: {props.data.freelanceYears}
          </span>
        </div>

        <div class="flex flex-wrap justify-center gap-2">
          <For each={props.data.positions}>
            {(position) => (
              <span class="px-3 py-1.5 bg-primary-600 rounded-lg text-sm font-medium">
                {position}
              </span>
            )}
          </For>
        </div>
      </div>
    </header>
  );
}
