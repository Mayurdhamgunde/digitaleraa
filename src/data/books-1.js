// HOW TO ADD A BOOK: copy one entry below, give it a new unique `id`, and fill in the fields.
//   title        Marathi (or any) title shown in bold on the card
//   description  smaller line under the title (optional)
//   pdf          path to the PDF in public/books/, e.g. '/books/my-book.pdf'  (use null to show "PDF coming soon")
//   cover        path to the cover image in public/images/covers/, e.g. '/images/covers/my-book.jpg'
//                (optional: leave it out and the default cover is used)
// The Library section lays out the cards by itself for any number of books, and shows a
// search box automatically once there are more than 8.
const DEFAULT_COVER = '/images/covers/default-cover.jpg'

export const books = [
  {
    id: 1,
    title: 'हरिपाठ १',
    description: 'Haripath – Part 1',
    pdf: '/books/haripath-1.pdf',
    cover: DEFAULT_COVER,
  },
  {
    id: 2,
    title: 'हरिपाठ २',
    description: 'Haripath – Part 2',
    pdf: '/books/haripath-2.pdf',
    cover: DEFAULT_COVER,
  },
  {
    id: 3,
    title: 'पारायण पुस्तक',
    description: 'Parayan Book',
    pdf: '/books/parayan-book.pdf',
    cover: DEFAULT_COVER,
  },
  {
    id: 4,
    title: 'संत ज्ञानेश्वर',
    description: 'Sant Dnyaneshwar',
    pdf: '/books/sant-dnyaneshwar.pdf',
    cover: DEFAULT_COVER,
  },
  {
    id: 5,
    title: 'Secret of Dnyaneshwari',
    description: 'The Secret of Dnyaneshwari',
    pdf: '/books/secret-of-dnyaneshwari.pdf',
    cover: DEFAULT_COVER,
  },
]

export const author = {
  marathi: 'श्री घाळदेव तुकाराम जाधव',
  english: 'Shri Ghaldev Tukaram Jadhav',
  bio: [
    'येथे श्री घाळदेव तुकाराम जाधव यांचा जीवन परिचय लिहावा.',
    'Write his life story, writing journey and spiritual work here.',
  ],
}
