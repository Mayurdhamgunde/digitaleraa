import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const W = 1672
const H = 853 // mockup height after removing its own nav strip (941 - 88)
const at = (x, y) => ({ left: `${(x / W) * 100}%`, top: `${((y - 88) / H) * 100}%` })

const TITLE = 'विठ्ठल मुखे म्हणा, विठ्ठल मुखे म्हणा'
const CLIP_ALT = 'Newspaper clipping with a photograph of four men holding copies of a book at a book release event, with a Marathi report beneath it'

const SearchIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[1.3em] w-[1.3em]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5.5 5.5" />
  </svg>
)

const ViewButton = ({ onClick, className = '', style }) => (
  <motion.button
    onClick={onClick}
    style={style}
    whileHover={{ scale: 1.05, filter: 'brightness(1.12)' }}
    whileTap={{ scale: 0.96 }}
    transition={{ duration: 0.2 }}
    className={`inline-flex items-center justify-center gap-[.55em] rounded-full border-[3px] border-[#e2b94f] bg-gradient-to-b from-[#d4661a] via-[#bd530f] to-[#98400a] font-latin font-semibold text-[#fff3df] shadow-[0_0_0_1px_#a8741f,0_6px_16px_rgba(140,60,8,.4),inset_0_2px_3px_rgba(255,214,150,.55)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c2570c] cursor-pointer ${className}`}
  >
    <SearchIcon />
    View newspaper
  </motion.button>
)

