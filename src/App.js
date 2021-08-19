import "./App.css"
import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div class="font-Poppins">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  )
}

export default App
