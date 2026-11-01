import { motion } from 'framer-motion'
import { author } from '../data/books'

const W = 1672
const AH = 661 // about stage height in mockup px (mockup rows 88-749)
const FH = 192 // footer stage height (mockup rows 749-941)
const atA = (x, y) => ({ left: `${(x / W) * 100}%`, top: `${((y - 88) / AH) * 100}%` })
const atF = (x, y) => ({ left: `${(x / W) * 100}%`, top: `${((y - 749) / FH) * 100}%` })

const Bars = () => (
  <span aria-hidden="true" className="inline-flex gap-[.16em]"><i className="h-[1em] w-[.13em] bg-current" /><i className="h-[1em] w-[.13em] bg-current" /></span>
)

const portraitAlt = `Portrait of ${author.english}`

/* ---------- Desktop: pixel-matched to the approved mockup ---------- */
function DesktopAbout() {
  return (
    <div
      className="relative hidden w-full overflow-hidden bg-[#fbeccd] lg:block"
      style={{ aspectRatio: `${W} / ${AH}`, containerType: 'inline-size', backgroundImage: "url('/images/about-plate.jpg')", backgroundSize: '100% 100%' }}
    >
      {/* real portrait, shaped by the frame's inner outline */}
      <motion.img
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        src="/images/author-portrait.jpg"
        alt={portraitAlt}
        className="absolute object-cover object-top cursor-pointer transition-shadow"
        style={{
          left: `${(227 / W) * 100}%`, top: `${((167 - 88) / AH) * 100}%`,
          width: `${(367 / W) * 100}%`, height: `${(498 / AH) * 100}%`,
          WebkitMaskImage: "url('/images/portrait-mask.png')", maskImage: "url('/images/portrait-mask.png')",
          WebkitMaskSize: '100% 100%', maskSize: '100% 100%',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="contents"
      >
        <p className="font-head absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-[1cqw] whitespace-nowrap font-bold leading-none text-[#c2570c]" style={{ ...atA(1001, 165), fontSize: '2.55cqw' }}>
          <Bars />परिचय<Bars />
        </p>
        <h2 className="font-head absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold leading-none text-[#5a1f08] [text-shadow:0_1px_0_rgba(255,243,207,.9)]" style={{ ...atA(1022, 245), fontSize: '3.68cqw' }}>
          {author.marathi}
        </h2>
        <p className="font-latin absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-none text-[#5e2410]" style={{ ...atA(1029, 312), fontSize: '2.5cqw' }}>
          {author.english}
        </p>
        <p className="font-head absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap leading-none text-[#3b1d0e]" style={{ ...atA(1036, 472), fontSize: '1.6cqw' }}>
          {author.bio[0]}
        </p>
        <p className="font-latin absolute -translate-y-1/2 whitespace-nowrap font-semibold leading-none text-[#3b1d0e]" style={{ ...atA(755, 550), fontSize: '1.57cqw' }}>
          {author.bio[1]}
        </p>
      </motion.div>
    </div>
  )
}

/* ---------- Phone / tablet ---------- */
function MobileAbout() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fdf1d9] to-[#f8e3bd] px-5 py-12 text-center lg:hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto w-60 rounded-[2rem_2rem_1.5rem_1.5rem] border-[3px] border-[#e2a93a] bg-[#fdeec9] p-1.5 shadow-[0_10px_26px_rgba(140,90,20,.3)]"
      >
        <img src="/images/author-portrait.jpg" alt={portraitAlt} loading="lazy" className="aspect-[3/4] w-full rounded-[1.6rem_1.6rem_1.1rem_1.1rem] object-cover object-top" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p className="font-head mt-8 flex items-center justify-center gap-2 text-xl font-bold text-[#c2570c]"><Bars />परिचय<Bars /></p>
        <h2 className="font-head mt-2 text-[1.75rem] font-bold leading-snug text-[#5a1f08] sm:text-4xl">{author.marathi}</h2>
        <p className="font-latin mt-1 text-2xl font-semibold text-[#5e2410]">{author.english}</p>
        <div aria-hidden="true" className="mx-auto my-4 flex items-center justify-center gap-2 text-[#c2570c]"><span className="h-px w-16 bg-current" /><span className="text-sm">❖</span><span className="h-px w-16 bg-current" /></div>
        <div className="mx-auto max-w-md space-y-3 rounded-2xl border border-[#e2b94f]/80 bg-gradient-to-b from-[#fdf3d8] to-[#f6deb0] px-5 py-6 shadow-[0_8px_20px_rgba(140,90,20,.2)]">
          <p className="font-head text-lg leading-relaxed text-[#3b1d0e]">{author.bio[0]}</p>
          <p className="font-latin border-t border-[#d9b867]/60 pt-3 text-lg font-semibold leading-relaxed text-[#3b1d0e]">{author.bio[1]}</p>
        </div>
      </motion.div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-20 lg:scroll-mt-[5.4vw]">
      <DesktopAbout />
      <MobileAbout />
    </section>
  )
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="relative hidden w-full overflow-hidden bg-[#6b2d0a] lg:block"
        style={{ aspectRatio: `${W} / ${FH}`, containerType: 'inline-size', backgroundImage: "url('/images/footer-plate.jpg')", backgroundSize: '100% 100%' }}
      >
        <p className="font-head absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap leading-none text-[#fbe3a6] [text-shadow:0_0_14px_rgba(255,200,110,.45)]" style={{ ...atF(836, 793), fontSize: '2.3cqw' }}>
          {author.marathi}
        </p>
        <p className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[#f2dcae]" style={{ ...atF(836, 838), fontSize: '1.32cqw', fontFamily: "'Mukta', sans-serif" }}>
          Preserving literature and knowledge for future generations.
        </p>
      </div>
      <div className="border-t border-[#c9a24a] bg-[#6b2d0a] px-4 py-10 text-center text-[#fbe9b8] lg:hidden">
        <p className="font-head text-2xl">{author.marathi}</p>
        <p className="mx-auto mt-3 max-w-xl text-base">Preserving literature and knowledge for future generations.</p>
        <div aria-hidden="true" className="mx-auto mt-5 flex items-center justify-center gap-2 text-[#d9a441]"><span className="h-px w-16 bg-current" /><span className="text-sm">❖</span><span className="h-px w-16 bg-current" /></div>
      </div>
    </motion.footer>
  )
}
