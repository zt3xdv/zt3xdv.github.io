import { useEffect, useState } from "preact/hooks";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/zt3xdv/repos?per_page=100", {
      signal: controller.signal,
    }).then((response) => {
      if (!response.ok) throw new Error("Could not load repositories");
      return response.json() as Promise<GitHubRepo[]>;
    }).then((data) => {
      const sorted = data.filter((repo) => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
      setRepos(sorted);
    }).catch((error: unknown) => {
      if (error instanceof Error && error.name !== "AbortError") {
        setFailed(true);
      }
    }).finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <div>
          <h2>Projects</h2>
        </div>
        <a className="text-link" href="https://github.com/zt3xdv?tab=repositories">
          All on my GitHub
        </a>
      </div>

      {loading && <p className="projects-message">Loading projects pls wait</p>}

      {!loading && (failed || repos.length == 0) && (
        <p className="projects-message">
          Couldn't load repositories right now.{" "}
          <a href="https://github.com/zt3xdv" target="_blank" rel="noreferrer">
            Visit my GitHub profile
          </a>
        </p>
      )}

      {!loading && repos.length > 0 && (
        <div className="projects-grid">
          {repos.map((repo, index) => (
            <a className="project-card" href={repo.html_url} key={repo.id}>
              <div className="project-card-top">
                <span className="project-index">repo #{index + 1}</span>
                <span className="project-view">view on GitHub</span>
              </div>

              <h3>{repo.name.replaceAll("-", " ")}</h3>
              <p className="project-description">
                {repo.description || "A public GitHub repo."}
              </p>

              <div className="project-meta">
                <span>
                  in {repo.language || "some language"}
                </span>
                <span>{repo.stargazers_count} star{repo.stargazers_count > 1 || repo.stargazers_count == 0 ? "s" : ""}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
