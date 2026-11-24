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
    </aside>
  );
}