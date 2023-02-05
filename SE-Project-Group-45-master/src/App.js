import "./styles.css";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import login from "./components/login";
import signup from "./components/signup";
import fitness from "./components/fitness";
import MentalHealth from "./components/MentalHealth";
import Expert from "./components/ExpertAppointments";
import diet from "./components/diet";
import Header from "./components/Header";


export default function App() {
  return (
      
      <BrowserRouter>
                
          <Switch>
              
              <Route exact path="/" component={signup}  />
              
              <Route exact path="/fitness" component={fitness} />
              <Route exact path="/MentalHealth" component={MentalHealth} />
              <Route exact path="/diet" component={diet} />
              <Route exact path="/ExpertAppointments" component={Expert} />
              
        </Switch>
      </BrowserRouter>

    
  );
}
