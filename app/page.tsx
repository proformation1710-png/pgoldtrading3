"use client"

import { useState } from "react"

export default function Home() {

  const [language, setLanguage] = useState("fr")
  const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    if (response.ok) {
      alert("Message envoyé")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      alert("Erreur lors de l'envoi")
    }
  } catch (error) {
    console.error(error)
    alert("Erreur lors de l'envoi")
  }
}

  const months = [
    "Jan","Fév","Mar","Avr","Mai","Juin",
    "Juil","Août","Sep","Oct","Nov","Déc"
  ]

  const values = [3.2, 3.8, 4.1, 4.9, 5.1, 5.8, 6.2, 5.4, 6.8, 5.9, 6.5, 7.0]

  // PORTFOLIO SIMULATION
  const initialCapital = 3000

  const avgReturn = values.reduce((a, b) => a + b, 0) / values.length

  const grossProfit = (initialCapital * avgReturn) / 100

  const fee = grossProfit * 0.30

  const netProfit = grossProfit - fee

  const currentValue = initialCapital + netProfit

  const text = {

    fr: {
      heroDesc:
        "Système de trading institutionnel axé sur la croissance du capital et la gestion du risque.",

      start: "Commencer",
      contact: "Contact",

      conservative: "Stratégie Conservatrice",
      aggressive: "Stratégie Agressive",
      monitoring: "Surveillance Marché",

      portfolio: "Portefeuille Simulé",
      initial: "Capital Initial",
      gross: "Profit Brut",
      weekly: "Commission 30%",
      net: "Valeur Nette",

      performance: "Performance Mensuelle",

      strategy: "Stratégie d'Investissement",

      strategyDesc:
        "PGOLDTRADING combine analyse technique et gestion du capital pour une performance stable.",

      contactTitle: "Nous Contacter",

      fullname: "Nom Complet",
      message: "Message",

      send: "Envoyer",

      risk: "Gestion du Risque",

      risk1: "Risque contrôlé sur chaque position",
      risk2: "Protection du capital",
      risk3: "Analyse institutionnelle",
      risk4: "Surveillance du marché 24/7",

      investors: "Investisseurs Actifs",
      capital: "Capital Géré",
      trades: "Trades Exécutés",
    },

    en: {
      heroDesc:
        "Institutional trading system focused on capital growth and risk management.",

      start: "Get Started",
      contact: "Contact",

      conservative: "Conservative Strategy",
      aggressive: "Aggressive Strategy",
      monitoring: "Market Monitoring",

      portfolio: "Simulated Portfolio",
      initial: "Initial Capital",
      gross: "Gross Profit",
      weekly: "30% Fee",
      net: "Net Value",

      performance: "Monthly Performance",

      strategy: "Investment Strategy",

      strategyDesc:
        "PGOLDTRADING combines technical analysis and capital management for stable performance.",

      contactTitle: "Contact Us",

      fullname: "Full Name",
      message: "Message",

      send: "Send",

      risk: "Risk Management",

      risk1: "Controlled risk on each trade",
      risk2: "Capital protection",
      risk3: "Institutional analysis",
      risk4: "Market monitoring 24/7",

      investors: "Active Investors",
      capital: "Capital Managed",
      trades: "Trades Executed",
    },

  }

  const t = text[language as keyof typeof text]

  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/trading-bg.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10">

        {/* HEADER */}
        <header className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">

          <div className="flex items-center gap-3">

            {/* SMALL LOGO */}
            <img
              src="/pgold-logo.png"
              alt="PGOLDTRADING Logo"
              className="w-12 h-12 object-contain rounded-xl"
            />

          </div>

          {/* LANGUAGE */}
          <div className="flex gap-2">

            <button
              onClick={() => setLanguage("fr")}
              className={`px-4 py-2 rounded-xl border transition ${
                language === "fr"
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-yellow-500/30 text-white"
              }`}
            >
              FR
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-xl border transition ${
                language === "en"
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-yellow-500/30 text-white"
              }`}
            >
              EN
            </button>

          </div>

        </header>

        {/* HERO */}
        <section className="text-center px-6 py-24">

          {/* BIG LOGO */}
          <img
            src="/pgold-logo.png"
            alt="PGOLDTRADING"
            className="w-[500px] md:w-[950px] max-h-[160px] mx-auto object-contain"
          />

          <p className="text-zinc-300 mt-8 max-w-2xl mx-auto text-lg">
            {t.heroDesc}
          </p>

          <div className="mt-10 flex gap-4 justify-center">

            <button className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition">
              {t.start}
            </button>

            <a
              href="#contact"
              className="border border-yellow-500/30 px-8 py-4 rounded-xl hover:border-yellow-400 transition"
            >
              {t.contact}
            </a>

          </div>

        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto mb-10">

          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">+3%</h3>
            <p className="text-zinc-400">{t.conservative}</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">+7%</h3>
            <p className="text-zinc-400">{t.aggressive}</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">24/7</h3>
            <p className="text-zinc-400">{t.monitoring}</p>
          </div>

        </section>

        {/* LIVE COUNTERS */}
        <section className="px-6 max-w-6xl mx-auto mb-20">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-zinc-950/40 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-8 text-center">

              <h3 className="text-4xl font-bold text-yellow-400">
                124+
              </h3>

              <p className="text-zinc-400 mt-2">
                {t.investors}
              </p>

            </div>

            <div className="bg-zinc-950/40 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-8 text-center">

              <h3 className="text-4xl font-bold text-yellow-400">
                $2.4M
              </h3>

              <p className="text-zinc-400 mt-2">
                {t.capital}
              </p>

            </div>

            <div className="bg-zinc-950/40 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-8 text-center">

              <h3 className="text-4xl font-bold text-yellow-400">
                18,245
              </h3>

              <p className="text-zinc-400 mt-2">
                {t.trades}
              </p>

            </div>

          </div>

        </section>

        {/* PORTFOLIO */}
        <section className="px-6 py-16 max-w-6xl mx-auto">

          <div className="bg-zinc-950/40 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-10 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t.portfolio}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  $3,000
                </h3>
                <p className="text-zinc-400">{t.initial}</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  ${grossProfit.toFixed(0)}
                </h3>
                <p className="text-zinc-400">{t.gross}</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-400">
                  -${fee.toFixed(0)}
                </h3>
                <p className="text-zinc-400">{t.weekly}</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  ${currentValue.toFixed(0)}
                </h3>
                <p className="text-zinc-400">{t.net}</p>
              </div>

            </div>

          </div>

        </section>

        {/* MONTHLY PERFORMANCE */}
        <section className="px-6 py-24 max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t.performance}
          </h2>

          <div className="bg-zinc-950/40 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-10">

            <div className="flex items-end justify-between h-72 gap-2">

              {[20,28,24,36,30,50,60,40,55,48,65,72].map((h, i) => (
                <div key={i} className="flex flex-col items-center w-full">

                  <span className="text-yellow-400 text-xs mb-2">
                    {values[i]}%
                  </span>

                  <div
                    className="bg-yellow-500 w-full rounded-t-xl"
                    style={{ height: `${h}px` }}
                  />

                </div>
              ))}

            </div>

            <div className="flex justify-between text-zinc-500 text-xs mt-6">

              {months.map((m) => (
                <span key={m} className="flex-1 text-center">
                  {m}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* RISK */}
        <section className="px-6 py-20 max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t.risk}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-zinc-950/40 border border-yellow-500/10 rounded-3xl p-8">
              <h3 className="text-yellow-400 text-2xl font-bold mb-3">
                01
              </h3>
              <p className="text-zinc-300">{t.risk1}</p>
            </div>

            <div className="bg-zinc-950/40 border border-yellow-500/10 rounded-3xl p-8">
              <h3 className="text-yellow-400 text-2xl font-bold mb-3">
                02
              </h3>
              <p className="text-zinc-300">{t.risk2}</p>
            </div>

            <div className="bg-zinc-950/40 border border-yellow-500/10 rounded-3xl p-8">
              <h3 className="text-yellow-400 text-2xl font-bold mb-3">
                03
              </h3>
              <p className="text-zinc-300">{t.risk3}</p>
            </div>

            <div className="bg-zinc-950/40 border border-yellow-500/10 rounded-3xl p-8">
              <h3 className="text-yellow-400 text-2xl font-bold mb-3">
                04
              </h3>
              <p className="text-zinc-300">{t.risk4}</p>
            </div>

          </div>

        </section>

        {/* STRATEGY */}
        <section className="px-6 py-24 max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            {t.strategy}
          </h2>

          <p className="text-zinc-300 text-lg">
            {t.strategyDesc}
          </p>

        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 py-24 max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            {t.contactTitle}
          </h2>

         <form
  onSubmit={handleSubmit}
  className="bg-zinc-950/40 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-8 max-w-2xl mx-auto"
>

  <input
    className="w-full mb-4 p-4 bg-black border border-zinc-800 rounded-xl"
    placeholder={t.fullname}
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />

  <input
    type="email"
    className="w-full mb-4 p-4 bg-black border border-zinc-800 rounded-xl"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

  <textarea
    className="w-full mb-6 p-4 bg-black border border-zinc-800 rounded-xl h-32"
    placeholder={t.message}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  />

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold py-4 rounded-xl"
  >
    {t.send}
  </button>

</form>

        </section>

        {/* FOOTER */}
        <footer className="text-center text-zinc-600 py-10 text-sm">
          © {new Date().getFullYear()} PGOLDTRADING. All rights reserved.
        </footer>

      </div>

    </main>
  )
}