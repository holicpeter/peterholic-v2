# peterholic.com

Osobná webová stránka Peter Holic - AI Adopcia pre Malé a Stredné Firmy.

## 🚀 Technológie

- **Next.js 14** - React framework s App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Ikony

## 📈 SEO Optimalizácia

- Server-side rendering (SSR)
- Automaticky generovaný sitemap
- robots.txt
- Structured data (JSON-LD)
- Open Graph meta tagy
- Twitter Card meta tagy
- Semantic HTML

## 🛠️ Inštalácia

```bash
# Nainštalovať závislosti
npm install

# Spustiť development server
npm run dev

# Build pre produkciu
npm run build

# Spustiť produkčný server
npm start
```

## 📁 Štruktúra projektu

```
peterholic.com/
├── public/              # Statické súbory
├── src/
│   ├── app/
│   │   ├── globals.css  # Globálne štýly
│   │   ├── layout.tsx   # Root layout s SEO
│   │   ├── page.tsx     # Hlavná stránka
│   │   ├── sitemap.ts   # Sitemap generator
│   │   └── robots.ts    # Robots.txt generator
│   └── components/      # React komponenty
├── next.config.js       # Next.js konfigurácia
├── tailwind.config.ts   # Tailwind konfigurácia
└── tsconfig.json        # TypeScript konfigurácia
```

## 🌐 Deployment

Odporúčaný hosting: **Vercel** (automatický deployment z GitHub)

```bash
# Vercel CLI
npm i -g vercel
vercel
```

## 📝 Licencia

MIT © Peter Holic
