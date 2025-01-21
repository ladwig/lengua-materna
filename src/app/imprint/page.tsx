'use client';

import Link from 'next/link'

export default function Imprint() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl">
        <Link 
          href="/" 
          className="text-sm hover:text-gray-400 transition-colors mb-12 inline-block"
        >
          ← Back
        </Link>
        <h1 className="text-3xl mb-4">Imprint</h1>
        
        <div className="space-y-8 text-sm font-light text-gray-300">
          <section>
            <h2 className="text-xl mb-4 text-white font-normal">Angaben gemäß § 5 TMG:</h2>
            <p>[Dein Vorname Nachname / Unternehmensname]</p>
            <p>[Adresse, z. B. Musterstraße 1]</p>
            <p>[PLZ Stadt]</p>
            <p>[Land]</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white font-normal">Kontakt:</h2>
            <p>Telefon: [Telefonnummer]</p>
            <p>E-Mail: [E-Mail-Adresse]</p>
            <p>Website: [URL der Website]</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white font-normal">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p>[Dein Vorname Nachname / Unternehmensname]</p>
            <p>[Adresse, z. B. Musterstraße 1]</p>
            <p>[PLZ Stadt]</p>
            <p>[Land]</p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white font-normal">Haftung für Inhalte:</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white font-normal">Haftung für Links:</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-4 text-white font-normal">Urheberrecht:</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 