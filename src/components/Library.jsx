import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import BookCard from './BookCard'
import { BooksQuill, HeadingFlourish, Landscape, OpenBook, SearchIcon } from './Ornaments'

/** A search box appears automatically once the library has more books than this. */
const SEARCH_AFTER = 8

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Library({ books, onRead }) {
  const [query, setQuery] = useState('')
  const searchable = books.length > SEARCH_AFTER

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!searchable || !q) return books
    return books.filter((b) => `${b.title} ${b.description ?? ''}`.toLowerCase().includes(q))
  }, [books, query, searchable])

  return (
    <section
      id="books"
      aria-labelledby="library-title"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-[#d9b867]/50 bg-[#f7edd5] lg:scroll-mt-[6vw]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 70% 40% at 50% 0%, #fff8e6 0%, rgba(255,248,230,0) 70%), linear-gradient(180deg, #f9f0da 0%, #f5e6c3 100%)',
      }}
    >
      {/* Background hills */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex h-48 items-end justify-between opacity-[.25] sm:h-64">
        <div className="h-full w-1/2 max-w-[28rem] [mask-image:linear-gradient(to_right,#000_55%,transparent)]">
          <Landscape className="h-full w-full" />
        </div>
        <div className="h-full w-1/2 max-w-[28rem] [mask-image:linear-gradient(to_left,#000_55%,transparent)]">
          <Landscape className="h-full w-full" flip />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 md:pt-16">
        {/* Floating heading ornaments */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute left-6 top-8 hidden w-44 opacity-80 lg:block xl:left-10 xl:w-60"
        >
          <BooksQuill className="w-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-none absolute right-6 top-8 hidden w-48 opacity-80 lg:block xl:right-10 xl:w-64"
        >
          <OpenBook className="w-full" />
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <HeadingFlourish className="mx-auto mb-2 h-6 w-64 max-w-full" />
          <h2 id="library-title" className="text-3xl leading-tight text-[#5a1f08] sm:text-4xl">
            <span className="font-head font-bold">ग्रंथालय</span>
            <span className="font-latin font-semibold"> · Digital Library</span>
          </h2>
          <HeadingFlourish className="mx-auto mt-2 h-6 w-64 max-w-full -scale-y-100" />
          <p className="mt-3 text-lg text-[#4a2814]">Choose a book and read it here in your browser.</p>
        </motion.header>

        {searchable && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-md"
          >
            <label className="flex min-h-12 items-center gap-2 rounded-full border-2 border-[#d9a54a] bg-[#fffdf6] px-4 text-[#8a5a2b] shadow-[0_2px_8px_rgba(120,70,10,.12)] focus-within:border-[#c2570c]">
              <SearchIcon />
              <span className="sr-only">Search books</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search books · पुस्तक शोधा"
                className="min-w-0 flex-1 bg-transparent text-base text-[#3b2a1e] outline-none placeholder:text-[#a58557]"
              />
            </label>
            <p aria-live="polite" className="mt-2 text-center text-sm text-[#8b6a2b]">
              {query.trim() ? `Showing ${shown.length} of ${books.length} books` : `${books.length} books`}
            </p>
          </motion.div>
        )}

        {shown.length > 0 ? (
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-10 flex flex-wrap justify-center gap-6 md:gap-7"
          >
            {shown.map((book) => (
              <motion.li
                key={book.id}
                variants={itemVariants}
                className="flex min-w-0 max-w-full flex-[0_1_22rem]"
              >
                <BookCard book={book} onRead={onRead} />
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <p className="mt-12 text-center text-lg text-[#6b3a1a]">
            {books.length === 0 ? 'Books will be added here soon.' : 'No book matches your search.'}
          </p>
        )}
      </div>
    </section>
  )
}
