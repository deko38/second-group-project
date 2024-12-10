import classes from "../../modules/Crew.module.scss"
import  mark from "../../assets/crew/image-mark-shuttleworth.png"
import Hurley from "../../assets/crew/image-douglas-hurley.png";

const Mark =()=>{
    return (
        <div className={classes["main-wrapper"]}>
            <div className={classes["text-wrapper"]}>
                <h2>Commander </h2>
                <h2>MARK SHUTTLEWORTH</h2>
                <p>
                    Mark Richard Shuttleworth is the founder and CEO of Canonical,
                    the company behind the Linux-based Ubuntu operating system.
                    Shuttleworth became the first South African to travel to space as a space tourist.
                </p>
            </div>
            <div className={classes["img-wrapper"]}>
                <figure>
                    <img src={mark}></img>
                </figure>
            </div>
        </div>
    )
}
export default Mark