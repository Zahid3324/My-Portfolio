import SectionPage from "@/components/layout/SectionPage";
import Projects from "@/components/projects/Projects";

export default function ProjectsPage() {
  return (
    <SectionPage
      description="A closer look at selected full-stack systems, architectural decisions, and the technologies behind them."
      eyebrow="SELECTED WORK"
      title="Projects & Engineering"
    >
      <Projects detailed={true} />
    </SectionPage>
  );
}
