import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { APP_ROUTES } from "../../routes/consts";

const Routes: React.FC = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  const GameDetail = lazy(() => import("../pages/gameDetail/GameDetail"));
  const Studio = lazy(() => import("../pages/studio/Studio"));
  const TeamMemberDetail = lazy(
    () => import("../pages/studio/TeamMemberDetail")
  );
  return (
    <Suspense fallback='loading'>
      <Switch>
        <Route exact path={APP_ROUTES.Home.PATH} component={Home} />
        <Route path={APP_ROUTES.GAME.DETAILS.PATH} component={GameDetail} />
        <Route path={APP_ROUTES.STUDIO.PATH} component={Studio} />
        <Route
          path={APP_ROUTES.STUDIO.TEAM_MEMBER_DETAIL.PATH}
          component={TeamMemberDetail}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
