import { type JSX, createSignal, onMount } from "solid-js";

interface SectionProps {
  title: string;
  children: JSX.Element;
  id?: string;
}

export default function Section(props: SectionProps) {
  let ref: HTMLElement | undefined;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref);
  });

  return (
    <section
      ref={ref}
      id={props.id}
      style={{ "will-change": visible() ? "auto" : "opacity, transform", "scroll-margin-top": "3.5rem" }}
      class={`section-card bg-surface-800 rounded-2xl shadow-sm border border-surface-700 p-6 md:p-8 transition-all duration-600 motion-reduce:transition-none motion-reduce:!opacity-100 motion-reduce:!translate-y-0 ${
        visible() ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <h2 class="text-xl md:text-2xl font-bold text-surface-50 mb-6 pb-3 border-b-2 border-primary-500">
        {props.title}
      </h2>
      {props.children}
    </section>
  );
}
