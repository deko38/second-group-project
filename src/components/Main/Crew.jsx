
import classes from "../../modules/Crew.module.scss";
import {useState} from "react";
import Douglas from "../Crew-members/Douglas.jsx";
import Mark from "../Crew-members/Mark.jsx";
import Anoushen from "../Crew-members/Anoushen.jsx";
import Victor from "../Crew-members/Victor.jsx";


const Crew = () =>{
    const [notClicked,setNotClicked] = useState(true);
    const [douglas,setDouglas]=useState(false)
    const [mark,setMark]=useState(false)
    const [victor,setVictor]=useState(false)
    const [anoushen,setAnoushen]=useState(false)
    const douglasHandler =() =>{
        setDouglas(true)
        setNotClicked(false)
        setMark(false)
        setVictor(false)
        setAnoushen(false)
    }
    const markHandler =() =>{
        setMark(true)
        setNotClicked(false)
        setDouglas(false)
        setVictor(false)
        setAnoushen(false)
    }
    const anoushenHandler =() =>{
        setAnoushen(true)
        setNotClicked(false)
        setVictor(false)
        setMark(false)
        setDouglas(false)
    }
    const victorHandler =() =>{
        setVictor(true)
        setNotClicked(false)
        setMark(false)
        setDouglas(false)
        setAnoushen(false)
    }

    return (
        <>
            <div className={classes['top-text']}>

                <h2 className={classes['dif-text']}>02</h2>
                <h2>MEET OUR CREW</h2>

            </div>


            <div className={classes['buttons']}>
                {/*<div className={classes['buttons-wrapper']}>*/}
                {/*    <button className={classes['button-inside']} onClick={douglasHandler}>*/}
                {/*        </button>*/}
                {/*        <button className={classes['button-inside']} onClick={markHandler}>*/}
                {/*        </button>*/}
                {/*        <button className={classes['button-inside']} onClick={anoushenHandler}>*/}
                {/*        </button>*/}
                {/*        <button className={classes['button-inside']} onClick={victorHandler}>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {notClicked && <Douglas></Douglas>}

                {douglas &&
                    <Douglas>
                    </Douglas>
                }
                {mark &&
                    <Mark>
                    </Mark>
                }
                {anoushen &&
                    <Anoushen>
                    </Anoushen>
                }
                {victor &&
                    <Victor>
                    </Victor>
                }

                <div className={classes['buttons-wrapper']}>
                    <button className={classes['button-inside']} onClick={douglasHandler}>
                    </button>
                    <button className={classes['button-inside']} onClick={markHandler}>
                    </button>
                    <button className={classes['button-inside']} onClick={anoushenHandler}>
                    </button>
                    <button className={classes['button-inside']} onClick={victorHandler}>
                    </button>
                </div>


            </div>
        </>
    )
}
export default Crew