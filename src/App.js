import "./App.css"
import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
function App() {
  return (
    <div class="font-Poppins">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  )
}

export default App
