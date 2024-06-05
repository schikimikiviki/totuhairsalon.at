import React from 'react'

const Menu = (props) => {
  const handleScrollToSection = (event) => {
    event.preventDefault()
    const targetId = event.target.getAttribute('href').substring(1) // Remove the '#'
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="Menu">
      <a href="#clients" className="links" onClick={handleScrollToSection}>
        {props.isPolish
          ? 'Nasi klienci i klientki'
          : 'Unsere Kundinnen und Kunden'}
      </a>
      <a className="links" href="#products" onClick={handleScrollToSection}>
        {props.isPolish ? 'Nasze produkty' : '  Unsere Produkte'}
      </a>
      <a className="links " href="#manicure" onClick={handleScrollToSection}>
        {props.isPolish ? 'Manicure' : 'Nageldesign'}
      </a>
      <a className="links" href="#team" onClick={handleScrollToSection}>
        {props.isPolish ? 'O nas' : ' Unser Team'}
      </a>

      <a className="links" href="#contact" onClick={handleScrollToSection}>
        Kontakt
      </a>
    </div>
  )
}

export default Menu
