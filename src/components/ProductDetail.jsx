export default function ProductDetail({ product, onBack }) {
  return (
    <article className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-8 space-y-8 shadow-sm">
      <button
        type="button"
        aria-label="Back to product list"
        onClick={onBack}
        className="text-sm text-slate-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 rounded"
      >
        ← Back to product list
      </button>

      <div className="grid grid-cols-3 gap-6 items-center">
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-28 h-28 rounded-3xl bg-linear-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-2xl shadow-sm">
            {product.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{product.name}</h2>
          <p className="text-sm text-slate-600">Declared by {product.declaredBy}</p>
        </div>
      </div>

      <div className="bg-white/60 border border-white/60 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <Info label="Disclosure date" value={product.updatedAt} />
        <Info label="Evidence attached" value={product.evidenceCount} />
        <Info label="Current status" value={product.status} />
      </div>

      <div>
        <h3 className="font-medium mb-3">Version history</h3>
        <ul className="space-y-2 text-sm">
          {product.versions.map((v, i) => (
            <li key={i} className="flex justify-between border-b pb-2 last:border-none">
              <span>{v.date}</span>
              <span className="text-slate-600">{v.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/60 border border-white/60 border-l-4 border-l-sky-300 rounded-2xl p-4 text-sm text-slate-600">
        This page presents producer-declared information; it is not
        certification or verification.
      </div>
    </article>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
