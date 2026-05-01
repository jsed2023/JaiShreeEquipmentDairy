export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-56 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse"
        />
      ))}
    </div>
  );
}
