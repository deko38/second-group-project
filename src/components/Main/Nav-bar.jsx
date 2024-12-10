
import Logo from "../../assets/logo.svg";
import classes from "../../modules/Nav-bar.module.scss";

const NavBar =() =>{
    return (
        <div className={classes["wrapper"]}>
            <nav>
                <a href="/home" >

                    <figure>
                        <img src={Logo} className="logo" alt="logo"/>
                    </figure>

                </a>
              

                <div className={classes['line']}>
                    <hr/>
                </div>
                <ul>

                    <li>
                        <a href="/home">

                            <spam>00 HOME</spam>
                            <br/>

                        </a>
                    </li>
                    <li>
                        <a href="/destination">
                            <spam>01 DESTINATION</spam>
                        </a>
                    </li>
                    <li>
                        <a href="/crew">
                            <spam>02 CREW</spam>
                        </a>
                    </li>
                    <li>
                        <a href="/technology">
                            <spam>03 TECHNOLOGY</spam>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;