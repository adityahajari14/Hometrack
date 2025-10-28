export default function Button({ label }) {
  return (
    <button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-2.5 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded text-xs sm:text-sm lg:text-base font-dm-sans min-h-10 sm:min-h-11 flex items-center justify-center whitespace-nowrap">
      {label}
    </button>
  );
}