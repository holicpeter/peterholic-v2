import { 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter,
  Menu,
  Sparkles,
  Target,
  Rocket,
  MessageCircle,
  ChevronDown
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Peter Holic
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#sluzby" className="text-gray-600 hover:text-gray-900 transition-colors">
                Služby
              </Link>
              <Link href="#proces" className="text-gray-600 hover:text-gray-900 transition-colors">
                Ako to funguje
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </Link>
              <Link href="#o-mne" className="text-gray-600 hover:text-gray-900 transition-colors">
                O mne
              </Link>
              <Link href="#kontakt" className="text-gray-600 hover:text-gray-900 transition-colors">
                Kontakt
              </Link>
              <Link href="/en" className="text-gray-600 hover:text-gray-900 transition-colors">
                EN
              </Link>
              <Link 
                href="#ai-audit" 
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all"
              >
                AI Audit
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Pripravte vašu firmu na{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                AI budúcnosť
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Pomáham firmám implementovať umelú inteligenciu do každodenných procesov. 
              Od auditu pripravenosti až po komplexné nasadenie AI riešení.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#ai-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Zistite vaše AI príležitosti - bezplatný audit
              </Link>
              <Link 
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Nezáväzná konzultácia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ako vám môžem pomôcť
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Komplexné služby pre úspešnú adopciu AI vo vašej firme
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Audit Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Audit</h3>
              <p className="text-gray-600 mb-6">
                Komplexné zhodnotenie pripravenosti vašej firmy na AI. 
                Identifikujem oblasti s najväčším potenciálom a rizikom.
              </p>
              <ul className="space-y-3 mb-8">
                {['Analýza procesov', 'Hodnotenie dát', 'Gap analýza', 'Roadmapa implementácie'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="#ai-audit"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Vyskúšať zadarmo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Konzultácie Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Konzultácie</h3>
              <p className="text-gray-600 mb-6">
                Strategické poradenstvo pre výber a nasadenie AI nástrojov. 
                Pomôžem vám nájsť riešenia šité na mieru.
              </p>
              <ul className="space-y-3 mb-8">
                {['Výber nástrojov', 'Stratégia adopcie', 'ROI kalkulácia', 'Školenia tímu'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="#kontakt"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Rezervovať konzultáciu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Implementácia Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Implementácia</h3>
              <p className="text-gray-600 mb-6">
                Kompletné nasadenie AI riešení do vašich procesov. 
                Od pilotného projektu až po plnú integráciu.
              </p>
              <ul className="space-y-3 mb-8">
                {['Pilotný projekt', 'Integrácia systémov', 'Automatizácia', 'Podpora & údržba'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="#kontakt"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Dohodnúť projekt
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ako to funguje
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block mt-8">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
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
              <details key={index} className="group bg-white rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mne" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                O mne
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Som Peter Holic a pomáham slovenským firmám adoptovať umelú inteligenciu. 
                Verím, že AI nie je len pre veľké korporácie - správne nasadené riešenia 
                môžu transformovať aj malé a stredné firmy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Moje služby kombinujú technické znalosti s pochopením biznisu. 
                Nehovorím o abstraktných možnostiach, ale o konkrétnych riešeniach 
                s merateľným dopadom na váš biznis.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com/in/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                PH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Poďme sa porozprávať
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Máte otázky ohľadom AI pre vašu firmu? 
                Rád vám pomôžem nájsť najlepšie riešenie. 
                Nezáväzná konzultácia je zadarmo.
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:peter@peterholic.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>peter@peterholic.com</span>
                </a>
                <a 
                  href="tel:+421917393190"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>+421 917 393 190</span>
                </a>
              </div>
              
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com/in/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Začnime ešte dnes</h3>
              <div className="space-y-4">
                <Link
                  href="https://calendly.com/peterholic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Rezervovať termín
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#ai-audit"
                  className="flex items-center justify-center gap-2 w-full border border-white/30 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Spustiť AI Audit
                  <Sparkles className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Link href="/" className="text-xl font-bold">Peter Holic</Link>
              <p className="text-gray-400 mt-1">AI adopcia pre malé a stredné firmy</p>
            </div>
            <div className="flex items-center gap-8">
              <Link href="#ai-audit" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Audit
              </Link>
              <Link href="#sluzby" className="text-gray-400 hover:text-white transition-colors">
                Služby
              </Link>
              <Link href="#kontakt" className="text-gray-400 hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Peter Holic. Všetky práva vyhradené.
          </div>
        </div>
      </footer>
    </div>
  )
}
