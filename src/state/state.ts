import PostsState from './posts';
import RouterState from './router';
import PopupState from './popup';
import PostState from './post';

const state = {
  posts: PostsState,
  router: RouterState,
  popup: PopupState,
  post: PostState,
};

export const initializeRecoilState = (
  initialRecoilState = {},
) => ({ set }) => Object.keys(initialRecoilState).forEach((key) => {
  const atom = state[key];

  const value = initialRecoilState[key] || atom.initialState;

  set(atom.state, value);
});

export default state;
