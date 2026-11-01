import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Reader({ book, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', k)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', k)
    }
  }, [onClose])

  const b = 'inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition cursor-pointer'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Reading ${book.title}`}
      className="fixed inset-0 z-50 flex flex-col bg-[#fbf5e6]/95 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.3 }}
        className="flex flex-wrap items-center gap-2 border-b border-[#d9b867] bg-[#fdf8ed] px-3 py-2 shadow-sm"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className={`${b} bg-[#6b2d0a] text-white hover:bg-[#85370d] shadow-sm`}
        >
          ← Back
        </motion.button>
        <p className="font-head min-w-0 flex-1 truncate text-base font-semibold text-[#6b2d0a]">{book.title}</p>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={book.pdf}
          target="_blank"
          rel="noreferrer"
          className={`${b} border border-[#c2570c] bg-white text-[#8a3b0c] hover:bg-[#fff5ea]`}
        >
          Open full screen
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={book.pdf}
          download
          className={`${b} bg-[#c2570c] text-white hover:bg-[#d66311] shadow-sm`}
        >
          Download
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.12, duration: 0.3 }}
        className="flex-1 w-full p-2"
      >
        <iframe title={book.title} src={book.pdf} className="h-full w-full rounded-lg border border-[#e2c788] bg-white shadow-inner" />
      </motion.div>
      <p className="px-3 py-2 text-center text-sm text-[#8b6a2b]">
        If the book does not show on your phone, tap “Open full screen” or “Download”.
      </p>
    </motion.div>
  )
}
