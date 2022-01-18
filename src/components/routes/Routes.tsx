import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { APP_ROUTES } from "../../routes/consts";
import SpinnerWrapper from "../common/spinner/SpinnerWrapper";
import Error from "../pages/error/Error";

const Routes: React.FC = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  const Game = lazy(() => import("../pages/game/OurGame"));
  const GameDetail = lazy(() => import("../pages/game/GameDetail"));
  const Studio = lazy(() => import("../pages/studio/Studio"));
  const TeamMemberDetail = lazy(
    () => import("../pages/studio/TeamMemberDetail")
  );
  const Contact = lazy(() => import("../pages/contact/Contact"));
  const Blog = lazy(() => import("../pages/blog/Blog"));
  const BlogDetail = lazy(() => import("../pages/blog/BlogDetail"));
  return (
    <Suspense fallback={<SpinnerWrapper />}>
      <Switch>
        <Route exact path={APP_ROUTES.Home.PATH} component={Home} />
        <Route exact path={APP_ROUTES.GAME.PATH} component={Game} />
        <Route path={APP_ROUTES.GAME.DETAILS.PATH} component={GameDetail} />
        <Route path={APP_ROUTES.STUDIO.PATH} component={Studio} />
        <Route
          path={APP_ROUTES.STUDIO.TEAM_MEMBER_DETAIL.PATH}
          component={TeamMemberDetail}
        />
        <Route path={APP_ROUTES.CONTACT.PATH} component={Contact} />
        <Route exact path={APP_ROUTES.BLOG.PATH} component={Blog} />
        <Route path={APP_ROUTES.BLOG.DETAILS.PATH} component={BlogDetail} />
        <Route path='*'>
          <Error
            statusCode={404}
            title='Page Not Found'
            description='The page you are looking for might have been removed had its name changed or is temporarily unavailable.'
            buttonIsExist={true}
          />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
