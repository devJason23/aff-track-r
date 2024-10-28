import React from 'react';
import { User, DollarSign, Users, Link as LinkIcon } from 'lucide-react';
import { Affiliate } from '../../types';

interface AffiliateCardProps {
  affiliate: Affiliate;
  onStatusChange: (id: string, status: Affiliate['status']) => void;
}

export const AffiliateCard: React.FC<AffiliateCardProps> = ({ affiliate, onStatusChange }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    suspended: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="bg-blue-100 rounded-full p-3">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{affiliate.name}</h3>
            <p className="text-sm text-gray-500">{affiliate.email}</p>
          </div>
        </div>
        <select
          value={affiliate.status}
          onChange={(e) => onStatusChange(affiliate.id, e.target.value as Affiliate['status'])}
          className={`rounded-full px-3 py-1 text-sm font-medium ${statusColors[affiliate.status]}`}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 text-gray-400" />
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-500">Earnings</p>
            <p className="text-lg font-semibold text-gray-900">
              ${affiliate.totalEarnings.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Users className="h-5 w-5 text-gray-400" />
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-500">Tier</p>
            <p className="text-lg font-semibold text-gray-900">{affiliate.tier}</p>
          </div>
        </div>
        <div className="flex items-center">
          <LinkIcon className="h-5 w-5 text-gray-400" />
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-500">Referral Code</p>
            <p className="text-lg font-semibold text-gray-900">{affiliate.referralCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};