import Header from './components/Header';
import InfoSection from './components/InfoSection';
import ContactSection from './components/ContactSection';
import NailSection from './components/NailSection';
import TeamSection from './components/TeamSection';
import ReviewSection from './components/ReviewSection';

export default function Home() {
  return (
    <main>
      <Header />
      <InfoSection />
      <ReviewSection />
      <NailSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
