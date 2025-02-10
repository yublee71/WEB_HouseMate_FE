import { Section } from "@/components/section";

export function MainSection({ firstSection, secondSection }) {
  return (
    <main>
      <Section title="To-buy" content={firstSection}></Section>
      <Section title="To-do" content={secondSection}></Section>
    </main>
  );
}
