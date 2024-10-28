export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'affiliate' | 'salesperson' | 'customer';
  createdAt: string;
}

export interface Affiliate extends User {
  affiliateId: string;
  uplineId?: string;
  tier: number;
  totalEarnings: number;
  pendingCommissions: number;
  referralCode: string;
  status: 'active' | 'inactive' | 'suspended';
}

export interface Commission {
  id: string;
  affiliateId: string;
  amount: number;
  type: 'website_sale' | 'monthly_rental';
  status: 'pending' | 'paid';
  createdAt: string;
  paidAt?: string;
}