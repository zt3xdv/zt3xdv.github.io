import type { GitHubProfile } from '../ReadmeViewer';

export function ProfileSidebar({ profile }: { profile: GitHubProfile }) {
  return (
    <aside className="profile-sidebar">
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
        <img
          src={`${profile.avatar_url}?size=120`}
          alt=""
          className="profile-avatar"
          width={96}
          height={96}
        />
        <div className="profile-names">
          <h1 className="profile-display-name">{profile.name || profile.login}</h1>
          <span className="profile-username">@{profile.login}</span>
        </div>
      </a>
      {profile.bio && <p className="profile-bio">{profile.bio}</p>}
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="profile-github">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        github.com/{profile.login}
      </a>
      <a href="https://discord.com/users/tsumugi_dev" target="_blank" rel="noopener noreferrer" className="profile-discord">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.675 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.007-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 0 7.397-.79 10.592-2.34a.077.077 0 0 1 .078.01c.12.098.246.2.373.293a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.04.107c.36.645.674 1.323.94 2.045a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.44-4.668-.334-9.34-3.063-13.66a.061.061 0 0 0-.031-.03z" />
          <path d="M17.5 14.5c-.8 1.4-2.3 2.4-4 2.4" />
          <path d="M6.5 14.5c-1.7 0-3.2-1-4-2.4" />
        </svg>
        tsumugi_dev
      </a>
    </aside>
  );
}