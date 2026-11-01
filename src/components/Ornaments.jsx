/*
 * Decorative SVG pieces for the Library section.
 * They are pure line-art / fills in the site's brown-gold palette and carry no layout
 * information: each one is placed relative to the section or card edge, never to a
 * specific book, so the section can hold any number of books.
 */

const INK = '#8a5a2b'
const PAPER = '#fbf1d8'

/** Small leafy sprig used in the top corners of every card. Mirror it with `flip`. */
export function CornerSprig({ className = '', flip = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={`${className} ${flip ? '-scale-x-100' : ''}`} fill="none" stroke="#d9a54a" strokeWidth="1.3" strokeLinecap="round">
      <path d="M3 3 C 14 4, 22 9, 26 20" />
      <path d="M3 3 C 4 14, 9 22, 20 26" />
      <path d="M9 7 c 1 -4, 5 -5, 7 -4 c -1 3, -4 5, -7 4 z" fill="#f3d796" />
      <path d="M7 9 c -4 1, -5 5, -4 7 c 3 -1, 5 -4 4 -7 z" fill="#f3d796" />
      <path d="M16 12 c 2 -3, 6 -3, 8 -1 c -2 3, -5 4, -8 1 z" fill="#f3d796" />
      <path d="M12 16 c -3 2, -3 6, -1 8 c 3 -2, 4 -5, 1 -8 z" fill="#f3d796" />
      <circle cx="3.5" cy="3.5" r="1.6" fill="#d9a54a" stroke="none" />
    </svg>
  )
}

/** Thin rule with a small diamond-and-curl in the middle. */
export function Divider({ className = '' }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-2 text-[#d9a54a] ${className}`}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-current" />
      <svg viewBox="0 0 48 14" className="h-3 w-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M24 1 L29 7 L24 13 L19 7 Z" fill="#f3d796" />
        <path d="M17 7 C 12 7, 11 2, 6 3 M17 7 C 12 7, 11 12, 6 11" />
        <path d="M31 7 C 36 7, 37 2, 42 3 M31 7 C 36 7, 37 12, 42 11" />
      </svg>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-current" />
    </div>
  )
}

/** Wider flourish for the section heading. */
export function HeadingFlourish({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 22" className={className} fill="none" stroke="#c2570c" strokeWidth="1.3" strokeLinecap="round">
      <path d="M110 4 C 116 4, 118 10, 110 18 C 102 10, 104 4, 110 4 Z" fill="#f3d796" />
      <path d="M100 11 H 24 C 16 11, 14 5, 8 6 M120 11 H 196 C 204 11, 206 5, 212 6" />
      <path d="M24 11 C 18 11, 16 17, 10 16 M196 11 C 202 11, 204 17, 210 16" />
    </svg>
  )
}

/** Stack of books with an inkwell and quill (heading, left). */
export function BooksQuill({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 270 190" className={className} fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* books, bottom to top */}
      <path d="M18 150 h170 a6 6 0 0 1 6 6 v6 a6 6 0 0 1 -6 6 h-170 a6 6 0 0 1 -6 -6 v-6 a6 6 0 0 1 6 -6 z" fill={PAPER} />
      <path d="M26 150 v18 M30 156 h150 M30 161 h150" />
      <path d="M30 118 l150 -6 a6 6 0 0 1 6 6 v26 a6 6 0 0 1 -6 6 h-150 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill={PAPER} transform="translate(0 4)" />
      <path d="M38 126 v24 M44 138 h120 M44 143 h120" />
      <path d="M44 86 h128 a6 6 0 0 1 6 6 v24 a6 6 0 0 1 -6 6 h-128 a6 6 0 0 1 -6 -6 v-24 a6 6 0 0 1 6 -6 z" fill={PAPER} />
      <path d="M52 92 v28 M58 104 h100 M58 109 h100" />
      <path d="M48 60 h116 a6 6 0 0 1 6 6 v16 a6 6 0 0 1 -6 6 h-116 a6 6 0 0 1 -6 -6 v-16 a6 6 0 0 1 6 -6 z" fill={PAPER} />
      <path d="M56 66 v20 M62 76 h92" />
      {/* inkwell */}
      <path d="M214 168 c -12 0 -16 -8 -14 -18 c 2 -8 8 -12 14 -12 c 6 0 12 4 14 12 c 2 10 -2 18 -14 18 z" fill={PAPER} />
      <ellipse cx="214" cy="138" rx="7" ry="2.5" />
      <path d="M205 152 c 6 4 16 4 22 0" />
      {/* quill */}
      <path d="M214 138 C 222 108, 238 64, 262 14 C 250 26, 232 46, 220 72 C 214 90, 212 114, 214 138 Z" fill={PAPER} />
      <path d="M214 138 C 226 100, 242 56, 262 14" />
      <path d="M229 94 l-10 -3 M234 82 l-11 -4 M239 70 l-11 -5 M244 58 l-10 -5 M250 46 l-10 -6 M226 108 l-9 -1 M222 122 l-8 0" />
      <path d="M232 92 l9 -2 M237 80 l10 -2 M242 68 l10 -3 M248 56 l9 -3" />
    </svg>
  )
}

