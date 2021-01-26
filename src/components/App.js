import { Switch, Route, Link } from "react-router-dom";
import { Subscription } from "./Subscription";
import { Subscriptions } from "./Subscriptions";
import { NewSubscription } from "./NewSubscription";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/subscriptions"]} component={Subscriptions} />
        <Route exact path="/subscriptions/new" component={Subscription} />
        <Route exact path="/subscriptions/:id" component={NewSubscription} />
      </Switch>
    </div>
  );
}

export default App;
