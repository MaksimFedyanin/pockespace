import {atom, selector} from 'recoil';
import matchPath from "../utils/matchPath";

const InitialRouterState = '/';

export const RouterState = atom({
  key: 'router',
  default: InitialRouterState,
});

export const RouterParamsState = selector({
  key: 'routerParamsState',
  get: ({ get }) => {
    const url = get(RouterState);
    const params = matchPath(url);

    return params;
  },
});

export default { state: RouterState, initialState: InitialRouterState };
