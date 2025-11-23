'use client'

import { useState } from 'react'

export default function PortfolioFilters({ onFilterChange }) {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    onFilterChange({ 
      category: tab === 'all' ? null : tab,
      search: searchQuery 
    })
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    onFilterChange({ 
      category: activeTab === 'all' ? null : activeTab,
      search: value 
    })
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-5 md:gap-6 w-full max-w-[1376px]">
      {/* Filter Tabs */}
      <div className="bg-[#272727] rounded-sm flex items-center gap-2 sm:gap-3 p-1 w-full sm:w-auto">
        <button
          onClick={() => handleTabChange('all')}
          className={`flex-1 sm:flex-none px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 rounded text-sm sm:text-base md:text-lg font-medium transition-all touch-manipulation active:scale-95 min-h-11 ${
            activeTab === 'all'
              ? 'bg-[#f4f4f4] text-black'
              : 'text-white hover:bg-[#3a3a3a]'
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleTabChange('secondary')}
          className={`flex-1 sm:flex-none px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 rounded text-sm sm:text-base md:text-lg font-medium transition-all touch-manipulation active:scale-95 min-h-11 ${
            activeTab === 'secondary'
              ? 'bg-[#f4f4f4] text-black'
              : 'text-white hover:bg-[#3a3a3a]'
          }`}
        >
          Secondary
        </button>
        <button
          onClick={() => handleTabChange('off-plan')}
          className={`flex-1 sm:flex-none px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 rounded text-sm sm:text-base md:text-lg font-medium transition-all touch-manipulation active:scale-95 min-h-11 ${
            activeTab === 'off-plan'
              ? 'bg-[#f4f4f4] text-black'
              : 'text-white hover:bg-[#3a3a3a]'
          }`}
        >
          Off-Plan
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-full sm:max-w-[546px] bg-[#161616] border border-[#636363] rounded-lg px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 flex items-center gap-2 sm:gap-2.5 md:gap-3 min-h-11">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a Property by Name"
          className="flex-1 bg-transparent text-[#bebebe] text-sm sm:text-base md:text-lg outline-none placeholder:text-[#bebebe]"
        />
      </div>
    </div>
  )
}
