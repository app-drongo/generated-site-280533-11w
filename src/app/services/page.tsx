import PageHeader from '../../components/PageHeader';
import Services from '../../components/Services';
import Features from '../../components/Features';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeader />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
    </main>
  );
}