import { useEffect, useMemo, useState } from 'react'
import CuteButton from './CuteButton'

export default function LoveNote({ onSend }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('I love you so much ❤️')
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  // support shareable URLs like /?m=...&n=...
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const m = p.get('m'); const n = p.get('n')
    if (m) setMessage(decodeURIComponent(m))
    if (n) setName(decodeURIComponent(n))
    if (m || n) setSent(true)
  }, [])

  const shareUrl = useMemo(() => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams()
    if (message) params.set('m', message)
    if (name) params.set('n', name)
    url.search = params.toString()
    return url.toString()
  }, [message, name])

  const handleSend = () => {
    if (!message.trim()) return
    setSent(true)
    onSend?.({ name, message })
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  if (sent) {
    return (
      <div className="text-center space-y-5">
        <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
          I love you
        </div>
        {message && (
          <p className="text-lg text-pink-700/90 max-w-xl mx-auto">{message}</p>
        )}
        {name && (
          <p className="text-pink-600">— {name}</p>
        )}

        <div className="flex items-center justify-center gap-3">
          <CuteButton onClick={copy}>{copied ? 'Copied ✨' : 'Copy link 💌'}</CuteButton>
          <button
            onClick={() => setSent(false)}
            className="text-sm text-pink-700/80 underline underline-offset-4 hover:text-pink-700"
          >Edit</button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/80 backdrop-blur-xl border border-pink-200 rounded-3xl p-6 sm:p-7 shadow-xl shadow-pink-100/40">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-extrabold text-pink-600 tracking-tight">Send a cute confession</h2>
          <p className="text-sm text-gray-500 mt-1">Make it sweet and simple ✨</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Your name (optional)</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Secret Admirer"
              className="w-full rounded-2xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 px-4 py-3 bg-white/90 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-1">Your message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              className="w-full rounded-2xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 px-4 py-3 bg-white/90 outline-none transition resize-none"
            />
          </div>
          <CuteButton onClick={handleSend} className="w-full">Send 💌</CuteButton>
          <p className="text-xs text-pink-700/70 text-center">A shareable link will be generated automatically.</p>
        </div>
      </div>
    </div>
  )
}
