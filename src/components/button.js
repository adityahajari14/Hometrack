export default function Button({ label }) {
  return (
    <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 text-xl">
      {label}
    </button>
  );
}