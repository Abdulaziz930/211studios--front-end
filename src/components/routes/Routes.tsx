import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { APP_ROUTES } from "../../routes/consts";

const Routes: React.FC = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  const GameDetail = lazy(() => import("../pages/gameDetail/GameDetail"));
  return (
    <Suspense fallback='loading'>
      <Switch>
        <Route exact path={APP_ROUTES.Home.PATH} component={Home} />
        <Route path={APP_ROUTES.GAME.DETAILS.PATH} component={GameDetail} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
