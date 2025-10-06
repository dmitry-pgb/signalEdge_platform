export default function Research() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Research</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((id) => (
          <article key={id} className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-5">
            <h3 className="font-semibold mb-2">Article Title {id}</h3>
            <p className="text-neutral-400 text-sm">A short abstract of the research article. This is placeholder copy.</p>
            <a href="#" className="mt-3 inline-block text-brand hover:text-brand-dark">Read more →</a>
          </article>
        ))}
      </div>
    </div>
  )
}


