import FloatingHearts from './components/FloatingHearts'
import LoveNote from './components/LoveNote'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <FloatingHearts />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-pink-700 shadow-sm backdrop-blur">
            <span className="text-lg">💕</span>
            <span className="text-xs font-medium tracking-wide uppercase">A tiny love webpage</span>
            <span className="text-lg">💕</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent drop-shadow">I love you</span>
          </h1>

          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            A soft, sparkly place to say what your heart feels. Customize the message and add your name,
            then share the page link with your crush.💌
          </p>

          <div className="mt-8">
            <LoveNote />
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
