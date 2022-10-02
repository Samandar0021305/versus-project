import "./navbar.scss";

function Navbar(){
    return (
        <nav className="navbar container">
           <a href="#">
            <h2>VERSUS</h2>
           </a>

         <ul className="navbar__list">
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
         </ul>

        </nav>
    )
}


export default Navbar;