const Header = () => {
return (
<div className="main-nav">
    <div className="container">
<header className="group top-nav">
        <div className="navigation-toggle" data-tools="navigation-toggle" data-target="#navbar-1">
          <span className="logo">DRACO</span>
        </div>
        <nav id="navbar-1" className="navbar item-nav">
          <ul>
            <li className="active"><a href="#about">About</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
      </header>
</div>
    </div>
    );
};

export default Header;      