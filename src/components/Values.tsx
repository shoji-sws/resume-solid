import { For } from "solid-js";
import Section from "./Section";

interface ValuesProps {
  values: string[];
  strengths: string[];
  growthAreas: string[];
  careerDirection: string[];
}

function CardList(props: { title: string; items: string[]; accent?: string }) {
  return (
    <div class="card bg-base-300 border border-base-content/10">
      <div class="card-body p-5">
        <h3 class={`font-bold mb-3 ${props.accent ?? "text-base-content"}`}>
          {props.title}
        </h3>
        <ul class="space-y-2">
          <For each={props.items}>
            {(item) => (
              <li class="flex items-start gap-2 text-base-content/85 text-sm leading-relaxed">
                <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
}

export default function Values(props: ValuesProps) {
  return (
    <>
      <Section title="価値観" id="values">
        <CardList title="コアバリュー" items={props.values} />
      </Section>

      <Section title="強み" id="strengths">
        <CardList title="" items={props.strengths} accent="text-primary" />
      </Section>

      <Section title="今後の方向性" id="direction">
        <div class="grid gap-4 md:grid-cols-2">
          <CardList title="伸ばしたい領域" items={props.growthAreas} />
          <CardList title="キャリアの方向性" items={props.careerDirection} />
        </div>
      </Section>
    </>
  );
}
