import classes from "../../modules/Crew.module.scss"
import victor from "../../assets/crew/image-victor-glover.png"


const Victor =()=>{
    return (
        <div className={classes["main-wrapper"]}>
            <div className={classes["text-wrapper"]}>
                <h2>Commander </h2>
                <h1>Victor Glover</h1>
                <p>
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the
                    International Space Station. Glover is a commander in the U.S. Navy where he pilots an
                    F/A-18.He was a
                    crew member of Expedition 64, and served as a station systems flight engineer.
                </p>
            </div>
            <div className={classes["img-wrapper"]}>
                <figure>
                    <img src={victor}></img>
                </figure>
            </div>



        </div>
    )
}

export default Victor;