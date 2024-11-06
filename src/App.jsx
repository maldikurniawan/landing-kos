import { Footer, Header } from "@/components";
import {
  Hero,
  About,
  Service,
  Expectation,
  Gallery,
  Pricing,
  FAQ,
  Contact,
} from "@/pages";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Expectation />
      <Gallery />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}