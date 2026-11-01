import { motion } from 'framer-motion'
import { author } from '../data/books'

const PARA_1 = 'This digital library preserves the literary and spiritual'
const PARA_2 = `writings of ${author.english}, and shares`
const PARA_3 = 'them freely so that readers today and in the future'
const PARA_4 = 'can read them online.'

const BookIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[1.25em] w-[1.25em]" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 6c-2-1.5-5-2-9-2v14c4 0 7 .5 9 2 2-1.5 5-2 9-2V4c-4 0-7 .5-9 2zM12 6v14" />
  </svg>
)

const ExploreButton = ({ className = '', style }) => (
  <motion.a
    href="#books"
    style={style}
    whileHover={{ scale: 1.05, filter: 'brightness(1.12)' }}
    whileTap={{ scale: 0.96 }}
    transition={{ duration: 0.2 }}
    className={`inline-flex items-center justify-center gap-[.5em] rounded-full border-2 border-[#e2b94f] bg-gradient-to-b from-[#d4661a] via-[#bd530f] to-[#98400a] font-latin font-semibold text-[#fff3df] shadow-[0_0_0_1px_#a8741f,0_5px_14px_rgba(140,60,8,.4),inset_0_2px_3px_rgba(255,214,150,.55)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c2570c] cursor-pointer ${className}`}
  >
    <BookIcon />
    Explore Books
  </motion.a>
)

/* ---------- Desktop: pixel-matched to the approved mockup (1672 x 941) ---------- */
function DesktopHero() {
  const at = (x, y) => ({ left: `${(x / 1672) * 100}%`, top: `${(y / 941) * 100}%` })
  return (
    <div
      className="relative hidden w-full overflow-hidden bg-[#f6e6c6] lg:block"
      style={{
        height: '100vh',
        minHeight: '100vh',
        containerType: 'inline-size',
        backgroundImage: "url('/images/hero-plate.jpg')",
        backgroundSize: '100% 100%',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: -12, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="font-head absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-none text-[#c2570c]"
        style={{ ...at(538, 187), fontSize: '2.9cqw' }}
      >
        ॥ श्री ॥
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
        className="font-head absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold leading-none text-[#5a1f08] [text-shadow:0_1px_0_rgba(255,243,207,.9)]"
        style={{ ...at(555, 282), fontSize: '4.55cqw' }}
      >
        {author.marathi}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45, ease: 'easeOut' }}
        className="font-latin absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium leading-none text-[#5e2410]"
        style={{ ...at(555, 375), fontSize: '2.9cqw' }}
      >
        {author.english}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.6, ease: 'easeOut' }}
        className="font-latin absolute -translate-x-1/2 whitespace-nowrap text-center font-semibold text-[#4a2814]"
        style={{ ...at(561, 460), fontSize: '1.74cqw', lineHeight: '2.04cqw' }}
      >
        {PARA_1}<br />{PARA_2}<br />{PARA_3}<br />{PARA_4}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.75, ease: 'easeOut' }}
        className="contents"
      >
        <ExploreButton
          className="absolute -translate-x-1/2"
          style={{
            left: `${(555 / 1672) * 100}%`,
            top: `${(662 / 941) * 100}%`,
            width: `${(320 / 1672) * 100}%`,
            height: `${(68 / 941) * 100}%`,
            fontSize: '1.85cqw',
          }}
        />
      </motion.div>
    </div>
  )
}

/* ---------- Phone / tablet: same artwork, stacked ---------- */
function MobileHero() {
  return (
    <div className="relative isolate overflow-hidden bg-[#f9e4c1] lg:hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-2 z-20 border border-[#b9651a]/70" />
      <div className="relative z-10 px-6 pb-4 pt-12 text-center sm:pt-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-head text-xl font-semibold text-[#c2570c]"
        >
          ॥ श्री ॥
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-head mt-2 text-[1.75rem] font-bold leading-snug text-[#5a1f08] sm:text-4xl"
        >
          {author.marathi}
        </motion.h1>
        <svg aria-hidden="true" viewBox="0 0 300 12" className="mx-auto mt-1 h-2.5 w-48 text-[#c2570c]"><path d="M4 8C60 2 150 4 296 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" /></svg>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-latin mt-3 text-2xl font-semibold text-[#5e2410] sm:text-3xl"
        >
          {author.english}
        </motion.p>
        <div aria-hidden="true" className="mx-auto my-3 flex items-center justify-center gap-2 text-[#c2570c]"><span className="h-px w-16 bg-current" /><span className="text-sm">❖</span><span className="h-px w-16 bg-current" /></div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-latin mx-auto max-w-md text-lg font-medium leading-relaxed text-[#4a2814]"
        >
          This digital library preserves the literary and spiritual writings of {author.english}, and shares them freely so that readers today and in the future can read them online.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6"
        >
          <ExploreButton className="min-h-12 px-8 py-2.5 text-xl" />
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        src="/images/hero-book.jpg"
        alt=""
        aria-hidden="true"
        className="relative z-0 mx-auto -mt-4 w-full max-w-md [mask-image:linear-gradient(to_bottom,transparent,black_14%)]"
      />
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        src="/images/hero-temple.jpg"
        alt=""
        aria-hidden="true"
        className="relative z-0 -mt-16 w-full max-w-lg [mask-image:linear-gradient(to_bottom,transparent,black_30%)]"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-label="Home" className="relative lg:-mt-[4.2vw]">
      <DesktopHero />
      <MobileHero />
    </section>
  )
}
