import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashBoard from "./views/Dashboard";
import Chapter from "views/Chapter";
import Video from "views/Video";
import {ChapterProvider} from "contexts/chapterContext";

function App() {
  return (
    <ChapterProvider>
      <Router>
      
        <Switch>
            <Route exact path="/" component={DashBoard}/>
            <Route path="/:subject/chapters" component={Chapter}/>
            <Route path="/video/:lesson/:id" component={Video}/>
        </Switch>
          
      </Router>
    </ChapterProvider>
    
  );
}

export default App;


// this.props.history.push({
//   pathname: '/template',
//   search: '?query=abc',
//   state: { detail: response.data }
// })