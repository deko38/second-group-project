import Technology from "../Main/Technology.jsx";
import NavBar from "../Main/Nav-bar.jsx";
import classes from "../../modules/Technology-body.module.scss";

const TechnologyBody = () => {
    return (
        <div className={classes["wrapper"]}>
            <NavBar></NavBar>
            <Technology></Technology>
        </div>

    )
}

export default TechnologyBody