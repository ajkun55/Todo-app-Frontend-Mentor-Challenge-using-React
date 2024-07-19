import iconMoon from "/images/icon-moon.svg";
import iconSun from "/images/icon-sun.svg";

function Header({ isDark, setIsDark }) {
  return (
    <div className="header">
      <h1>TODO</h1>
      <button className="toggleTheme" onClick={() => setIsDark(!isDark)}>
        <img src={isDark ? iconSun : iconMoon} alt="" />
      </button>
    </div>
  );
}

export default Header;
