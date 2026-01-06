import { useEffect, useMemo, useState } from "react";
import { products as DATA } from "./Data/products";
import ProductDetail from "./components/ProductDetail";
import Skeleton from "./components/Skeleton";
import EmptyState from "./components/EmptyState";

const STATUS_STYLES = {
  Draft: "bg-yellow-200 text-yellow-900",
  Submitted: "bg-blue-200 text-blue-900",
  Published: "bg-green-200 text-green-900"
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const products = useMemo(() => {
    let list = DATA.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (status !== "All") list = list.filter(p => p.status === status);

    list.sort((a, b) =>
      sort === "name"
        ? a.name.localeCompare(b.name)
        : new Date(b.updatedAt) - new Date(a.updatedAt)
    );

    return list;
  }, [query, status, sort]);

  const visibleProducts = products.slice(0, 5);

  return (
    <main className="min-h-screen bg-transparent text-slate-900 px-6 sm:px-8 py-10">
      <section className="max-w-6xl mx-auto space-y-8">
        <header className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                Product Disclosures
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Structured producer-declared product information
              </p>
            </div>
            <div className="text-xs text-slate-500">Updated daily · <strong className="text-slate-900">Verified</strong></div>
          </div>
        </header>

        {!selected && (
          <>
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-4 flex flex-wrap gap-3 shadow-sm">
              <input
                type="search"
                aria-label="Search products"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by product name"
                className="flex-1 min-w-60 rounded-xl px-4 py-2.5 text-sm bg-white/80
                           border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />

              <select
                aria-label="Filter by status"
                value={status}
                onChange={e => setStatus(e.target.value)}
                className="rounded-xl px-4 py-2.5 text-sm bg-white/80 border border-slate-200"
              >
                <option>All</option>
                <option>Draft</option>
                <option>Submitted</option>
                <option>Published</option>
              </select>

              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="rounded-xl px-4 py-2.5 text-sm bg-white/80 border border-slate-200"
              >
                <option value="date">Sort by date</option>
                <option value="name">Sort by name</option>
              </select>
            </div>

            {loading && <Skeleton />}
            {!loading && products.length === 0 && <EmptyState />}

            {!loading && products.length > 0 && (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-600">Showing <strong className="text-slate-900">{visibleProducts.length}</strong> products</p>
                  <div className="text-xs text-slate-500">Grid view</div>
                </div>

                <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {visibleProducts.map(p => (
                    <li key={p.id} role="listitem">
                      <button
                        type="button"
                        aria-label={`Open details for ${p.name}`}
                        onClick={() => setSelected(p)}
                        className="w-full bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-sm
                                   transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 text-left"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-lg">
                            {p.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h2 className="font-semibold text-slate-900">{p.name}</h2>
                              <span className={`text-xs px-3 py-1 rounded-full ${STATUS_STYLES[p.status]}`}>{p.status}</span>
                            </div>

                            <p className="text-sm text-slate-600 mt-2">
                              <span className="inline-block bg-slate-900/5 px-2 py-1 rounded-lg text-xs">{p.category}</span>
                              <span className="ml-3 text-xs">{p.producer}</span>
                            </p>

                            <p className="mt-4 text-xs text-slate-500">Last updated {p.updatedAt}</p>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}

        {selected && (
          <ProductDetail
            product={selected}
            onBack={() => setSelected(null)}
          />
        )}
      </section>
    </main>
  );
}
