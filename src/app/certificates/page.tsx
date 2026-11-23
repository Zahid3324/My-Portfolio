import SectionPage from "@/components/layout/SectionPage";
import Certificates from "@/components/certificates/Certificates";

export default function CertificatesPage() {
  return (
    <SectionPage
      description="Professional qualifications, internships, and verified credentials from my continuous learning journey."
      eyebrow="CONTINUOUS LEARNING"
      title="Certificates &amp; Achievements"
    >
      <Certificates detailed={true} />
    </SectionPage>
  );
}
