import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import HeroSection from '@/Components/HeroSection';
import AboutSection from '@/Components/AboutSection';
import SkillsSection from '@/Components/SkillsSection';
import ProjectsSection from '@/Components/ProjectsSection';
import ContactSection from '@/Components/ContactSection';
import Footer from '@/Components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>PortFolio.</title>
        <meta name="description" content="Portfolio of Jinshid, a Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <main className="bg-background min-h-screen text-foreground font-primary relative selection:bg-primary/30 selection:text-primary-foreground">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}