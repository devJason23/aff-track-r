import React, { useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import { useTeamStore } from '../store/teamStore';
import { AffiliateCard } from '../components/Team/AffiliateCard';

const Team: React.FC = () => {
  const { affiliates, isLoading, error, fetchAffiliates, updateAffiliateStatus } = useTeamStore();

  useEffect(() => {
    fetchAffiliates();
  }, [fetchAffiliates]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-800 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Team Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Affiliate
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search affiliates..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {affiliates.map((affiliate) => (
          <AffiliateCard
            key={affiliate.id}
            affiliate={affiliate}
            onStatusChange={updateAffiliateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;