import { skills } from "../data.ts";

export default function Skills() {
  const featured = skills.filter((skill) => skill.featured);
  const others = skills.filter((skill) => !skill.featured);

  return (
    <section className="section container" id="skills">
      <div className="section-heading">
        <h2>My stack</h2>
        <p className="section-note">Technologies and tools I use</p>
      </div>

      <div className="skills-grid skills-grid-compact">
        {featured.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
              alt=""
              loading="lazy"
              width="32"
              height="32"
            />
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          </div>
        ))}
      </div>

      {others.length > 0 && (
        <details className="all-skills">
          <summary>View all of them ({others.length} more)</summary>
          <div className="skills-grid skills-grid-compact">
            {others.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img
                  src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
