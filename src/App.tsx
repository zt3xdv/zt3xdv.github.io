import { useEffect, useState } from 'react';
import { Spinner, ProfileSidebar, ReadmeContent, Footer } from './components';
import { readmeUrl, githubApi, getCache, setCache } from './constants';

export interface GitHubProfile {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
}

export function App() {
  const [content, setContent] = useState<string>('');
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const cachedReadme = getCache<string>('zt3xdv-readme');
    const cachedProfile = getCache<GitHubProfile>('zt3xdv-profile');

    if (cachedReadme && cachedProfile) {
      if (mounted) {
        setContent(cachedReadme);
        setProfile(cachedProfile);
        setLoading(false);
      }
      return;
    }

    Promise.all([
      fetch(readmeUrl).then(r => r.ok ? r.text() : Promise.reject(new Error(`README HTTP ${r.status}`))),
      fetch(githubApi).then(r => r.ok ? r.json() : Promise.reject(new Error(`Profile HTTP ${r.status}`)))
    ])
      .then(([readmeText, profileData]) => {
        if (mounted) {
          setContent(readmeText);
          setProfile(profileData);
          setCache('zt3xdv-readme', readmeText);
          setCache('zt3xdv-profile', profileData);
        }
      })
      .catch((err) => {
        if (mounted) setError(err.message);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  if (error) {
    return <div className="readme-viewer readme-error">Error: {error}</div>;
  }

  if (loading) {
    return <div className="readme-viewer"><Spinner /></div>;
  }

  return (
    <div className="app-container">
      <header className="profile-header">
        <div className="profile-layout">
          {profile && <ProfileSidebar profile={profile} />}
          <ReadmeContent content={content} />
        </div>
      </header>
      <Footer />
    </div>
  );
}
