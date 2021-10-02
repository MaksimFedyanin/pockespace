import { atom } from 'recoil';

const InitialRouterState = '/';

export const RouterState = atom({
  key: 'router',
  default: InitialRouterState,
});

export default { state: RouterState, initialState: InitialRouterState };
