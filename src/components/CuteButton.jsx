export default function CuteButton({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white shadow-[0_10px_25px_-10px_rgba(244,63,94,0.6)] active:translate-y-[1px] transition-all bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-pink-500 hover:via-pink-500 hover:to-rose-500 ${className}`}
    >
      {children}
    </button>
  )
}
