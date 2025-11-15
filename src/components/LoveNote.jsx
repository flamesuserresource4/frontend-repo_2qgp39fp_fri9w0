import { useState } from 'react'

export default function LoveNote({ onSend }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('I love you ❤️')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!message.trim()) return
    setSent(true)
    onSend?.({ name, message })
  }

  if (sent) {
    return (
      <div className="text-center space-y-4">
        <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
          I love you
        </div>
        {name && (
          <p className="text-gray-600">— {name}</p>
        )}
        <p className="text-sm text-gray-500">Share this link with your crush 💌</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/70 backdrop-blur-sm border border-pink-200 rounded-2xl p-6 shadow-xl shadow-pink-100/40">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-pink-600">Send a cute confession</h2>
          <p className="text-sm text-gray-500 mt-1">Make it sweet and simple ✨</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Your name (optional)</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Secret Admirer"
              className="w-full rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 px-4 py-2.5 bg-white/80 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Your message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 px-4 py-2.5 bg-white/80 outline-none transition resize-none"
            />
          </div>
          <button
            onClick={handleSend}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg shadow-pink-300/50 hover:shadow-pink-400/60 active:scale-[.99] transition"
          >
            Send 💌
          </button>
        </div>
      </div>
    </div>
  )
}
