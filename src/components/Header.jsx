import logo from "/troll-face.png";
export default function Header() {
  return (
    <nav class="navbar header">
      <div class="container-fluid">
        <img src={logo} alt="Logo" width="35" height="35" class="header-img" />
        <h1 className="header-title">Meme Generator</h1>
        <h3 className="header-project">New React Project</h3>
      </div>
    </nav>
  );
}