function Lightbox({ onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label="Newspaper clipping, enlarged"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-[#2b1a0e]/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
        className="fixed right-4 top-4 z-10 min-h-11 rounded-full bg-[#fbf5e6] px-5 text-base font-semibold text-[#6b2d0a] shadow-lg hover:bg-white"
      >
        ✕ Close
      </motion.button>
      <motion.img
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
        src="/images/award.jpeg"
        alt="Newspaper clipping, enlarged"
        onClick={(e) => e.stopPropagation()}
        className="mx-auto max-h-[90vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
      />
    </motion.div>
  )
}

const Bars = ({ className = '' }) => (
  <span aria-hidden="true" className={`inline-flex gap-[.18em] ${className}`}><i className="h-[1.1em] w-[.14em] bg-current" /><i className="h-[1.1em] w-[.14em] bg-current" /></span>
)

/* ---------- Desktop: pixel-matched to the approved mockup ---------- */
function DesktopRecognition({ onOpen }) {
  return (
    <div
      className="relative hidden w-full overflow-hidden bg-[#fbeccd] lg:block"
      style={{ aspectRatio: `${W} / ${H}`, containerType: 'inline-size', backgroundImage: "url('/images/recognition-plate.jpg')", backgroundSize: '100% 100%' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap leading-none text-[#5a1f08]"
        style={{ ...at(845, 177), fontSize: '2.7cqw' }}
      >
        <span className="font-head font-bold">सन्मान व गौरव</span>
        <span className="font-latin font-semibold"> · Achievements &amp; Recognition</span>
      </motion.h2>

      <motion.button
        onClick={onOpen}
        aria-label="Enlarge the newspaper clipping"
        initial={{ opacity: 0, x: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
        className="absolute cursor-pointer overflow-hidden rounded-[.85cqw] shadow-md transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c2570c]"
        style={{ ...at(279, 271), width: `${(449 / W) * 100}%`, height: `${(566 / H) * 100}%` }}
      >
        <img src="/images/award.jpeg" alt={CLIP_ALT} className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="contents"
      >
        <p className="font-head absolute flex -translate-y-1/2 items-center gap-[.7cqw] whitespace-nowrap font-semibold leading-none text-[#c2570c]" style={{ ...at(836, 314), fontSize: '1.56cqw' }}>
          <Bars />प्रकाशनाची आठवण · A literary milestone
        </p>
        <h3 className="font-head absolute -translate-y-1/2 whitespace-nowrap font-bold leading-none text-[#5a1f08]" style={{ ...at(838, 390), fontSize: '2.67cqw' }}>
          {TITLE}
        </h3>
        <p className="absolute whitespace-nowrap text-[#4a2814]" style={{ ...at(839, 482), fontSize: '1.32cqw', lineHeight: '2.03cqw', fontFamily: "'Mukta', sans-serif" }}>
          A newspaper report (Lokmat) on the release of the book<br />
          “{TITLE}” by Ghaldev Jadhav,<br />
          Solapur. It marks an important moment in his literary journey.
        </p>
        <ViewButton onClick={onOpen} className="absolute" style={{ ...at(833, 618), width: `${(297 / W) * 100}%`, height: `${(62 / H) * 100}%`, fontSize: '1.9cqw' }} />
        <p className="font-latin absolute whitespace-nowrap font-medium italic text-[#6b3a1a]" style={{ ...at(930, 738), fontSize: '1.3cqw', lineHeight: '1.85cqw' }}>
          More recognition and memories can be added here<br />by the family.
        </p>
      </motion.div>
    </div>
  )
}

/* ---------- Phone / tablet ---------- */
function MobileRecognition({ onOpen }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fdf1d9] to-[#f8e3bd] px-5 py-12 text-center lg:hidden">
      <div aria-hidden="true" className="mx-auto mb-3 flex items-center justify-center gap-3 text-[#c2570c]">
        <span className="h-px w-16 bg-current" /><img src="/images/logo-book.png" alt="" className="h-8 w-auto" /><span className="h-px w-16 bg-current" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-2xl leading-snug text-[#5a1f08] sm:text-3xl"
      >
        <span className="font-head block font-bold">सन्मान व गौरव</span>
        <span className="font-latin block font-semibold">Achievements &amp; Recognition</span>
      </motion.h2>
      <motion.button
        onClick={onOpen}
        aria-label="Enlarge the newspaper clipping"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="relative mx-auto mt-7 block w-full max-w-xs rounded-[1.1rem] border-[3px] border-[#e2b94f] bg-[#fdeec9] p-2 shadow-[0_10px_26px_rgba(140,90,20,.3),inset_0_0_0_2px_#f6d98a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c2570c]"
      >
        <img src="/images/award.jpeg" alt={CLIP_ALT} loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover" />
      </motion.button>
      <p className="font-head mt-8 flex items-center justify-center gap-2 text-base font-semibold text-[#c2570c]"><Bars />प्रकाशनाची आठवण · A literary milestone</p>
      <h3 className="font-head mt-2 text-2xl font-bold leading-snug text-[#5a1f08]">{TITLE}</h3>
      <div aria-hidden="true" className="mx-auto my-4 flex items-center justify-center gap-2 text-[#c2570c]"><span className="h-px w-20 bg-current" /><span className="text-sm">❖</span><span className="h-px w-20 bg-current" /></div>
      <p className="mx-auto max-w-md text-lg leading-relaxed text-[#4a2814]">A newspaper report (Lokmat) on the release of the book “{TITLE}” by Ghaldev Jadhav, Solapur. It marks an important moment in his literary journey.</p>
      <div className="mt-6">
        <ViewButton onClick={onOpen} className="min-h-12 px-8 py-2.5 text-xl" />
      </div>
      <p className="font-latin mx-auto mt-7 max-w-sm rounded-xl border border-[#e2b94f]/70 bg-[#fdf3d8] px-4 py-3 text-lg font-medium italic text-[#6b3a1a]">More recognition and memories can be added here by the family.</p>
    </div>
  )
}

export default function Recognition() {
  const [open, setOpen] = useState(false)
  return (
    <section id="recognition" aria-label="Achievements and Recognition" className="scroll-mt-20 lg:scroll-mt-[5.4vw]">
      <DesktopRecognition onOpen={() => setOpen(true)} />
      <MobileRecognition onOpen={() => setOpen(true)} />
      <AnimatePresence>
        {open && <Lightbox onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}
