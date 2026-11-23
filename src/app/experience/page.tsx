import SectionPage from "@/components/layout/SectionPage";
import Experience from "@/components/experience/Experience";

export default function ExperiencePage() {
  return (
    <SectionPage
      description="My hands-on development journey, career milestones, professional experience, and engineering methodology."
      eyebrow="THE JOURNEY"
      title="Experience & Practice"
    >
      <Experience detailed={true} />
    </SectionPage>
  );
}
