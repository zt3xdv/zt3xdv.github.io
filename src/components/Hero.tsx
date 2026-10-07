export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <h1>
          Hi, I'm <span>zt3xdv</span>
          <br />
          I build things
          <br />
          mostly for the web
        </h1>

        <p className="hero-description">
          These may be not useful, but what's wrong with that ¯\_(ツ)_/¯
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects
          </a>
          <a className="button button-secondary" href="https://github.com/zt3xdv">
            My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
