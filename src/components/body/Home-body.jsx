import Home from "../Main/Home.jsx";
import NavBar from "../Main/Nav-bar.jsx";
import classes from "../../modules/Home-body.module.scss";

const HomeBody =()=>{
    return(
        <div className={classes["wrapper"]}>
            {/*<img src={bg}></img>*/}
            <NavBar></NavBar>
            <Home></Home>
        </div>

    )
}
export default HomeBody;