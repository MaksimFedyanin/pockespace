import PostsState from "./posts";
import RouterState from "./router";
import PopupState from "./popup";

const state = {
    posts: PostsState,
    router: RouterState,
    popup: PopupState,
};

export const initializeRecoilState = (initialRecoilState = {}) => ({set}) =>
    Object.keys(initialRecoilState).map((key) => {
        const atom = state[key];

        const value = initialRecoilState[key] || atom.initialState;

        set(atom.state, value);
    });

export default state;
