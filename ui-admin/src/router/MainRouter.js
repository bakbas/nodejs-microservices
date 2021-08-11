import { Suspense, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { MainLayout } from "LAYOUTS";

import { HomePage } from "PAGES";

const UnderConstructionPage = () => "Under Construction";

export const routes = [
    {
        path: "/",
        component: HomePage,
        exact: true,
        Layout: MainLayout
    },
    {
        path: "/youtubers",
        component: UnderConstructionPage,
        Layout: MainLayout
    }
];

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="loading">
                <Switch>
                    {routes.map(({ Layout = Fragment, ...routeProps }) => (
                        <Route
                            exact={routeProps.exact}
                            key={routeProps.path}
                            path={routeProps.path}
                        >
                            <Layout routes={routes}>
                                <Route {...routeProps} />
                            </Layout>
                        </Route>
                    ))}
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};
