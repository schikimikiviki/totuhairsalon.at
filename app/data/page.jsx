'use client';

import { useState } from 'react';
import HeaderMinimal from '../components/HeaderMinimal';
import Link from 'next/link';

export default function data() {
  const [isPolish, setIsPolish] = useState(false);

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  return (
    <main>
      <HeaderMinimal sendIsPolish={updateLanguage} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '100px',
          lineHeight: 2,
          textAlign: 'justify',
        }}
      >
        <p className='heading'>
          {isPolish ? 'Polityka prywatności' : 'Datenschutz'}
        </p>
        <p>
          {isPolish
            ? 'Ochrona Twoich danych osobowych jest dla nas szczególnie ważna. Dlatego przetwarzamy Twoje dane wyłącznie w oparciu o przepisy prawa (RODO, TKG 2003). W niniejszych informacjach o ochronie danych informujemy Cię o najważniejszych aspektach przetwarzania danych w ramach naszej relacji biznesowej lub inicjacji. Podejmujemy organizacyjne, umowne i techniczne środki bezpieczeństwa zgodnie z najnowszym stanem wiedzy, aby zapewnić przestrzeganie przepisów prawa o ochronie danych i ogólnego rozporządzenia o ochronie danych oraz chronić dane, którymi zarządzamy przed przypadkową lub celową manipulacją, utratą, zniszczenia lub zabezpieczenia przed dostępem osób nieupoważnionych.'
            : 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Geschäftsbeziehung bzw. Anbahnung. Wir treffen organisatorische, vertragliche und technische Sicherheitsmaßnahmen entsprechend dem Stand der Technik, um sicher zu stellen, dass die Vorschriften der Datenschutzgesetze bzw. der Datenschutz- grundverordnung eingehalten werden und um damit die durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.'}
        </p>
        <p>
          <u>
            {isPolish
              ? 'Wykorzystanie danych osobowych'
              : 'Verwendung personenbezogener Daten'}
          </u>
        </p>
        <p>
          {isPolish
            ? 'Gromadzimy dane osobowe, takie jak nazwiska, adresy, adresy e-mail, numery telefonów itp., tylko jeśli zostały one podane dobrowolnie przez użytkownika w celu otrzymania informacji lub zarejestrowania się na jedno z naszych wydarzeń. Dane osobowe są wykorzystywane wyłącznie przez nas. Będziemy wykorzystywać Twoje dane osobowe wyłącznie w zakresie niezbędnym do odpowiadania na Twoje zapytania, składania ofert i zapewnienia lepszej obsługi zgodnie z niniejszymi zasadami prywatności. Zastrzegamy sobie prawo do wykorzystywania, przechowywania lub ujawniania danych osobowych, jeśli jest to niezbędne do przestrzegania wszelkich przepisów ustawowych, wykonawczych lub wymogów prawnych, do rozpatrywania skarg klientów lub ewentualnych naruszeń prawa, do ochrony integralności Stron, do odpowiadania na Twoje prośby, odpowiedzi lub brać udział w dochodzeniach prawnych.'
            : 'Wir sammeln personenbezogene Daten, über die eine Identifizierung möglich ist, wie Namen, Adressen, E-Mail- Adressen, Telefonnummer etc. nur dann, wenn diese von einem Nutzer freiwillig angegeben werden, um Informationen zu erhalten oder sich zu einer unserer Veranstaltungen anzumelden. Personenbezogene Daten werden ausschließlich von uns verwendet. Wir verwenden Ihre personenbezogenen Daten nur soweit dies erforderlich ist, um auf Ihre Anfragen einzugehen, Angebote zu erstellen und Ihnen einen besseren Service zu bieten, der mit diesen Datenschutzgrundsätzen in Einklang steht. Wir behalten uns das Recht vor, personenbezogene Daten in der Form zu nutzen, zurückzubehalten oder offenzulegen, wie es zur Erfüllung von Gesetzen, Vorschriften oder gesetzlichen Erfordernissen notwendig ist, um Kundenbeschwerden oder möglichen Gesetzesverstößen nachzugehen, die Integrität der Webseiten zu schützen, Ihre Anfragen zu beantworten oder an gesetzlichen Nachforschungen mitzuwirken.'}
        </p>
        <p>
          <u>{isPolish ? 'Kontakt z nami' : 'Kontakt mit uns'}</u>
        </p>
        <p>
          {isPolish
            ? 'Jeśli skontaktujesz się z nami za pośrednictwem poczty elektronicznej, podane przez Ciebie dane zostaną przez nas zapisane w celu rozpatrzenia Twojej prośby oraz w przypadku dalszych pytań. Nie będziemy przekazywać tych danych bez Twojej zgody. Jeśli na naszych stronach zbierane są dane osobowe (np. imię i nazwisko, adres lub adres e-mail), odbywa się to zawsze, w miarę możliwości, na zasadzie dobrowolności. Twoje dane wykorzystujemy tylko w zakresie, w jakim jest to niezbędne do udzielenia odpowiedzi na zapytanie. Jeżeli zapytanie zakończy się nawiązaniem relacji biznesowej, dane te będą również przechowywane zgodnie z przepisami prawa. W przypadku braku relacji biznesowej wszystkie dane osobowe zostaną usunięte lub zanonimizowane po upływie jednego roku. Zwracamy uwagę, że transmisja danych w Internecie (np. podczas komunikacji za pośrednictwem poczty elektronicznej) może mieć luki w zabezpieczeniach. Całkowita ochrona danych przed dostępem osób trzecich nie jest możliwa. Należy pamiętać, że ze względu na charakter poczty elektronicznej, komunikacja za pośrednictwem poczty elektronicznej nie jest bezpieczną metodą komunikacji!'
            : 'Wenn Sie per E-Mail mit uns Kontakt aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder Email) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Wir verwenden Ihre Daten nur insoweit, als diese für die Beantwortung der Anfrage notwendig sind. Sofern sich aus der Anfrage eine Geschäftsbeziehung ergibt, werden diese Daten ebenfalls gemäß der gesetzlichen Bestimmungen gespeichert. Ergibt sich keine Geschäftsbeziehung werden alle personenbezogenen Daten nach einer Frist von einem Jahr gelöscht oder anonymisiert. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Es wird ausdrücklich darauf hingewiesen, dass die Kommunikation per E-Mail aufgrund der Natur von E-Mails keine sichere Kommunikationsmethode ist!'}
        </p>
        <p>
          <u>
            {isPolish
              ? 'Odwiedzenie naszej strony internetowej'
              : 'Der Besuch unserer Website'}
          </u>
        </p>
        <p>
          <u>{isPolish ? 'Ciasteczka' : 'Cookies'} </u>
        </p>
        <p>
          {isPolish
            ? 'Nasza strona internetowa wykorzystuje tzw. pliki cookies. Są to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu za pomocą przeglądarki. Nie wyrządzają szkody. Używamy plików cookie, aby nasza oferta była przyjazna dla użytkownika. Niektóre pliki cookie pozostają zapisane na Twoim urządzeniu, dopóki ich nie usuniesz. Umożliwiają nam rozpoznanie Twojej przeglądarki przy następnej wizycie. Jeśli sobie tego nie życzysz, możesz ustawić swoją przeglądarkę tak, aby informowała Cię o ustawieniach plików cookies i zezwalała na to tylko w indywidualnych przypadkach. Jeśli pliki cookie zostaną wyłączone, funkcjonalność naszej witryny internetowej może zostać ograniczona.'
            : 'Unsere Website verwendet sogenannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.'}
        </p>
        <p>
          <u>
            {isPolish
              ? 'Linki do innych stron internetowych oraz integracja usług i treści stron trzecich'
              : 'Links zu anderen Webseiten sowie Einbindung von Diensten und Inhalten Dritter'}
          </u>
        </p>
        <p>
          {isPolish
            ? 'Nasza oferta online zawiera linki do innych stron internetowych. Nie mamy wpływu na to, czy ich operatorzy przestrzegają przepisów o ochronie danych. Może się zdarzyć, że treści stron trzecich, takie jak filmy z YouTube, mapy z Google Maps, kanały RSS lub grafiki z innych stron internetowych, zostaną zintegrowane z tą ofertą online. Zawsze zakłada to, że dostawcy tych treści (zwani dalej „dostawcami zewnętrznymi”) znają adres IP użytkowników. Ponieważ bez adresu IP nie mogliby wysłać treści do przeglądarki odpowiedniego użytkownika. Do wyświetlenia tej treści niezbędny jest zatem adres IP. Staramy się wykorzystywać wyłącznie treści, których poszczególni dostawcy korzystają wyłącznie z adresu IP w celu dostarczania treści. Nie mamy jednak wpływu na to, czy dostawcy zewnętrzni przechowują adres IP, na przykład w celach statystycznych. O ile nam wiadomo, informujemy o tym użytkowników.'
            : 'Unser Online-Angebot enthält Links zu anderen Websites. Wir haben keinen Einfluss darauf, dass deren Betreiber die Datenschutzbestimmungen einhalten. Es kann vorkommen, dass innerhalb dieses Onlineangebotes Inhalte Dritter, wie zum Beispiel Videos von YouTube, Kartenmaterial von Google Maps, RSS-Feeds oder Grafiken von anderen Webseiten eingebunden werden. Dies setzt immer voraus, dass die Anbieter dieser Inhalte (nachfolgend bezeichnet als “Dritt-Anbieter”) die IP-Adresse der Nutzer wahrnehmen. Denn ohne die IP-Adresse, könnten sie die Inhalte nicht an den Browser des jeweiligen Nutzers senden. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Jedoch haben wir keinen Einfluss darauf, falls die Dritt-Anbieter die IP-Adresse z.B. für statistische Zwecke speichern. Soweit dies uns bekannt ist, klären wir die Nutzer darüber auf.'}
        </p>
        <p>
          <u>{isPolish ? 'Dzieci' : 'Kinder'}</u>
        </p>
        <p>
          {isPolish
            ? 'Osoby poniżej 18 roku życia nie powinny przekazywać nam danych osobowych bez zgody rodziców lub opiekunów prawnych. Nie żądamy, nie gromadzimy ani nie udostępniamy danych osobowych od dzieci. Twoje prawa Generalnie przysługuje Ci prawo do informacji, poprawiania, usuwania, ograniczania, przenoszenia danych, odwołania i sprzeciwu. Jeżeli uważasz, że przetwarzanie Twoich danych narusza przepisy o ochronie danych lub Twoje prawa do ochrony danych zostały naruszone w inny sposób, możesz złożyć skargę do organu nadzorczego. W Austrii jest to organ ochrony danych. W przypadku zawarcia umowy wszystkie dane ze stosunku umownego będą przechowywane do momentu upływu okresu zatrzymania podatku (7 lat). Przetwarzanie danych odbywa się na podstawie przepisów prawnych § 96 ust. 3 TKG i art. 6 ust. 1 lit. a (zgoda) i/lub lit b (niezbędne do realizacji umowy) RODO. Jeśli chcesz, abyśmy zaktualizowali, zmienili lub usunęli informacje, które o Tobie posiadamy (z zastrzeżeniem obowiązujących wyjątków prawnych), skontaktuj się z: 0676 6188223'
            : 'Personen unter 18 Jahren sollten ohne Zustimmung der Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln. Wir fordern keine personenbezogenen Daten von Kindern an, sammeln diese nicht und geben sie nicht an Dritte weiter. Ihre Rechte Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertrag- barkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde. Im Falle eines Vertragsabschlusses werden sämtliche Daten aus dem Vertragsverhältnis bis zum Ablauf der steuerrechtlichen Aufbewahrungsfrist (7 Jahre) gespeichert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder lit b (notwendig zur Vertragserfüllung) der DSGVO. Wenn Sie möchten, dass wir Informationen, die wir über Sie haben, aktualisieren, ändern oder löschen (vorbehaltlich geltender gesetzlicher Ausnahmen), wenden Sie sich bitte an: 0676 6188223'}
        </p>
        <p>
          <u>
            {isPolish
              ? 'Organ odpowiedzialny w zakresie ochrony danych'
              : ' Verantwortliche Stelle im Sinne des Datenschutzes'}
          </u>
        </p>
        <ul>
          <li>{isPolish ? 'Salon Fryzjerski Totu' : 'Totu Hair Salon'} </li>
          <li>Aneta Griego</li>
          <li>Märzstraße 42, {isPolish ? 'numer' : 'Tür'} 2</li>
          <li>1150 {isPolish ? 'Wiedeń' : 'Wien'}</li>
          <li>Telefon: 0676 6188223</li>
        </ul>
        <br />
        <br />
        <Link href='/'>
          {isPolish ? 'Powrót do strony głównej' : 'Zur Hauptseite zurück'}
        </Link>
        <br />
        <br />
      </div>
    </main>
  );
}
