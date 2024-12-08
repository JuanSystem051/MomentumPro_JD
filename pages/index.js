import Head from 'next/head';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import FeaturedOffers from '../components/FeaturedOffers';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MomentumPro - Tienda Deportiva</title>
        <meta name="description" content="MomentumPro: Equipamiento y accesorios deportivos de calidad." />
      </Head>
      <Hero />
      <ProductSection />
      <FeaturedOffers />
      <AnimatedSection />
      <Footer />
    </div>
  );
}
