import React, { useState } from 'react'
import Image from 'next/image'
import Hamburger from '../media/hamburger.png'

const MobileMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const expandMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleScrollToSection = (event) => {
    event.preventDefault()
    const targetId = event.target.getAttribute('href').substring(1) // Remove the '#'
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70px',
          paddingTop: '10px',
        }}
      >
        <Image
          src={Hamburger.src}
          alt="Hamburger menu icon"
          width={60}
          height={60}
          onClick={expandMenu}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '0',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 10,
            width: '200px',
          }}
        >
          <ul style={{ listStyle: 'none', padding: '10px', margin: '0' }}>
            <li>
              <a
                href="#clients"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
                onClick={handleScrollToSection}
              >
                {props.isPolish
                  ? 'Nasi klienci i klientki'
                  : 'Unsere Kundinnen und Kunden'}
              </a>
            </li>
            <li>
              <a
                href="#products"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
                onClick={handleScrollToSection}
              >
                {props.isPolish ? 'Nasze produkty' : '  Unsere Produkte'}
              </a>
            </li>
            <li>
              <a
                href="#manicure"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
                onClick={handleScrollToSection}
              >
                {props.isPolish ? 'Manicure' : 'Nageldesign'}
              </a>
            </li>
            <li>
              <a
                href="#team"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
                onClick={handleScrollToSection}
              >
                {props.isPolish ? 'O nas' : ' Unser Team'}
              </a>
            </li>

            <li>
              <a
                href="#contact"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
                onClick={handleScrollToSection}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
