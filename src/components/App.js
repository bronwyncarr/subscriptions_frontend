import { Switch, Route } from "react-router-dom";
import { Subscription } from "./Subscription";
import { Subscriptions } from "./Subscriptions";
import { NewSubscription } from "./NewSubscription";
import { Container, Nav, RouterLink } from "../styles/AppStyles";

function App() {
  return (
    <Container>
      <Nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/subscriptions/new">New Subscription</RouterLink>
      </Nav>
      <Switch>
        <Route exact path={["/", "/subscriptions"]} component={Subscriptions} />
        <Route exact path="/subscriptions/new" component={NewSubscription} />
        <Route exact path="/subscriptions/:id" component={Subscription} />
      </Switch>
    </Container>
  );
}

export default App;
