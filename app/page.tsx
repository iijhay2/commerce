import { AllProducts } from 'components/allproducts';
import { ThreeItemGrid } from 'components/grid/three-items';
import Header from 'components/header';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance STRCT ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <AllProducts />
      </Suspense>
      <Suspense>
        <ThreeItemGrid />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
