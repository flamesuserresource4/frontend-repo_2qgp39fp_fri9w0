import { useMemo } from 'react'

export default function LoveCard({ title = "I love you", subtitle = "Always. Forever.", emoji = "💖" }) {
  const petals = useMemo(() => Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 8 + Math.random() * 6,
    rotate: Math.random() * 360,
  })), [])

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-pink-200/70 bg-white/80 backdrop-blur-xl p-8 shadow-xl shadow-rose-200/50">
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-pink-400/20 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-rose-400/20 blur-3xl" />

        <div className="text-6xl mb-3 drop-shadow">{emoji}</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="mt-2 text-pink-700/80">{subtitle}</p>
      </div>

      {/* soft falling petals */}
      {petals.map(p => (
        <span
          key={p.id}
          className="pointer-events-none absolute text-rose-300/80 select-none"
          style={{
            left: `${p.x}%`,
            top: `-20px`,
            animation: `petal ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          ❀
        </span>
      ))}

      <style>{`
        @keyframes petal {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          60% { transform: translateY(60vh) rotate(90deg); }
          100% { transform: translateY(100vh) rotate(180deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
