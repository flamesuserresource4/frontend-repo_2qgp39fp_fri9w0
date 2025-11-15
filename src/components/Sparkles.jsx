import { useMemo } from 'react'

// A subtle sparkle layer with twinkling stars and soft vignette glow
export default function Sparkles({ count = 28 }) {
  const stars = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 5,
      opacity: 0.4 + Math.random() * 0.6,
    }))
  ), [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft vignette glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,182,193,0.4),transparent_60%)]" />

      {stars.map(s => (
        <span
          key={s.id}
          className="absolute block rounded-full bg-pink-300/80 shadow-[0_0_6px_rgba(244,114,182,0.8)]"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes twinkle {
          0%, 100% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.6); opacity: 1; filter: blur(0.2px); }
        }
      `}</style>
    </div>
  )
}
