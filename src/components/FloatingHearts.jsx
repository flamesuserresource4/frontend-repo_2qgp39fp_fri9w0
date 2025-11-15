import { useEffect, useMemo } from 'react'

// Simple floating hearts background using absolutely positioned spans
export default function FloatingHearts({ count = 18 }) {
  const hearts = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percent
      size: 16 + Math.random() * 28, // px
      delay: Math.random() * 4, // s
      duration: 6 + Math.random() * 6, // s
      opacity: 0.3 + Math.random() * 0.5,
    })), [count])

  // Prefers-reduced-motion: no-op, let CSS handle
  useEffect(() => {}, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map(h => (
        <span
          key={h.id}
          className="absolute text-pink-400/70"
          style={{
            left: `${h.left}%`,
            bottom: '-40px',
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `floatUp ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          ♥
        </span>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-50vh) translateX(10px) scale(1.05); }
          100% { transform: translateY(-100vh) translateX(-10px) scale(1.1); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
