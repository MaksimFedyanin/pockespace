import PostsState from "./posts";
import RouterState from "./router";

const state = {
    posts: PostsState,
    router: RouterState,
};

export const initializeRecoilState = (initialRecoilState = {}) => ({set}) =>
    Object.keys(initialRecoilState).map((key) => {
        const atom = state[key];

        const value = initialRecoilState[key] || atom.initialState;

        set(atom.state, value);
    });

export default state;
