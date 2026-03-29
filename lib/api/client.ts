import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use(async (config) => {
  const session = await getSession() as any;
  if (session?.accessToken) config.headers.Authorization = `Bearer ${session.accessToken}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) await signOut({ callbackUrl: '/login' });
    if (error.response?.status === 402) window.location.href = 'https://nmsolution.ca/pricing';
    return Promise.reject(error);
  }
);
