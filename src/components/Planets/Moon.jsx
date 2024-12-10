import classes from "../../modules/Destinaton.module.scss";
import moon from "../../assets/image-moon.png";


const Moon = ()=>{
    return(
        <>
            <div className={classes['main-wrapper']}>
                <div className={classes['img-wrapper']}>
                    <img src={moon} alt={""}/>
                </div>

                <div className={classes['text-wrapper']}>

                    <h1>MOON</h1>

                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away
                        to help regain perspective and come back refreshed.
                        While you’re there, take in some history by visiting the Luna 2 and Apollo
                        11 landing sites.
                    </p>
                    <hr/>

                    <div className={classes["distant-time"]}>
                        <div className={classes['distance']}>
                            <h4>average distance</h4>
                            <h2>384,400 km</h2>
                        </div>

                        <div className={classes['time']}>
                            <h4> average time</h4>
                            <h2>3 DAYS</h2>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Moon