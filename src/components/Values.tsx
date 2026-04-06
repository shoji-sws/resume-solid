import { For } from "solid-js";
import Section from "./Section";

interface ValuesProps {
  values: string[];
  valuesDetailed: string[];
  strengths: string[];
  growthAreas: string[];
  careerDirection: string[];
}

function CardList(props: { title: string; items: string[]; accent?: string }) {
  return (
    <div class="bg-surface-700 rounded-xl p-5">
      <h3 class={`font-bold mb-3 ${props.accent ?? "text-surface-100"}`}>
        {props.title}
      </h3>
      <ul class="space-y-2">
        <For each={props.items}>
          {(item) => (
            <li class="flex items-start gap-2 text-surface-300 text-sm leading-relaxed">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0" />
              {item}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default function Values(props: ValuesProps) {
  return (
    <>
      <Section title="価値観" id="values">
        <div class="grid gap-4 md:grid-cols-2">
          <CardList title="コアバリュー" items={props.values} />
          <CardList title="詳細" items={props.valuesDetailed} />
        </div>
      </Section>

      <Section title="強み" id="strengths">
        <CardList title="" items={props.strengths} accent="text-primary-300" />
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
