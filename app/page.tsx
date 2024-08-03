import { Suspense, lazy } from 'react';

const Discord = lazy(() => import('@/components/Discord'));
const Features = lazy(() => import('@/components/Features'));
const Footer = lazy(() => import('@/components/Footer'));
const Hero = lazy(() => import('@/components/Hero'));
const OpenSource = lazy(() => import('@/components/OpenSource'));
const Options = lazy(() => import('@/components/Options'));
const ProductNews = lazy(() => import('@/components/ProductNews'));
const Testimonials = lazy(() => import('@/components/Testimonials'));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Features />
      <Options />
      <OpenSource />
      <Testimonials />
      <Discord />
      <ProductNews />
      <Footer />
    </Suspense>
  );
}
