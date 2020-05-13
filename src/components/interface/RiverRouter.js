import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import River from "../river/River";
import PutIn from "./PutIn";

export default function RiverRouter(props) {
  let { path, url } = useRouteMatch();
  console.log("RiverRouter started.");
  return (
    <Switch>
      <Route exact path={path}>
        <PutIn data={props.data} url={url} />
      </Route>

      <Route path={`${path}/:id`}>
        <River data={props.data} url={url} />
      </Route>
    </Switch>
  );
}
