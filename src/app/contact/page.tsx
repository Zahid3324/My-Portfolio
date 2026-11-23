import SectionPage from "@/components/layout/SectionPage";
import Contact from "@/components/contact/Contact";

export default function ContactPage() {
  return (
    <SectionPage
      description="Tell me what you're working on. Use the form or send me an email."
      eyebrow="LET'S WORK TOGETHER"
      title="Get in touch"
    >
      <Contact />
    </SectionPage>
  );
}
