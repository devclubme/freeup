const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`sidebar ${menuOpen ? "active" : ""}`}>
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      <ul className="sidebarList">
        <div className="imgWrapper">
          <img src="/assets/freeup-logo.png" alt="" className="logo" />
        </div>

        <a href="#period">
          <li className="item" onClick={() => setMenuOpen(false)}>
            <span>KADA SE FREEUP ODRŽAVA</span>
          </li>
        </a>

        <a href="#mentor">
          <li className="item" onClick={() => setMenuOpen(false)}>
            <span>MENTORI</span>
          </li>
        </a>

        <a href="#reward">
          <li className="item" onClick={() => setMenuOpen(false)}>
            <span>NAGRADE</span>
          </li>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdeR-GEMHpwMD8E0W84NseWtN_AOCReJmbp_i3jUrTeHwmQPg/viewform"
          target="_blank"
        >
          <button className="register" onClick={() => setMenuOpen(false)}>
            Prijavi se
          </button>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
