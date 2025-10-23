export default function Button({ label }) {
  return (
    <button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-2 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded text-xs sm:text-sm lg:text-lg font-dm-sans min-h-[44px] flex items-center justify-center whitespace-nowrap">
      {label}
    </button>
  );
}