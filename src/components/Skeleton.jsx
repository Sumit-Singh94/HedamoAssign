export default function Skeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-6 bg-sky-200/70 rounded-xl w-1/4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-28 bg-white/60 border border-white/60 rounded-2xl" />
        <div className="h-28 bg-white/60 border border-white/60 rounded-2xl" />
      </div>
    </div>
  );
}
