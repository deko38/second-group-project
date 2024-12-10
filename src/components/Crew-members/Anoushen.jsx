import classes from "../../modules/Crew.module.scss"
import anoushen from "../../assets/crew/image-anousheh-ansari.png";
import Hurley from "../../assets/crew/image-douglas-hurley.png";

const Anoushen =()=>{
    return (
        <div className={classes["main-wrapper"]}>
            <div className={classes["text-wrapper"]}>
                <h2>Commander </h2>
                <h1>Anousheh Ansari</h1>
                <p>
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                    Ansari was the fourth self-funded space tourist,
                    the first self-funded woman to fly to the ISS, and the first Iranian in space.
                </p>
            </div>
            <div className={classes["img-wrapper"]}>
                <figure>
                    <img src={anoushen}></img>
                </figure>
            </div>
        </div>
    )
}
export default Anoushen