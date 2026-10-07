export default function Footer() {
  return (
    <footer className="footer container">
      <p>Designed and built by me obviously</p>
      <a href="#top" onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>
        Back to top? the page isn't that long..
      </a>
    </footer>
  );
}
