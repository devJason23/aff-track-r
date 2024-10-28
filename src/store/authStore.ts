import { create } from 'zustand';
import auth0 from 'auth0-js';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
  handleAuthentication: () => Promise<void>;
}

const auth = new auth0.WebAuth({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientID: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirectUri: window.location.origin,
  responseType: 'token id_token',
  scope: 'openid profile email'
});

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: () => {
    auth.authorize();
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
    auth.logout({
      returnTo: window.location.origin
    });
  },

  handleAuthentication: async () => {
    return new Promise((resolve, reject) => {
      auth.parseHash((err, authResult) => {
        if (err) {
          reject(err);
          return;
        }

        if (authResult && authResult.accessToken && authResult.idToken) {
          set({
            isAuthenticated: true,
            user: {
              id: authResult.idTokenPayload.sub,
              email: authResult.idTokenPayload.email,
              name: authResult.idTokenPayload.name,
              role: 'affiliate',
              createdAt: new Date().toISOString()
            },
            isLoading: false
          });
          resolve();
        }
      });
    });
  }
}));