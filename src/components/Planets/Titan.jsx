
import classes from "../../modules/Destinaton.module.scss";
import titan from "../../assets/image-titan.png"

const Titan = ()=>{
    return(
        <>
            <div className={classes['main-wrapper']}>
                <div className={classes['img-wrapper']}>
                    <img src={titan} alt={""}/>
                </div>
                <div className={classes['text-wrapper']}>



                    <h1>Titan</h1>

                    <p>
                        The only moon known to have a dense atmosphere other than Earth,
                        Titan is a home away from home (just a few hundred
                        degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </p>
                    <hr/>

                    <div className={classes["distant-time"]}>
                        <div className={classes['distance']}>
                            <h4>average distance</h4>
                            <h2>1.6 km</h2>
                        </div>

                        <div className={classes['time']}>
                            <h4> average time</h4>
                            <h2>7 years</h2>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Titan