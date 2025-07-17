// src/components/InteractiveAccountList.jsx
import React, { useState, useMemo } from 'react';
import AccountTypeCard from './AccountTypeCard.astro'; // You'd pass data, not the component directly

export default function InteractiveAccountList({ accounts: initialAccounts }) {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const filteredAndSortedAccounts = useMemo(() => {
    let filtered = initialAccounts.filter(account => {
      if (filterType !== 'all' && account.type !== filterType) {
        return false;
      }
      if (searchTerm && !account.title.toLowerCase().includes(searchTerm.toLowerCase()) && !account.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      // Add more sorting logic here (e.g., by spreads, if numerical)
      return 0;
    });
  }, [initialAccounts, filterType, searchTerm, sortBy]);

  return (
    <div className="space-y-8">
      {/* Filter & Sort Controls */}
      <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="filterType" className="block text-sm font-medium text-gray-700">Filter by Type</label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="all">All Types</option>
            <option value="stp">STP</option>
            <option value="ecn">ECN</option>
            <option value="dma">DMA</option>
          </select>
        </div>
        <div>
          <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700">Search</label>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search accounts..."
            className="mt-1 block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700">Sort By</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="title">Name</option>
            {/* Add more sort options from your Payload fields */}
          </select>
        </div>
      </div>

      {/* Display Filtered/Sorted Cards (this is where Astro.props.is:inline-astro-component comes in) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedAccounts.length > 0 ? (
          filteredAndSortedAccounts.map((account) => (
            // Astro components are not directly renderable within React.
            // You'd need to create a simple wrapper or re-implement the card logic in React.
            // For now, let's assume AccountTypeCard has a JS version or pass minimal data.
            // In a real Astro Island, you'd pass the data back to an Astro component.
            <a key={account.id} href={`/account-types/${account.id}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">{account.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColorClass(account.type)}`}>
                        {account.type.toUpperCase()}
                    </span>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{account.shortDescription}</p>
                <div className="mt-6 text-center">
                    <span className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">
                        Learn More
                    </span>
                </div>
            </a>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No accounts match your criteria.</p>
        )}
      </div>
    </div>
  );
}

// Helper (normally imported or part of a shared utility)
const getTypeColorClass = (type) => {
    switch (type) {
      case 'stp': return 'bg-blue-100 text-blue-800';
      case 'ecn': return 'bg-green-100 text-green-800';
      case 'dma': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };