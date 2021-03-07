import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashBoard from "./views/Dashboard";
import Chapter from "views/Chapter";
import Video from "views/Video";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/:subject/chapters" component={Chapter}/>
        </Switch>
      
    </Router>
      // <Video />
    
  );
}

export default App;


// this.props.history.push({
//   pathname: '/template',
//   search: '?query=abc',
//   state: { detail: response.data }
// })