import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

export function setAuth(token: string, workspaceId: string) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  apiClient.defaults.headers.common['X-Workspace-Id'] = workspaceId;
}
