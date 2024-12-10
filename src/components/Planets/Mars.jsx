
import classes from "../../modules/Destinaton.module.scss";
import mars from '../../assets/image-mars.png'

const Mars = ()=>{
    return(
        <>
            <div className={classes['main-wrapper']}>
                <div className={classes['img-wrapper']}>
                    <img src={mars} alt={""}/>
                </div>
                {/*text part start*/}
                <div className={classes['text-wrapper']}>


                    <h1>Mars</h1>

                    <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary
                        mountain in our solar system. It’s two and a
                        half times the size of Everest!
                    </p>
                    <hr/>

                    <div className={classes["distant-time"]}>
                        <div className={classes['distance']}>
                            <h4>average distance</h4>
                            <h2>225 MIL. km</h2>
                        </div>

                        <div className={classes['time']}>
                            <h4> average time</h4>
                            <h2>9 MONTHS</h2>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Mars