import logo from "../images/troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img className="header-img" src={logo} />
      <h2 className="header-title">Meme Generator</h2>
      <h3 className="header-project">New React Project</h3>
    </header>
  );
}
