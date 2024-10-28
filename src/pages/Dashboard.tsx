import React from 'react';
import { Wallet, Users, TrendingUp, DollarSign } from 'lucide-react';

const StatCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  isPositive: boolean;
}> = ({ title, value, icon, change, isPositive }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className="p-3 bg-blue-50 rounded-full">{icon}</div>
    </div>
    <div className="mt-4">
      <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '↑' : '↓'} {change}
      </span>
      <span className="text-sm text-gray-600"> vs last month</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Earnings"
          value="$24,500"
          icon={<Wallet className="h-6 w-6 text-blue-600" />}
          change="12%"
          isPositive={true}
        />
        <StatCard
          title="Team Members"
          value="24"
          icon={<Users className="h-6 w-6 text-blue-600" />}
          change="8%"
          isPositive={true}
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
          change="1.1%"
          isPositive={false}
        />
        <StatCard
          title="Pending Commissions"
          value="$4,200"
          icon={<DollarSign className="h-6 w-6 text-blue-600" />}
          change="15%"
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* We'll add charts and detailed stats here in the next iteration */}
      </div>
    </div>
  );
};

export default Dashboard;