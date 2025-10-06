export default function Pricing() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Pricing</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-lg border border-neutral-800 p-6 bg-neutral-900/30">
          <h3 className="font-semibold mb-2">Free</h3>
          <ul className="text-neutral-400 text-sm space-y-1 list-disc list-inside">
            <li>Access to research highlights</li>
            <li>Education articles</li>
            <li>Community updates</li>
          </ul>
        </div>
        <div className="rounded-lg border border-neutral-800 p-6 bg-neutral-900/30">
          <h3 className="font-semibold mb-2">Premium</h3>
          <ul className="text-neutral-400 text-sm space-y-1 list-disc list-inside">
            <li>Real-time signals</li>
            <li>Deeper analysis and models</li>
            <li>Priority support</li>
          </ul>
          <a href="/account" className="mt-4 inline-block px-5 py-2.5 rounded-md bg-brand text-black font-medium hover:bg-brand-dark">Subscribe</a>
        </div>
      </div>
    </div>
  )
}


