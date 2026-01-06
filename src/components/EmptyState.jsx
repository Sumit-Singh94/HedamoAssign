export default function EmptyState() {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-8 text-sm text-slate-600 flex items-center gap-4 shadow-sm">
      <div className="text-3xl">🗂️</div>
      <div>No products match the current filters. Try clearing filters or the search to browse all products.</div>
    </div>
  );
}
