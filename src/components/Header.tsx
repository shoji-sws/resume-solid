import { For } from "solid-js";
import type { ResumeData } from "../data/resume";

interface HeaderProps {
  data: ResumeData;
}

export default function Header(props: HeaderProps) {
  return (
    <header class="card bg-gradient-to-br from-base-300 via-primary/20 to-base-300 text-base-content shadow-xl border border-primary/20">
      <div class="card-body text-center py-10 md:py-14">
        <h1 class="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-primary-content drop-shadow-sm">
          {props.data.name}
        </h1>
        <p class="text-base-content/80 text-lg md:text-xl mb-8">
          {props.data.nameEn}
        </p>

        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <For each={props.data.links}>
            {(link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline btn-sm btn-primary backdrop-blur-sm"
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
          <span class="badge badge-primary badge-outline">
            プログラマー歴: {props.data.experienceYears}
          </span>
          <span class="badge badge-primary badge-outline">
            フリーランス歴: {props.data.freelanceYears}
          </span>
        </div>

        <div class="flex flex-wrap justify-center gap-2">
          <For each={props.data.positions}>
            {(position) => (
              <span class="badge badge-primary">
                {position}
              </span>
            )}
          </For>
        </div>
      </div>
    </header>
  );
}
