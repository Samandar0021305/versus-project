import Navbar from "../navbar/Navbar";
import "./header.scss";

function Header(){
    return(
        <header className="header">
            <Navbar />
           <div className="container header__box">
              <h2>We build beautiful web and mobile apps.</h2>
              <button>Get a quote</button>
           </div>

        </header>
    )
}

export default Header;