import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { author } from '../data/books'

const links = [['home', 'मुख्यपृष्ठ · Home'], ['books', 'ग्रंथ · Books'], ['recognition', 'सन्मान · Recognition'], ['about', 'परिचय · About']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const solid = scrolled || open
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 transition-colors duration-300 lg:h-[4.2vw] ${solid ? 'border-b border-[#d9b867]/60 bg-[#f8ecd0]/95 backdrop-blur' : 'border-b border-transparent bg-[#f8ecd0] lg:bg-transparent'}`}
    >
      <nav aria-label="Main" className="mx-auto flex w-full items-center justify-between px-4 py-1.5 lg:h-full lg:py-0 lg:pl-[6.4vw] lg:pr-[6.8vw]">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="font-head flex items-center gap-2 leading-tight text-[#5a1f08] lg:gap-[.6vw]"
        >
          <img src="/images/logo-book.png" alt="" width="84" height="52" className="h-7 w-auto lg:h-[2.4vw]" />
          <span className="text-base font-semibold sm:text-lg lg:text-[1.65vw] lg:font-bold">{author.marathi}</span>
        </motion.a>
        <motion.button
          whileTap={{ scale: 0.92 }}
          aria-expanded={open}
          aria-controls="menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-[#d9b867] text-xl text-[#8a3b0c] transition hover:bg-[#ebd5a7]/50 lg:hidden"
        >
          {open ? '✕' : '☰'}
        </motion.button>
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:gap-[1.8vw] lg:border-0 lg:bg-transparent lg:p-0">
          {links.map(([id, t]) => (
            <li key={id}>
              <motion.a
                href={`#${id}`}
                whileHover={{ y: -1.5 }}
                transition={{ duration: 0.18 }}
                aria-current={active === id ? 'true' : undefined}
                className={`font-head block py-2 text-sm sm:text-base lg:py-[.3vw] lg:text-[1.05vw] transition-colors ${active === id ? 'text-[#c2570c] lg:border-b-2 lg:border-[#c2570c] font-semibold' : 'text-[#4a2814] hover:text-[#c2570c] lg:border-b-2 lg:border-transparent'}`}
              >
                {t}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            id="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex flex-col overflow-hidden border-b border-[#d9b867]/50 bg-[#f8ecd0] px-4 pb-3 lg:hidden"
          >
            {links.map(([id, t]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`font-head block py-2.5 text-sm sm:text-base ${active === id ? 'font-bold text-[#c2570c]' : 'text-[#4a2814] hover:text-[#c2570c]'}`}
                >
                  {t}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
