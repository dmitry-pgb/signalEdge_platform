import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800">
        <nav className="container-page flex h-16 items-center justify-between">
          <a href="/" className="text-lg font-semibold">SignalEdge</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-brand">Home</a>
            <a href="/research" className="hover:text-brand">Research</a>
            <a href="/signals" className="hover:text-brand">Signals</a>
            <a href="/education" className="hover:text-brand">Education</a>
            <a href="/pricing" className="hover:text-brand">Pricing</a>
            <a href="/account" className="px-3 py-1.5 rounded-md bg-brand text-black font-medium hover:bg-brand-dark">Account</a>
          </div>
        </nav>
      </header>

      <main className="container-page py-10">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-800">
        <div className="container-page py-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} SignalEdge – Research, Education & Automated Crypto Insights. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
