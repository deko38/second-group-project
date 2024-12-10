import Crew from "../Main/Crew.jsx";
import NavBar from "../Main/Nav-bar.jsx";
import classes from "../../modules/Crew-body.module.scss";

const CrewBody =()=>{
    return (
        <div className={classes["wrapper"]}>

            <NavBar></NavBar>
            <Crew></Crew>
        </div>

    )
}

export default CrewBody