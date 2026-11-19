import { About } from '../components/About'
import { BrandBanner } from '../components/BrandBanner'
import { CTA } from '../components/CTA'
import { FAQ } from '../components/FAQ'
import { FloatingContact } from '../components/FloatingContact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Problems } from '../components/Problems'
import { QuoteForm } from '../components/QuoteForm'
import { ResidentialCommercial } from '../components/ResidentialCommercial'
import { Services } from '../components/Services'
import { WarningSigns } from '../components/WarningSigns'
import { WhyChooseUs } from '../components/WhyChooseUs'

export function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problems />
        <BrandBanner />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <WarningSigns />
        <ResidentialCommercial />
        <About />
        <FAQ />
        <QuoteForm />
        <CTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
