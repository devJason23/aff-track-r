import { create } from 'zustand';
import { Affiliate } from '../types';

interface TeamState {
  affiliates: Affiliate[];
  isLoading: boolean;
  error: string | null;
  fetchAffiliates: () => Promise<void>;
  addAffiliate: (affiliate: Omit<Affiliate, 'id' | 'createdAt'>) => Promise<void>;
  updateAffiliateStatus: (affiliateId: string, status: Affiliate['status']) => Promise<void>;
}

export const useTeamStore = create<TeamState>((set) => ({
  affiliates: [],
  isLoading: false,
  error: null,

  fetchAffiliates: async () => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Replace with actual DynamoDB call
      const mockAffiliates: Affiliate[] = [
        {
          id: '1',
          affiliateId: 'AFF001',
          email: 'john@example.com',
          name: 'John Doe',
          role: 'affiliate',
          tier: 1,
          totalEarnings: 12500,
          pendingCommissions: 2500,
          referralCode: 'JOHNDOE',
          status: 'active',
          createdAt: '2024-03-01T00:00:00Z'
        },
        // Add more mock data as needed
      ];
      set({ affiliates: mockAffiliates, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch affiliates', isLoading: false });
    }
  },

  addAffiliate: async (affiliate) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Replace with actual DynamoDB call
      const newAffiliate: Affiliate = {
        ...affiliate,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      set((state) => ({
        affiliates: [...state.affiliates, newAffiliate],
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Failed to add affiliate', isLoading: false });
    }
  },

  updateAffiliateStatus: async (affiliateId, status) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Replace with actual DynamoDB call
      set((state) => ({
        affiliates: state.affiliates.map((affiliate) =>
          affiliate.id === affiliateId ? { ...affiliate, status } : affiliate
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Failed to update affiliate status', isLoading: false });
    }
  }
}));