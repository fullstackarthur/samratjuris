import { useFirmData } from '../hooks/useFirmData';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Pillars } from '../components/Pillars';
import { AdvantageSection } from '../components/Advantage';
import { PracticeAreas } from '../components/PracticeAreas';
import { Audience } from '../components/Audience';
import { Footer } from '../components/Footer';

export default function HomePage() {
  const { data, loading } = useFirmData();

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-firm-bg">
        <div className="w-12 h-12 border-2 border-firm-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy description={data.description} />
      <Pillars pillars={data.pillars} />
      <AdvantageSection advantages={data.advantages} />
      <PracticeAreas areas={data.practiceAreas} />
      <Audience audiences={data.audiences} />
      <Footer />
    </main>
  );
}
