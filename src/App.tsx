import { BackgroundOrbs } from './components/BackgroundOrbs'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { MusicPlayer } from './components/MusicPlayer'

function App() {
  return (
    <div className="relative z-10 app">
      <BackgroundOrbs />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Footer />
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App
