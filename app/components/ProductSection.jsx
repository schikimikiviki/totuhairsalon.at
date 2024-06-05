import React from 'react'
import BlogPost from './BlogPost'

const ProductSection = (props) => {
  return (
    <div id="products">
      <p>
        {props.isPolish
          ? 'Nasze produkty i techniki'
          : 'Unsere Produkte und Techniken'}
      </p>
      <p>
        {props.isPolish
          ? 'Stosowane przez nas produkty charakteryzują się wysoką jakością i są zgodne z najnowszymi standardami i trendami. Nie szczędzimy kosztów ani wysiłku dla naszych klientów i używamy wyłącznie profesjonalnych produktów następujących marek:'
          : 'Die Produkte, die wir verwenden, sind qualitativ hochwertig und entsprechen den neuesten Standards und Trends. Für unsere Kundinnen und Kunden scheuen wir keine Kosten und Mühen und benutzen ausschließlich professionelle Produkte der folgenden Marken:'}
      </p>
    </div>
  )
}

export default ProductSection
