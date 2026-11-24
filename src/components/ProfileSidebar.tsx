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
    </aside>
  );
}