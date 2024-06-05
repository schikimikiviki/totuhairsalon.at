'use client'

import Header from './components/Header'
import InfoSection from './components/InfoSection'
import ContactSection from './components/ContactSection'
import NailSection from './components/NailSection'
import TeamSection from './components/TeamSection'
import ReviewSection from './components/ReviewSection'
import ProductSection from './components/ProductSection'
import { useState } from 'react'

export default function Home() {
  const [isPolish, setIsPolish] = useState(false)

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish)
    console.log('Globally changed language, give language to children')
  }

  return (
    <main>
      <Header sendIsPolish={updateLanguage} />
      <InfoSection isPolish={isPolish} />
      <ReviewSection isPolish={isPolish} />
      <ProductSection isPolish={isPolish} />
      <NailSection isPolish={isPolish} />
      <TeamSection isPolish={isPolish} />
      <ContactSection isPolish={isPolish} />
    </main>
  )
}
