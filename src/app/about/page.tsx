import About from "@/components/about/About";
import SectionPage from "@/components/layout/SectionPage";

export default function AboutPage() {
  return (
    <SectionPage
      description="Get to know the person behind the pixels, my academic journey, and the principles behind the work."
      eyebrow="A LITTLE ABOUT ME"
      title="About Zahid Abbas"
    >
      <About detailed={true} />
    </SectionPage>
  );
}
