type Props = {
  name: string;
  role: string;
  location: string;
  message: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  role,
  location,
  message,
  rating,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      {/* Stars */}
      <div className="mb-3 flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`text-sm ${
              i <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <p className="mb-4 text-gray-700 italic">“{message}”</p>

      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
        <div className="text-xs text-gray-500">{location}</div>
      </div>
    </div>
  );
}
