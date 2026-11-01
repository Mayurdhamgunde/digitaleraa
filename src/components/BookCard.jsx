import { motion } from 'framer-motion'
import { BookIcon, CornerSprig, Divider, DownloadIcon } from './Ornaments'

export const DEFAULT_COVER = '/images/covers/default-cover.jpg'

/**
 * One book. Everything shown comes from the `book` object (title, description, cover, pdf),
 * so adding an entry to src/data/books.js is all it takes to get a new card.
 */
export default function BookCard({ book, onRead }) {
  const ready = Boolean(book.pdf)
  const btn =
    'inline-flex min-h-11 flex-1 basis-[8rem] items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[0.95rem] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c2570c] cursor-pointer'

  return (
    <motion.article
      whileHover={{ y: -7, transition: { duration: 0.22, ease: 'easeOut' } }}
      className="group relative flex w-full flex-col rounded-[1.4rem] border border-[#d9a54a] bg-gradient-to-b from-[#fffaf0] to-[#fdeccb] p-4 pb-4 shadow-[0_8px_22px_rgba(120,70,10,.16)] transition-shadow duration-300 hover:shadow-[0_16px_34px_rgba(120,70,10,.25)] before:pointer-events-none before:absolute before:inset-[5px] before:rounded-[1.1rem] before:border before:border-[#e6c27a]/80"
    >
      <CornerSprig className="pointer-events-none absolute left-1 top-1 h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
      <CornerSprig className="pointer-events-none absolute right-1 top-1 h-9 w-9 transition-transform duration-300 group-hover:scale-110" flip />

      <div className="relative z-10 overflow-hidden rounded-xl border-2 border-[#e2b94f] bg-[#f1dfb5] p-[3px] shadow-[0_2px_8px_rgba(120,70,10,.25),inset_0_0_0_1px_#f6d98a]">
        <img
          src={book.cover || DEFAULT_COVER}
          alt={`Cover of ${book.title}`}
          loading="lazy"
          onError={(e) => {
            if (!e.currentTarget.src.endsWith(DEFAULT_COVER)) e.currentTarget.src = DEFAULT_COVER
          }}
          className="aspect-[3/2] w-full rounded-[.55rem] bg-[#f1dfb5] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="px-2 pt-4 text-center">
        <h3 className="font-head text-[1.4rem] font-bold leading-snug text-[#5a1f08] transition-colors group-hover:text-[#8a2f07]">{book.title}</h3>
        {book.description && (
          <p className="font-latin mt-0.5 text-lg font-semibold leading-snug text-[#6b3a1a]">{book.description}</p>
        )}
        <Divider className="mt-2.5" />
      </div>

      <div className="mt-auto flex flex-wrap gap-2 px-1 pt-4">
        {ready ? (
          <>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onRead(book)}
              className={`${btn} border-2 border-[#e2b94f] bg-gradient-to-b from-[#d4661a] via-[#bd530f] to-[#98400a] text-[#fff3df] shadow-[0_3px_8px_rgba(140,60,8,.35),inset_0_1px_2px_rgba(255,214,150,.5)] hover:brightness-110`}
            >
              <BookIcon />
              Read Online
            </motion.button>
            <motion.a
              href={book.pdf}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`${btn} border-2 border-[#d9a54a] bg-[#fffdf6] text-[#6b2d0a] hover:bg-[#fbeccc] shadow-sm`}
            >
              <DownloadIcon />
              Download PDF
            </motion.a>
          </>
        ) : (
          <span className={`${btn} cursor-default border-2 border-dashed border-[#c9a24a] text-[#8b6a2b]`}>PDF coming soon</span>
        )}
      </div>
    </motion.article>
  )
}