/** Open book (heading, right). */
export function OpenBook({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 190" className={className} fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <g transform="rotate(-4 150 100)">
        {/* thickness */}
        <path d="M18 128 C 62 112, 112 114, 150 138 C 188 114, 238 112, 282 128 L 282 140 C 238 126, 188 128, 150 150 C 112 128, 62 126, 18 140 Z" fill={PAPER} />
        {/* pages */}
        <path d="M150 128 C 112 104, 62 102, 18 118 L 18 38 C 62 22, 112 24, 150 48 Z" fill={PAPER} />
        <path d="M150 128 C 188 104, 238 102, 282 118 L 282 38 C 238 22, 188 24, 150 48 Z" fill={PAPER} />
        <path d="M150 48 V 128" />
        {/* text lines */}
        <path strokeWidth="1" opacity=".7" d="M34 52 C 62 44, 100 46, 134 62 M34 64 C 62 56, 100 58, 134 74 M34 76 C 62 68, 100 70, 134 86 M34 88 C 62 80, 100 82, 134 98 M34 100 C 56 94, 90 96, 120 108" />
        <path strokeWidth="1" opacity=".7" d="M266 52 C 238 44, 200 46, 166 62 M266 64 C 238 56, 200 58, 166 74 M266 76 C 238 68, 200 70, 166 86 M266 88 C 238 80, 200 82, 166 98 M266 100 C 244 94, 210 96, 180 108" />
      </g>
    </svg>
  )
}

/** Soft hills and trees, anchored to a bottom corner of the section. */
export function Landscape({ className = '', flip = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 420 200" preserveAspectRatio="xMinYMax slice" className={`${className} ${flip ? '-scale-x-100' : ''}`} fill="#b98a47">
      <path d="M0 200 V 150 C 60 120, 130 118, 200 140 C 260 158, 330 150, 420 128 V 200 Z" opacity=".55" />
      <path d="M0 200 V 172 C 70 154, 150 160, 230 176 C 300 188, 360 180, 420 168 V 200 Z" opacity=".75" />
      {/* tree 1 */}
      <path d="M96 150 V 108 M96 124 l-14 -12 M96 118 l12 -10" stroke="#8f642d" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="96" cy="84" rx="34" ry="26" opacity=".7" />
      <ellipse cx="72" cy="100" rx="22" ry="16" opacity=".7" />
      <ellipse cx="120" cy="98" rx="24" ry="17" opacity=".7" />
      {/* tree 2 */}
      <path d="M196 150 V 118" stroke="#8f642d" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="196" cy="102" rx="24" ry="19" opacity=".6" />
      <ellipse cx="180" cy="114" rx="14" ry="11" opacity=".6" />
      {/* tree 3 */}
      <path d="M300 152 V 128" stroke="#8f642d" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="300" cy="116" rx="18" ry="14" opacity=".5" />
    </svg>
  )
}

/* Button icons */
export const BookIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[1.15em] w-[1.15em] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6.5C9.8 5 7 4.6 3.5 5v13c3.5-.4 6.3 0 8.5 1.5 2.2-1.5 5-1.9 8.5-1.5V5c-3.5-.4-6.3 0-8.5 1.5z" />
    <path d="M12 6.5v13" />
  </svg>
)

export const DownloadIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[1.15em] w-[1.15em] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v11M7.5 11 12 15.5 16.5 11M5 19.5h14" />
  </svg>
)

export const SearchIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M15 15l5.5 5.5" />
  </svg>
)
