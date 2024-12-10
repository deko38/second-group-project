import classes from "../../modules/Crew.module.scss";
import Hurley from "../../assets/crew/image-douglas-hurley.png";
const Douglas = () =>{
    return (
        <div className={classes["main-wrapper"]}>
            <div className={classes["text-wrapper"]}>
                <h2>Commander </h2>
                <h1>Douglas Hurley</h1>
                <p>
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA
                    astronaut.
                    He launched into space for the third time as commander of Crew Dragon Demo-2.
                </p>
            </div>
            <div className={classes["img-wrapper"]}>
                <figure className={classes["img-wrapper"]}>
                    <img src={Hurley} ></img>
                </figure>
            </div>




        </div>

    )
}
export default Douglas