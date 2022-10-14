import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./landing-page";
import PostView from "./post-view";
import Post from "./post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/postview" component={PostView}></Route>
        <Route path='/post' component={Post}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
