import './globals.css';

const Navbar = () => {
    return (
    <nav className="testNav">
        <div className="grassL"></div>
        <ul className="navLinks">
            <li className ="navLink">
                <a href="">Home</a>
            </li>
            <li className ="navLink">
                <a href="">Schedule</a>
            </li>
            <li className ="navLink">
                <a href="">FAQ</a>
            </li>
            <li className ="navLink">
                <a href="">Hackathon</a>
            </li>
        </ul>
        <div className="grassR"></div>
    </nav>
    );
}

export default Navbar;