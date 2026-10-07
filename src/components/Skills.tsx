import { skills } from "../data.ts";

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading">
        <div>
          <h2>My stack</h2>
        </div>
        <p className="section-note">
          Technologies and tools i use
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} loading="lazy" width="38" height="38"/>
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
