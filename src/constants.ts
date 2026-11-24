export const readmeUrl = 'https://raw.githubusercontent.com/zt3xdv/zt3xdv/main/README.md';
export const githubApi = 'https://api.github.com/users/zt3xdv';
export const githubRawBase = 'https://raw.githubusercontent.com/zt3xdv/zt3xdv/main/';
export const cacheTtl = 60 * 60 * 1000; // 1 hour

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export function getCache<T>(key: string): T | null {
  try {
    const entry = localStorage.getItem(key);
    if (!entry) return null;
    const { data, timestamp } = JSON.parse(entry) as CacheEntry<T>;
    if (Date.now() - timestamp > cacheTtl) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function setCache<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // ignore quota errors
  }
}
