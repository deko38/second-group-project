

import Moon from "../Planets/Moon.jsx";
import {useState} from "react";
import Mars from "../Planets/Mars.jsx";
import Europa from "../Planets/Europa.jsx";
import Titan from "../Planets/Titan.jsx";
import classes from "../../modules/Destinaton.module.scss";

const Destination = () =>{
    const [notClicked,setNotClicked] = useState(true);
    const [moon,setMoon]=useState(false)
    const [mars,setMars]=useState(false)
    const [titan,setTitan]=useState(false)
    const [europa,setEuropa]=useState(false)
    const moonHandler =() =>{
        setMoon(true)
        setNotClicked(false)
        setEuropa(false)
        setTitan(false)
        setMars(false)
    }
    const marsHandler =() =>{
        setMars(true)
        setNotClicked(false)
        setTitan(false)
        setMoon(false)
        setEuropa(false)
    }
    const europaHandler =() =>{
        setEuropa(true)
        setNotClicked(false)
        setTitan(false)
        setMoon(false)
        setMars(false)
    }
    const titanHandler =() =>{
        setTitan(true)
        setNotClicked(false)
        setEuropa(false)
        setMars(false)
        setMoon(false)
    }


    return (
        <div className={classes["central"]}>

           <div className={classes['top-text']}>

                <h2 className={classes['dif-text']}>01</h2>
        <h2>PICK YOUR DESTINATION</h2>

           </div>


            <div className={classes['buttons']}>

                <div className={classes['button-text']}>

                    <div className={classes['button-each-parent']}>

                        <button className={classes['button-inside']}  onClick={moonHandler}>
                            <h3 className={classes['button-inside-text']}>moon</h3>
                        </button>

                    </div>

                    <div className={classes['button-each-parent']}>

                        <button className={classes['button-inside']} onClick={marsHandler}>
                            <h3 className={classes['button-inside-text']}>mars</h3>
                        </button>

                    </div>

                    <div className={classes['button-each-parent']}>

                        <button className={classes['button-inside']} onClick={europaHandler}>
                            <h3 className={classes['button-inside-text']}>europa</h3>
                        </button>

                    </div>

                    <div className={classes['button-each-parent']}>

                        <button className={classes['button-inside']} onClick={titanHandler}>
                            <h3 className={classes['button-inside-text']}>titan</h3>
                        </button>


                    </div>


                </div>

                {notClicked && <Moon></Moon>}

                {moon &&
                    <Moon>
                    </Moon>
                }
                {mars &&
                    <Mars>
                    </Mars>
                }
                {europa &&
                    <Europa>
                    </Europa>
                }
                {titan &&
                    <Titan>
                    </Titan>
                }
            </div>
            {/*buttons end*/}


        </div>

    )


}
export default Destination