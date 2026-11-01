import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { books } from './data/books'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookCard from './components/BookCard'
import Reader from './components/Reader'
import { Library, Recognition, About, Footer } from './components/Sections'

export default function App() {
  const [reading, setReading] = useState(null)
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Library books={books} onRead={setReading} Card={BookCard} />
        <Recognition />
        <About />
      </main>
      <Footer />
      <AnimatePresence>
        {reading && <Reader book={reading} onClose={() => setReading(null)} />}
      </AnimatePresence>
    </>
  )
}

