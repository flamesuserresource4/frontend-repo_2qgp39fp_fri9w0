import FloatingHearts from './components/FloatingHearts'
import Sparkles from './components/Sparkles'
import LoveCard from './components/LoveCard'
import LoveNote from './components/LoveNote'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <FloatingHearts />
      <Sparkles />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-pink-700 shadow-sm backdrop-blur">
            <span className="text-lg">💕</span>
            <span className="text-xs font-medium tracking-wide uppercase">A tiny love webpage</span>
            <span className="text-lg">💕</span>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-2 items-stretch">
            <LoveCard title="I love you" subtitle="Like, a lot." emoji="💘" />
            <div className="flex items-center justify-center">
              <LoveNote />
            </div>
          </div>

          <footer className="mt-10 text-xs text-pink-700/70">
            Made with lots of love and a little sparkle ✨
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
