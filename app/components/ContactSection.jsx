import React from 'react'
import Image from 'next/image'
import krzesla from '../media/krzesla.jpg'
import krzeslo from '../media/krzeslo.jpg'
import kanapa from '../media/kanapa.jpg'
import draussen from '../media/draussen.jpg'
import Button from './Button'
import Link from 'next/link'

const ContactSection = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'black',
      }}
    >
      <div className="salon-images">
        <Image src={krzesla.src} alt="image" width={300} height={250} />
        <Image src={kanapa.src} alt="image" width={300} height={250} />
        <Image src={draussen.src} alt="image" width={300} height={250} />
        <Image src={krzeslo.src} alt="image" width={300} height={250} />
      </div>
      <div className="contact-info-div" id="contact">
        <div className="contact-text">
          <p className="heading">Kontakt</p>
          <p>
            {props.isPolish
              ? 'Masz pytania dotyczące naszych usług lub chciałbyś umówić się na spotkanie? Po prostu zadzwoń do nas lub skorzystaj z linku Treatwell, aby umówić się na wizytę.'
              : 'Sie haben Fragen zu unseren Leistungen oder möchten einen Termin vereinbaren? Rufen Sie uns einfach an und vereinbaren Sie einen Termin.'}
          </p>
          <Button
            text={
              props.isPolish
                ? 'Zarezerwuj termin już teraz'
                : 'Jetzt Termin buchen!'
            }
            isAction="telephone"
          />

          <br />
          <br />

          <iframe
            className="responsive-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.407494701102!2d16.327020876201978!3d48.19876647125028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077427071d7f%3A0xaa57558f5ff38d6d!2sTOTU%20Hair%20%26%20Beauty%20Salon!5e0!3m2!1sde!2sat!4v1717204092406!5m2!1sde!2sat"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-adress">
          <p className="heading">Telefon</p>
          <p>0676 6188223</p>
          <p className="heading">{props.isPolish ? 'Adres' : 'Adresse'} </p>
          <p>
            {props.isPolish
              ? 'Märzstraße 42, numer 2 1150 Wiedeń'
              : 'Märzstraße 42, Tür 2 1150 Wien'}{' '}
          </p>
          <p>
            <u>
              {props.isPolish ? 'Transport publiczny' : 'Öffentliche Anfahrt'}
            </u>
          </p>
          <p>
            {props.isPolish
              ? 'U3 Schweglerstraße lub autobus linii 12A, stacja Schweglerstraße'
              : 'U3 Schweglerstraße oder Buslinie 12A, Station Schweglerstraße'}
          </p>

          <p className="heading">
            {props.isPolish ? 'Godziny otwarcia' : 'Öffnungszeiten'}{' '}
          </p>
          <ul>
            <li>
              {props.isPolish ? 'Poniedziałek - Piątek' : 'Montag – Freitag'}:
              08:00-19:00
            </li>
            <li>{props.isPolish ? 'Sobota: ' : 'Samstag:'} 08:00-14:00</li>
          </ul>
          <br />
          <br />
          <br />
          <a href="https://vbdev.at/">
            {props.isPolish ? 'Strona internetowa' : 'Website-Programmierung'}
          </a>
        </div>
        <div className="contact-info">
          <div style={{ alignSelf: 'stretch' }}>
            <p>
              <Link href="/info">
                {props.isPolish ? 'Stopka redakcyjna' : 'Impressum'}
              </Link>
            </p>
            <p>
              <Link href="/data">
                {props.isPolish ? 'Polityka prywatności' : 'Datenschutz'}
              </Link>
            </p>

            <p>
              {props.isPolish
                ? 'Ustawienia plików cookie'
                : 'Cookie-Einstellungen'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
