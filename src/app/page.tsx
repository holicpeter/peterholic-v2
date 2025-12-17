import { 
  ArrowRight, 
  Check,
  Mail, 
  Phone, 
  Linkedin, 
  Twitter,
  Instagram,
  Menu,
  Sparkles,
  ChevronDown,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(222,47%,6%)] text-[hsl(210,40%,98%)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">
              Peter Holic
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#sluzby" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                Služby
              </Link>
              <Link href="#proces" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                Ako to funguje
              </Link>
              <Link href="#faq" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                FAQ
              </Link>
              <Link href="#o-mne" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                O mne
              </Link>
              <Link href="#kontakt" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                Kontakt
              </Link>
              <Link href="/en" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                EN
              </Link>
              <Link 
                href="#ai-audit" 
                className="bg-[hsl(199,89%,48%)] text-[hsl(222,47%,6%)] px-4 py-2 rounded-lg font-medium hover:bg-[hsl(199,89%,43%)] transition-all"
              >
                AI Audit
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-16 relative hero-glow">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl pt-20">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Pripravte vašu firmu na{' '}
              <span className="text-gradient">
                AI budúcnosť
              </span>
            </h1>
            <p className="text-xl text-[hsl(215,20%,55%)] mb-8 leading-relaxed">
              Pomáham firmám implementovať umelú inteligenciu do každodenných procesov. 
              Od auditu pripravenosti až po komplexné nasadenie AI riešení.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#ai-audit"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(199,89%,48%)] text-[hsl(222,47%,6%)] px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(199,89%,43%)] transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Zistite vaše AI príležitosti - bezplatný audit
              </Link>
              <Link 
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 border border-[hsl(222,30%,18%)] px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(222,30%,14%)] transition-colors"
              >
                Nezáväzná konzultácia
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative glow elements */}
        <div className="absolute top-[60%] left-[60%] w-[500px] h-[500px] bg-[hsl(199,89%,48%)] rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] bg-[hsl(32,95%,55%)] rounded-full blur-3xl opacity-5 pointer-events-none" />
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Audit Card */}
            <div className="bg-[hsl(222,47%,8%)] border border-[hsl(222,30%,18%)] rounded-2xl p-8 hover:border-[hsl(199,89%,48%)/0.5] transition-colors group">
              <h3 className="text-2xl font-bold mb-4">AI Audit</h3>
              <p className="text-[hsl(215,20%,55%)] mb-6">
                Komplexné zhodnotenie pripravenosti vašej firmy na AI. 
                Identifikujem oblasti s najväčším potenciálom a rizikom.
              </p>
              <ul className="space-y-3 mb-8">
                {['Analýza procesov', 'Hodnotenie dát', 'Gap analýza', 'Roadmapa implementácie'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[hsl(210,40%,98%)]">
                    <Check className="w-5 h-5 text-[hsl(199,89%,48%)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="#ai-audit"
                className="inline-flex items-center gap-2 text-[hsl(199,89%,48%)] font-semibold group-hover:text-[hsl(199,89%,58%)] transition-colors"
              >
                Vyskúšať zadarmo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Konzultácie Card */}
            <div className="bg-[hsl(222,47%,8%)] border border-[hsl(222,30%,18%)] rounded-2xl p-8 hover:border-[hsl(199,89%,48%)/0.5] transition-colors group">
              <h3 className="text-2xl font-bold mb-4">AI Konzultácie</h3>
              <p className="text-[hsl(215,20%,55%)] mb-6">
                Strategické poradenstvo pre výber a nasadenie AI nástrojov. 
                Pomôžem vám nájsť riešenia šité na mieru.
              </p>
              <ul className="space-y-3 mb-8">
                {['Výber nástrojov', 'Stratégia adopcie', 'ROI kalkulácia', 'Školenia tímu'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[hsl(210,40%,98%)]">
                    <Check className="w-5 h-5 text-[hsl(199,89%,48%)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="#kontakt"
                className="inline-flex items-center gap-2 text-[hsl(199,89%,48%)] font-semibold group-hover:text-[hsl(199,89%,58%)] transition-colors"
              >
                Rezervovať konzultáciu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Implementácia Card */}
            <div className="bg-[hsl(222,47%,8%)] border border-[hsl(222,30%,18%)] rounded-2xl p-8 hover:border-[hsl(199,89%,48%)/0.5] transition-colors group">
              <h3 className="text-2xl font-bold mb-4">AI Implementácia</h3>
              <p className="text-[hsl(215,20%,55%)] mb-6">
                Kompletné nasadenie AI riešení do vašich procesov. 
                Od pilotného projektu až po plnú integráciu.
              </p>
              <ul className="space-y-3 mb-8">
                {['Pilotný projekt', 'Integrácia systémov', 'Automatizácia', 'Podpora & údržba'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[hsl(210,40%,98%)]">
                    <Check className="w-5 h-5 text-[hsl(199,89%,48%)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="#kontakt"
                className="inline-flex items-center gap-2 text-[hsl(199,89%,48%)] font-semibold group-hover:text-[hsl(199,89%,58%)] transition-colors"
              >
                Dohodnúť projekt
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ako to funguje
            </h2>
            <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl mx-auto">
              Jednoduchý 4-krokový proces k úspešnej AI transformácii
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Úvodná konzultácia', desc: 'Pochopíme vaše ciele a potreby' },
              { step: '02', title: 'AI Audit', desc: 'Zhodnotíme pripravenosť a príležitosti' },
              { step: '03', title: 'Stratégia', desc: 'Navrhneme roadmapu implementácie' },
              { step: '04', title: 'Realizácia', desc: 'Nasadíme a optimalizujeme riešenia' },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(280,70%,50%)] rounded-full flex items-center justify-center text-[hsl(222,47%,6%)] font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[hsl(215,20%,55%)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Často kladené otázky
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Pre aké firmy sú vaše služby vhodné?',
                a: 'Špecializujem sa na malé a stredné firmy (10-250 zamestnancov) zo všetkých odvetví. Najviac pracujem s firmami z oblasti služieb, výroby a e-commerce.'
              },
              {
                q: 'Koľko stojí AI audit?',
                a: 'Základný AI audit je zadarmo - trvá približne 30 minút a dostanete prehľad o vašich AI príležitostiach. Detailný audit s roadmapou je súčasťou konzultačného balíka.'
              },
              {
                q: 'Ako dlho trvá implementácia AI riešení?',
                a: 'Záleží na komplexnosti. Jednoduchá automatizácia môže byť hotová za 1-2 týždne. Komplexné riešenia s integráciami trvajú 2-3 mesiace.'
              },
              {
                q: 'Potrebujem mať technický tím?',
                a: 'Nie, nie je to potrebné. Riešenia navrhujem tak, aby ich vedel používať každý. Poskytnem aj školenie pre váš tím.'
              },
            ].map((faq, index) => (
              <details key={index} className="group bg-[hsl(222,47%,8%)] border border-[hsl(222,30%,18%)] rounded-xl">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[hsl(215,20%,55%)] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-[hsl(215,20%,55%)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Poďme sa porozprávať
              </h2>
              <p className="text-xl text-[hsl(215,20%,55%)] mb-8">
                Máte otázky ohľadom AI pre vašu firmu? 
                Rád vám pomôžem nájsť najlepšie riešenie. 
                Nezáväzná konzultácia je zadarmo.
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:peter@peterholic.com"
                  className="flex items-center gap-4 text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors"
                >
                  <Mail className="w-6 h-6 text-[hsl(199,89%,48%)]" />
                  <span>peter@peterholic.com</span>
                </a>
                <a 
                  href="tel:+421917393190"
                  className="flex items-center gap-4 text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors"
                >
                  <Phone className="w-6 h-6 text-[hsl(199,89%,48%)]" />
                  <span>+421 917 393 190</span>
                </a>
              </div>
              
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com/in/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(222,30%,14%)] rounded-lg flex items-center justify-center hover:bg-[hsl(199,89%,48%)/0.2] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(222,30%,14%)] rounded-lg flex items-center justify-center hover:bg-[hsl(199,89%,48%)/0.2] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(222,30%,14%)] rounded-lg flex items-center justify-center hover:bg-[hsl(199,89%,48%)/0.2] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-[hsl(222,47%,8%)] border border-[hsl(222,30%,18%)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Začnime ešte dnes</h3>
              <div className="space-y-4">
                <Link
                  href="https://calendly.com/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[hsl(199,89%,48%)] text-[hsl(222,47%,6%)] py-3 rounded-lg font-semibold hover:bg-[hsl(199,89%,43%)] transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Rezervovať termín
                </Link>
                <Link
                  href="#ai-audit"
                  className="flex items-center justify-center gap-2 w-full border border-[hsl(222,30%,18%)] py-3 rounded-lg font-semibold hover:bg-[hsl(222,30%,14%)] transition-colors"
                >
                  <Sparkles className="w-5 h-5" />
                  Spustiť AI Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[hsl(222,30%,18%)]">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Link href="/" className="text-xl font-bold">Peter Holic</Link>
              <p className="text-[hsl(215,20%,55%)] mt-1">AI adopcia pre malé a stredné firmy</p>
            </div>
            <div className="flex items-center gap-8">
              <Link href="#ai-audit" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Audit
              </Link>
              <Link href="#sluzby" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                Služby
              </Link>
              <Link href="#kontakt" className="text-[hsl(215,20%,55%)] hover:text-[hsl(210,40%,98%)] transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
