import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FeatureScroll from './components/FeatureScroll';
import HowToStart from './components/HowToStart';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0f1e' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <StatsBar />
        <FeatureScroll />
        <HowToStart />
      </main>
      <CTAFooter />
    </div>
  );
}

export default App;
