

import HomeBody from "./components/body/Home-body.jsx";
import DestinationBody from "./components/body/Destination-body.jsx";
import CrewBody from "./components/body/Crew-body.jsx";
import TechnologyBody from "./components/body/Technology-body.jsx";
import classes from "./modules/App.module.scss";

const  App =(props) => {
  console.log(window.location.pathname);

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = HomeBody
          break;
    case "/home":
      Component = HomeBody

          break;
    case "/destination":
      Component = DestinationBody
        break;
    case "/technology":
      Component = TechnologyBody
      break;

    case "/crew":
      Component = CrewBody
      break;
  }

  return (
    <div className={classes["wrapper"]}>
       <Component></Component>
    </div>
  )
}

export default App
