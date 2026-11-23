import SectionPage from "@/components/layout/SectionPage";
import Skills from "@/components/skills/Skills";

export default function SkillsPage() {
  return (
    <SectionPage
      description="The technologies, frameworks, and practical engineering skills I use to build from the interface to the database."
      eyebrow="THE TOOLKIT"
      title="Skills & Technologies"
    >
      <Skills detailed={true} />
    </SectionPage>
  );
}
