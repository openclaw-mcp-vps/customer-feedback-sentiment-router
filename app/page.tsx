export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Support Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route tickets by{" "}
          <span className="text-[#58a6ff]">emotional urgency</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SentimentRoute analyzes incoming support tickets with AI, instantly
          escalating high-emotion messages to your senior agents — before
          frustration turns into churn.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $18 / mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["AI Sentiment", "Scores every ticket in real-time"],
            ["Smart Routing", "Escalates angry tickets instantly"],
            ["Live Dashboard", "Track trends & agent performance"]
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5"
            >
              <p className="text-[#58a6ff] font-semibold mb-1">{title}</p>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">
            Pro Plan
          </p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited ticket analysis",
              "Webhook integration (Zendesk, Intercom, custom)",
              "AI sentiment scoring & routing rules",
              "Real-time sentiment dashboard",
              "Email alerts for critical tickets",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the sentiment routing work?",
              "Each incoming ticket is scored by an AI model for emotional intensity. Tickets above your configured threshold are automatically assigned to a senior agent queue via your support platform's API."
            ],
            [
              "Which support platforms are supported?",
              "SentimentRoute connects via webhooks and REST APIs, making it compatible with Zendesk, Intercom, Freshdesk, and any platform that supports outbound webhooks."
            ],
            [
              "Can I customize the routing thresholds?",
              "Yes. The dashboard lets you set sentiment score thresholds, define escalation rules per channel, and assign specific senior agents or teams to receive escalated tickets."
            ]
          ].map(([q, a]) => (
            <div
              key={q}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5"
            >
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} SentimentRoute. All rights reserved.
      </footer>
    </main>
  );
}
