import { For, createSignal, onMount, onCleanup } from "solid-js";

const sections = [
  { id: "skills", label: "スキル" },
  { id: "values", label: "価値観" },
  { id: "strengths", label: "強み" },
  { id: "direction", label: "今後の方向性" },
  { id: "career", label: "職務経歴" },
  { id: "recent-tech", label: "最近の技術" },
  { id: "interests", label: "関心" },
  { id: "books", label: "技術書" },
] as const;

export default function Nav() {
  const [activeId, setActiveId] = createSignal("");

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    onCleanup(() => observer.disconnect());
  });

  return (
    <nav
      class="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300 no-print min-h-0 px-0"
      aria-label="セクションナビゲーション"
    >
      <div class="max-w-3xl mx-auto px-4 flex gap-1 overflow-x-auto py-2 scrollbar-none">
        <For each={sections}>
          {(section) => (
            <a
              href={`#${section.id}`}
              class={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                activeId() === section.id
                  ? "bg-primary text-primary-content"
                  : "text-base-content/50 hover:bg-base-300"
              }`}
              aria-current={activeId() === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          )}
        </For>
      </div>
    </nav>
  );
}
