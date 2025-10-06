export default function Education() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-lg border border-neutral-800 p-6 bg-neutral-900/30">
          <h3 className="font-semibold mb-2">Foundations</h3>
          <p className="text-neutral-400 text-sm">Market structure, risk, position sizing, and execution discipline.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 p-6 bg-neutral-900/30">
          <h3 className="font-semibold mb-2">Strategies</h3>
          <p className="text-neutral-400 text-sm">Backtested entry/exit logic and parameter tuning for BTC acquisition.</p>
        </div>
      </div>
    </div>
  )
}


