export default function Button({ label, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded text-sm sm:text-base lg:text-base font-dm-sans min-h-11 flex items-center justify-center whitespace-nowrap"
    >
      {label}
    </button>
  );
}