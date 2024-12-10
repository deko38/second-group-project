
import classes from "../../modules/Destinaton.module.scss";
import europa from '../../assets/image-europa.png'


const Europa = ()=>{
    return(
        <>
            <div className={classes['main-wrapper']}>
                <div className={classes['img-wrapper']}>
                    <img src={europa} alt={""}/>
                </div>
                {/*text part start*/}
                <div className={classes['text-wrapper']}>



                    <h1>Europa</h1>

                    <p>The smallest of the four Galilean moons orbiting Jupiter, Europa
                        is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating,
                        curling, hockey, or simple relaxation in your snug wintery cabin.
                    </p>
                    <hr/>

                    <div className={classes["distant-time"]}>
                        <div className={classes['distance']}>
                            <h4>average distance</h4>
                            <h2>628 MIL. km</h2>
                        </div>

                        <div className={classes['time']}>
                            <h4> average time</h4>
                            <h2>3 years</h2>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Europa