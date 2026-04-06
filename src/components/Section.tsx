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
      class={`section-card card bg-base-200 shadow-sm border border-base-300 transition-all duration-600 motion-reduce:transition-none motion-reduce:!opacity-100 motion-reduce:!translate-y-0 ${
        visible() ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div class="card-body p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-bold text-base-content mb-6 pb-3 border-b-2 border-primary">
          {props.title}
        </h2>
        {props.children}
      </div>
    </section>
  );
}
