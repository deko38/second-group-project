import Destination from "../Main/Destination.jsx";
import NavBar from "../Main/Nav-bar.jsx";
import classes from "../../modules/Destination-body.module.scss";

const DestinationBody =()=>{
    return (
        <div className={classes["wrapper"]}>
            <NavBar></NavBar>
            <Destination></Destination>
        </div>


    )
}
export default DestinationBody