import {useState} from 'react'
import classes from "../../modules/Technology.module.scss"
import img from "../../assets/image-launch-vehicle-portrait.jpg"
import img2 from "../../assets/image-spaceport-portrait.jpg"
import img3 from "../../assets/image-space-capsule-portrait.jpg"

const Technology = () =>{

    const [firstClick, setFirstClick] = useState(true)
    const [secondClick, setSecondClick] = useState(false)
    const [thirdClick, setThirdClick] = useState(false)




    const firstSwitchHandler = () => {
        setFirstClick(true)
        setSecondClick(false)
        setThirdClick(false)
    }


    const  secondSwitchHandler = () => {
        setSecondClick(true)
        setFirstClick(false)
        setThirdClick(false)
    }

    const thirdSwitchHandler = () => {
        setThirdClick(true)
        setSecondClick(false)
        setFirstClick(false)
    }





    return (


        <div className={classes["technology"]}>

            <div className={classes['top-text']}>

                <h2 className={classes['dif-text']}>03</h2>
                <h2>SPACE LAUNCH 101</h2>

            </div>

            {/*<p className={classes['title']}>03 SPACE LAUNCH 101</p>*/}

            <div className={classes["discribe"]}>
                <div className={classes['first-title']}>
                    {firstClick ? <button onClick={firstSwitchHandler} className={classes['Btn']}>
                            1
                        </button> :
                        <button onClick={firstSwitchHandler} className={classes['Btn']}>

                            1
                        </button>}

                    {firstClick ? <div className={classes["resurse-1"]}>
                        <h4>THE TERMINOLOGY...</h4>
                        <h2>LAUNCH VEHICLE</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book.</p>
                        <img src={img} className={classes["img1"]}/>
                    </div> : null}
                </div>


                <br/>

                <div className={classes['second-title']}>
                    {secondClick ? <button onClick={secondSwitchHandler} className={classes['Btn']}>
                            2
                        </button> :
                        <button onClick={secondSwitchHandler} className={classes['Btn']}>2</button>}

                    {secondClick ? <div className={classes["resurse-2"]}>
                        <h4>THE TERMINOLOGY...</h4>
                        <h2>SPACEPORT</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchangede</p>
                        <img src={img2} className={classes["img1"]}/>
                    </div> : null}
                </div>

                <br/>

                <div className={classes['third-title']}>
                    {thirdClick ?
                        <button onClick={thirdSwitchHandler} className={classes['Btn']}>3</button> :
                        <button onClick={thirdSwitchHandler} className={classes['Btn']}>3</button>}

                    {thirdClick ? <div className={classes["resurse-3"]}>
                        <h4>THE TERMINOLOGY...</h4>
                        <h2>SPACE CAPSULE</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchangede publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum</p>
                        <img src={img3} className={classes["img1"]}/>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}
export default Technology