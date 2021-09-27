import { useRecoilValue } from "recoil";
import { RouterState } from "../../state/router";
import Home from "../../../pages/home";
import matchPath from "../../utils/matchPath";
import React from "react";

const Routes = [
    {
        component: Home,
        paths: [ { value: '/', exact: true } ],
    }
];

const Router = () => {
    const location = useRecoilValue(RouterState);
    const activeRoute = Routes
        .find((route) => matchPath(location, route.paths));

    if (activeRoute) {
        return <activeRoute.component/>;
    }

    return null;
};

export default Router;
